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
    <div className="flex min-w-0 items-center justify-center gap-1.5">
      <div className="text-sm leading-none drop-shadow-lg">{icon}</div>
      <div className="min-w-0 leading-none">
        <div className="text-[0.53rem] font-bold uppercase tracking-[0.2em] text-amber-300/80">{abbr}</div>
        <div className="mt-1 text-lg font-black text-amber-100">{value}</div>
      </div>
    </div>
  );
}

export function FootballStats({ stats }: FootballStatsProps) {
  return (
    <section aria-labelledby="football-stats-title" className="w-full border-y border-amber-300/15 py-3">
      <div className="grid grid-cols-3 gap-x-3 gap-y-3 sm:grid-cols-6">
        {STAT_ITEMS.map((item) => (
          <StatBox key={item.key} abbr={item.abbr} icon={item.icon} value={Math.round(stats[item.key])} />
        ))}
      </div>
    </section>
  );
}
