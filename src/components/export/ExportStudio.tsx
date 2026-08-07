'use client';

import { forwardRef } from 'react';
import type { CardData } from '@/types/card';
import type { CardTheme } from '@/types/theme';
import ExportOption from './ExportOption';
import { templates } from './templateData';

/**
 * ExportStudio is the main UI container that lists all export formats.
 * Each format is displayed using ExportOption which provides:
 *   – Live preview
 *   – Title, description, usage, resolution, platform icon
 *
 * The component is kept intentionally simple – layout and styling are
 * driven by Tailwind utilities to match the dark premium theme of DevDex.
 */
interface ExportStudioProps {
  data: CardData;
  theme: CardTheme;
}

/* ExportStudio forwards a ref for potential scroll/animation use */
const ExportStudio = forwardRef<HTMLDivElement, ExportStudioProps>(function ExportStudio(
  { data, theme },
  ref,
) {
  return (
    <section
      ref={ref}
      className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
    >
      <h1 className="mb-6 text-3xl font-bold text-white">Export Studio</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((tmpl) => (
          <ExportOption
            key={tmpl.id}
            data={data}
            theme={theme}
            template={tmpl}
          />
        ))}
      </div>
    </section>
  );
});

export default ExportStudio;