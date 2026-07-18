import { CardStats } from '../../../types/card';

interface FootballStatsProps {
  stats: CardStats;
}

const STAT_ITEMS: Array<{ key: keyof CardStats; abbr: string; label: string; icon: string }> = [
  { key: 'attack', abbr: 'ACT', label: 'Activity', icon: '⚡' },
  { key: 'defense', abbr: 'COL', label: 'Collaboration', icon: '👥' },
  { key: 'intelligence', abbr: 'IMP', label: 'Impact', icon: '📊' },
  { key: 'speed', abbr: 'REL', label: 'Reliability', icon: '🛡️' },
  { key: 'versatility', abbr: 'IQ', label: 'Problem Solving', icon: '🧠' },
  { key: 'teamwork', abbr: 'GRT', label: 'Grit', icon: '💪' },
];

function StatBox({ abbr, icon, value }: { abbr: string; icon: string; value: number }) {
  return (
    <div className="relative flex min-h-[58px] items-center justify-center gap-1.5 rounded-xl border border-amber-400/45 bg-gradient-to-b from-amber-900/55 to-slate-900/90 px-2 py-2 backdrop-blur-sm shadow-md shadow-amber-900/25 transition-shadow hover:shadow-amber-900/45">
      <div className="text-base leading-none drop-shadow-lg">{icon}</div>
      <div className="text-left leading-none">
        <div className="mb-1 text-[0.56rem] font-bold uppercase tracking-[0.22em] text-amber-300">{abbr}</div>
        <div className="text-base font-black text-amber-100">{value}</div>
      </div>
    </div>
  );
}

export function FootballStats({ stats }: FootballStatsProps) {
  return (
    <section aria-labelledby="football-stats-title" className="w-full">
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
        {STAT_ITEMS.map((item) => (
          <StatBox key={item.key} abbr={item.abbr} icon={item.icon} value={Math.round(stats[item.key])} />
        ))}
      </div>
    </section>
  );
}
