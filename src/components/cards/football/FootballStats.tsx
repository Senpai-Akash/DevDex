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
    <div className="relative flex flex-col items-center justify-center rounded-2xl border-2 border-amber-400/50 bg-gradient-to-b from-amber-900/60 to-slate-900/90 p-4 backdrop-blur-sm shadow-md shadow-amber-900/30 hover:shadow-amber-900/50 transition-shadow">
      <div className="text-3xl mb-2 filter drop-shadow-lg">{icon}</div>
      <div className="text-[0.72rem] uppercase tracking-[0.4em] font-bold text-amber-300 leading-none mb-1">{abbr}</div>
      <div className="text-2xl font-black text-amber-200">{value}</div>
    </div>
  );
}

export function FootballStats({ stats }: FootballStatsProps) {
  return (
    <section aria-labelledby="football-stats-title" className="w-full">
      <div className="grid grid-cols-2 gap-4">
        {STAT_ITEMS.map((item) => (
          <StatBox key={item.key} abbr={item.abbr} icon={item.icon} value={Math.round(stats[item.key])} />
        ))}
      </div>
    </section>
  );
}
