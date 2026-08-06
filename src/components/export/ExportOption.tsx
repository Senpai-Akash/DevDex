'use client';

import { motion } from 'framer-motion';
import {
  Download,
  Loader2,
  CreditCard,
  Briefcase,
  Bird,
  Monitor,
  Smartphone,
  Image as ImageIcon,
  type LucideIcon,
} from 'lucide-react';

export interface ExportOptionConfig {
  id: string;
  title: string;
  description: string;
  resolution: string;
  icon: 'card' | 'linkedin' | 'twitter' | 'desktop' | 'mobile';
  /** Live render dimensions (px) */
  width: number;
  height: number;
  /**
   * Component that renders the live preview at full resolution.
   * Must accept { className?: string }.
   */
  preview: React.ComponentType<{ className?: string }>;
}

const ICON_MAP: Record<ExportOptionConfig['icon'], LucideIcon> = {
  card: CreditCard,
  linkedin: Briefcase,
  twitter: Bird,
  desktop: Monitor,
  mobile: Smartphone,
};

const THUMBNAIL_WIDTH = 220;

interface ExportOptionProps {
  option: ExportOptionConfig;
  onDownload: (option: ExportOptionConfig) => void;
  downloading: boolean;
  isCurrent: boolean;
}

export function ExportOption({
  option,
  onDownload,
  downloading,
  isCurrent,
}: ExportOptionProps) {
  const Icon = ICON_MAP[option.icon];
  const Preview = option.preview;

  // Scale the fixed-size preview down into the thumbnail frame
  const scale = THUMBNAIL_WIDTH / option.width;
  const scaledHeight = option.height * scale;

  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-5 shadow-[0_8px_40px_-12px_rgba(99,102,241,0.35)] backdrop-blur-xl"
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition-colors duration-500 group-hover:border-indigo-400/40" />

      <header className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-cyan-500/30 text-indigo-100 shadow-inner">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base font-black leading-tight text-white">
              {option.title}
            </h3>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-300">
              {option.resolution}
            </p>
          </div>
        </div>
        <ImageIcon className="h-4 w-4 text-slate-500" />
      </header>

      {/* Thumbnail */}
      <div
        className="relative mx-auto mb-4 overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl"
        style={{
          width: THUMBNAIL_WIDTH,
          height: scaledHeight,
        }}
      >
        <div
          className="origin-top-left"
          style={{
            transform: `scale(${scale})`,
            width: option.width,
            height: option.height,
          }}
        >
          <Preview />
        </div>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-slate-300">
        {option.description}
      </p>

      <button
        type="button"
        disabled={downloading && isCurrent}
        onClick={() => onDownload(option)}
        className="mt-auto flex items-center justify-center gap-2 rounded-2xl border border-indigo-400/30 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 px-4 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-indigo-300 hover:from-indigo-500/40 hover:via-purple-500/40 hover:to-cyan-500/40 hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.6)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {downloading && isCurrent ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Exporting…
          </>
        ) : (
          <>
            <Download className="h-4 w-4" />
            Download
          </>
        )}
      </button>
    </motion.article>
  );
}

export default ExportOption;