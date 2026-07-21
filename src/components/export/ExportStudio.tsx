import { useState, useEffect } from 'react';

// ExportStudio UI component – does NOT handle actual export logic
export default function ExportStudio() {
  // SECTION state
  const [format, setFormat] = useState<'png' | 'jpeg'>('png');
  const [resolution, setResolution] = useState<'1x' | '2x' | '4x'>('1x');
  const [background, setBackground] = useState<'dark' | 'light' | 'transparent'>('dark');
  const [includeWatermark, setIncludeWatermark] = useState(true);
  const [includeShadow, setIncludeShadow] = useState(true);
  const [preserveCorners, setPreserveCorners] = useState(true);
  const [filename, setFilename] = useState('');

  // In a real implementation these would be derived from the active card/theme
  const mockName = 'LinusTorvalds';
  const mockTheme = 'football'; // placeholder, could be synced with ThemePreview via context/event

  // Build filename preview whenever relevant options change
  useEffect(() => {
    const ext = format;
    const namePart = `${mockName}-${mockTheme}`;
    setFilename(`${namePart}.${ext}`);
  }, [format, mockTheme, mockName]);

  return (
    <section className="mt-12 max-w-3xl mx-auto p-6 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg">
      {/* SECTION 1 */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-white">Export Card</h2>
        <p className="text-sm text-gray-300">Download your developer card in different formats.</p>
      </div>

      {/* SECTION 2 – Export Format */}
      <div className="mb-6">
        <p className="mb-2 font-medium text-white">Export Format</p>
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="format"
              value="png"
              checked={format === 'png'}
              onChange={() => setFormat('png')}
              className="text-indigo-500 focus:ring-indigo-500"
            />
            <span className="text-white">PNG</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="format"
              value="jpeg"
              checked={format === 'jpeg'}
              onChange={() => setFormat('jpeg')}
              className="text-indigo-500 focus:ring-indigo-500"
            />
            <span className="text-white">JPEG</span>
          </label>
        </div>
      </div>

      {/* SECTION 3 – Resolution */}
      <div className="mb-6">
        <p className="mb-2 font-medium text-white">Resolution</p>
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Standard (1x)', value: '1x' },
            { label: 'HD (2x)', value: '2x' },
            { label: 'Ultra HD (4x)', value: '4x' },
          ].map((item) => (
            <button
              key={item.value}
              onClick={() => setResolution(item.value as any)}
              className={`p-4 rounded-xl border transition-colors ${
                resolution === item.value
                  ? 'bg-indigo-500/20 border-indigo-400 text-indigo-200'
                  : 'bg-gray-800/30 border-gray-700 text-gray-300 hover:border-gray-500'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* SECTION 4 – Background */}
      <div className="mb-6">
        <p className="mb-2 font-medium text-white">Background</p>
        <div className="flex space-x-4">
          {(['dark', 'light', 'transparent'] as const).map((bg) => (
            <label key={bg} className="flex items-center space-x-2">
              <input
                type="radio"
                name="background"
                value={bg}
                checked={background === bg}
                onChange={() => setBackground(bg)}
                className="text-indigo-500 focus:ring-indigo-500"
              />
              <span className="capitalize text-white">{bg}</span>
            </label>
          ))}
        </div>
      </div>

      {/* SECTION 5 – Options */}
      <div className="mb-6 space-y-2">
        <p className="font-medium text-white">Options</p>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={includeWatermark}
            onChange={() => setIncludeWatermark(!includeWatermark)}
            className="text-indigo-500 focus:ring-indigo-500"
          />
          <span className="text-white">Include DevDex watermark</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={includeShadow}
            onChange={() => setIncludeShadow(!includeShadow)}
            className="text-indigo-500 focus:ring-indigo-500"
          />
          <span className="text-white">Include shadow</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={preserveCorners}
            onChange={() => setPreserveCorners(!preserveCorners)}
            className="text-indigo-500 focus:ring-indigo-500"
          />
          <span className="text-white">Preserve rounded corners</span>
        </label>
      </div>

      {/* SECTION 6 – Filename Preview */}
      <div className="mb-6">
        <p className="font-medium text-white">Filename Preview</p>
        <div className="mt-1 p-2 bg-gray-800/30 rounded text-gray-200 font-mono text-sm">
          {filename || 'example.png'}
        </div>
      </div>

      {/* SECTION 7 – Buttons */}
      <div className="flex justify-center space-x-4">
        <button className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition-colors">
          Export Card
        </button>
        <button className="px-6 py-2 border border-indigo-400 text-indigo-200 rounded hover:bg-indigo-400/10 transition-colors">
          Copy Share Link
        </button>
      </div>
    </section>
  );
}
