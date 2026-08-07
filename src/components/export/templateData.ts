'use client';

/**
 * Definition of all export templates shown in ExportStudio.
 * Each entry provides all UI metadata required by ExportOption.
 */
export const templates = [
  {
    id: 'card',
    title: 'Developer Card',
    description: 'Premium trading‑card quality, high‑resolution export.',
    usage: 'Shareable collectible',
    resolution: '760 × 1040 px (multiple scales available)',
    icon: '/icons/card.svg',
    variant: '',
  },
  {
    id: 'linkedin',
    title: 'LinkedIn Banner',
    description:
      'Professional personal branding banner, respects LinkedIn profile picture safe area.',
    usage: 'Profile header',
    resolution: '1584 × 396 px',
    icon: '/icons/linkedin.svg',
    variant: 'linkedin',
  },
  {
    id: 'twitter',
    title: 'Twitter / X Header',
    description:
      'Bold social‑media header that instantly says “I’m a developer”.',
    usage: 'Social branding',
    resolution: '1500 × 500 px',
    icon: '/icons/twitter.svg',
    variant: 'twitter',
  },
  {
    id: 'desktop',
    title: 'Desktop Wallpaper',
    description:
      'Immersive wallpaper with atmospheric lighting, suitable for IDE backgrounds.',
    usage: 'Desktop background',
    resolution: '1920 × 1080 px',
    icon: '/icons/desktop.svg',
    variant: 'desktop',
  },
  {
    id: 'mobile',
    title: 'Mobile Wallpaper',
    description:
      'Portrait lock‑screen/home‑screen wallpaper respecting safe zones.',
    usage: 'Mobile lock screen',
    resolution: '1080 × 1920 px',
    icon: '/icons/mobile.svg',
    variant: 'mobile',
  },
];