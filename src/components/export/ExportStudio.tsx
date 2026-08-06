'use client';

import { useCallback, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import type { CardData } from '@/types/card';
import type { CardTheme } from '@/types/theme';
import { exportElement } from '@/lib/export/exportCard';
import CardPreview from '@/components/export/CardPreview';
import BannerPreview from '@/components/export/BannerPreview';
import WallpaperPreview from '@/components/export/WallpaperPreview';
import {
  ExportOption,
  type ExportOptionConfig,
} from '@/components/export/ExportOption';

export interface ExportStudioProps {
  /** Currently rendered cardData — never re-fetched or regenerated. */
  cardData: CardData;
  /** Active theme — controls which card style is exported. */
  theme: CardTheme;
  onClose: () => void;
}

const CARD_W = 760;
const CARD_H = 1040;
const LINKEDIN_W = 1584;
const LINKEDIN_H = 396;
const TWITTER_W = 1500;
const TWITTER_H = 500;
const DESKTOP_W = 1920;
const DESKTOP_H = 1080;
const MOBILE_W = 1080;
const MOBILE_H = 1920;

const sanitize = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40) || 'devdex';

export default function ExportStudio({
  cardData,
  theme,
  onClose,
}: ExportStudioProps) {
  const [exportingId, setExportingId] = useState<string | null>(null);

  // One ref per export target, all rendered off-screen at native size so
  // html-to-image can capture the exact pixel resolution.
  const cardRef = useRef<HTMLDivElement>(null);
  const linkedinRef = useRef<HTMLDivElement>(null);
  const twitterRef = useRef<HTMLDivElement>(null);
  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  // Lightweight thumbnail wrappers — only render in the studio, never
  // affect DOM structure of the profile page.
  const CardThumb = useCallback(
    function CardThumb({ className = '' }: { className?: string }) {
      return <CardPreview data={cardData} theme={theme} className={className} />;
    },
    [cardData, theme]
  );

  const LinkedInThumb = useCallback(
    function LinkedInThumb({ className = '' }: { className?: string }) {
      return (
        <BannerPreview
          data={cardData}
          theme={theme}
          variant="linkedin"
          className={className}
        />
      );
    },
    [cardData, theme]
  );

  const TwitterThumb = useCallback(
    function TwitterThumb({ className = '' }: { className?: string }) {
      return (
        <BannerPreview
          data={cardData}
          theme={theme}
          variant="twitter"
          className={className}
        />
      );
    },
    [cardData, theme]
  );

  const DesktopThumb = useCallback(
    function DesktopThumb({ className = '' }: { className?: string }) {
      return (
        <WallpaperPreview
          data={cardData}
          theme={theme}
          variant="desktop"
          className={className}
        />
      );
    },
    [cardData, theme]
  );

  const MobileThumb = useCallback(
    function MobileThumb({ className = '' }: { className?: string }) {
      return (
        <WallpaperPreview
          data={cardData}
          theme={theme}
          variant="mobile"
          className={className}
        />
      );
    },
    [cardData, theme]
  );

  const options: ExportOptionConfig[] = useMemo(
    () => [
      {
        id: 'developer-card',
        title: 'Developer Card',
        description:
          'Export your collectible card in its current theme. Perfect for sharing on Discord, X or any chat platform.',
        resolution: 'PNG',
        icon: 'card',
        width: CARD_W,
        height: CARD_H,
        preview: CardThumb,
      },
      {
        id: 'linkedin-banner',
        title: 'LinkedIn Banner',
        description:
          'Personalized LinkedIn cover. Card anchored on the right, profile details on the left — lower-left reserved for your profile photo.',
        resolution: `${LINKEDIN_W} × ${LINKEDIN_H} PNG`,
        icon: 'linkedin',
        width: LINKEDIN_W,
        height: LINKEDIN_H,
        preview: LinkedInThumb,
      },
      {
        id: 'twitter-header',
        title: 'Twitter / X Header',
        description:
          'Wide Twitter/X header with your developer card on the right and a profile summary on the left.',
        resolution: `${TWITTER_W} × ${TWITTER_H} PNG`,
        icon: 'twitter',
        width: TWITTER_W,
        height: TWITTER_H,
        preview: TwitterThumb,
      },
      {
        id: 'desktop-wallpaper',
        title: 'Desktop Wallpaper',
        description:
          'Crisp 1920×1080 developer wallpaper. Card centered on the right with a modern aurora background.',
        resolution: `${DESKTOP_W} × ${DESKTOP_H} PNG`,
        icon: 'desktop',
        width: DESKTOP_W,
        height: DESKTOP_H,
        preview: DesktopThumb,
      },
      {
        id: 'mobile-wallpaper',
        title: 'Mobile Wallpaper',
        description:
          'Vertical 1080×1920 phone wallpaper with stacked card and profile block. Great for lock screens.',
        resolution: `${MOBILE_W} × ${MOBILE_H} PNG`,
        icon: 'mobile',
        width: MOBILE_W,
        height: MOBILE_H,
        preview: MobileThumb,
      },
    ],
    [CardThumb, LinkedInThumb, TwitterThumb, DesktopThumb, MobileThumb]
  );

  const buildFilename = (id: string) => {
    const safeUser = sanitize(cardData.username || cardData.displayName || 'devdex');
    const safeTheme = sanitize(theme);
    return `${safeUser}-${id}-${safeTheme}.png`;
  };

  const refsByOption: Record<string, React.RefObject<HTMLDivElement | null>> = {
    'developer-card': cardRef,
    'linkedin-banner': linkedinRef,
    'twitter-header': twitterRef,
    'desktop-wallpaper': desktopRef,
    'mobile-wallpaper': mobileRef,
  };

  const handleDownload = async (option: ExportOptionConfig) => {
    const ref = refsByOption[option.id];
    if (!ref?.current) return;
    setExportingId(option.id);
    try {
      await exportElement({
        element: ref.current,
        filename: buildFilename(option.id),
        format: 'png',
        pixelRatio: 1,
      });
    } catch (e) {
      console.error('Export failed', e);
    } finally {
      setExportingId(null);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        key="export-studio"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] overflow-y-auto bg-slate-950/85 backdrop-blur-xl"
      >
        {/* decorative bg */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10"
          style={{
            background:
              'radial-gradient(circle at 10% 0%, rgba(99,102,241,0.18), transparent 50%), radial-gradient(circle at 90% 100%, rgba(6,182,212,0.18), transparent 50%)',
          }}
        />

        <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-6 sm:px-8">
          {/* Header */}
          <header className="relative mb-12 flex flex-col items-center text-center">
            <motion.button
              type="button"
              onClick={onClose}
              whileHover={{ rotate: 90, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 280, damping: 18 }}
              className="absolute right-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur transition hover:bg-white/10 sm:right-2"
              aria-label="Close export studio"
            >
              <X className="h-5 w-5" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.35em] text-indigo-200"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Premium Branding Kit
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="bg-gradient-to-r from-white via-indigo-100 to-cyan-200 bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-5xl"
            >
              Export Studio
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 max-w-xl text-base leading-relaxed text-slate-400"
            >
              Choose how you want to showcase your developer profile. Every
              export uses the card you generated — no re-fetching, no
              surprises, just pixel-perfect downloads.
            </motion.p>
          </header>

          {/* Options grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {options.map((option, idx) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="flex"
              >
                <ExportOption
                  option={option}
                  onDownload={handleDownload}
                  downloading={!!exportingId}
                  isCurrent={exportingId === option.id}
                />
              </motion.div>
            ))}
          </div>

          <p className="mt-14 text-center text-xs uppercase tracking-[0.3em] text-slate-500">
            Theme: <span className="text-cyan-300">{theme}</span> ·{' '}
            @{cardData.username}
          </p>
        </div>

        {/*
          Off-screen renders for full-resolution PNG capture.
          They live outside the visible layout but stay mounted so the DOM
          node is always addressable when the user clicks Download.
        */}
        <div
          aria-hidden
          style={{
            position: 'fixed',
            left: '-99999px',
            top: 0,
            pointerEvents: 'none',
            opacity: 1,
          }}
        >
          <div ref={cardRef}>
            <CardPreview data={cardData} theme={theme} />
          </div>
          <div ref={linkedinRef}>
            <BannerPreview data={cardData} theme={theme} variant="linkedin" />
          </div>
          <div ref={twitterRef}>
            <BannerPreview data={cardData} theme={theme} variant="twitter" />
          </div>
          <div ref={desktopRef}>
            <WallpaperPreview data={cardData} theme={theme} variant="desktop" />
          </div>
          <div ref={mobileRef}>
            <WallpaperPreview data={cardData} theme={theme} variant="mobile" />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}