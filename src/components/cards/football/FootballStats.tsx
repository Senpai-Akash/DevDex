import { CardStats } from '../../../types/card';
import { StatBar } from './StatBar';

interface FootballStatsProps {
  stats: CardStats;
}

const STAT_ITEMS: Array<{ key: keyof CardStats; label: string }> = [
  { key: 'attack', label: 'Attack' },
  { key: 'defense', label: 'Defense' },
  { key: 'intelligence', label: 'Intelligence' },
  { key: 'speed', label: 'Speed' },
  { key: 'versatility', label: 'Versatility' },
  { key: 'teamwork', label: 'Teamwork' },
];

export function FootballStats({ stats }: FootballStatsProps) {
  return (
    <section aria-labelledby="football-stats-title" className="grid gap-4 md:grid-cols-2">
      <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-4 backdrop-blur-xl">
        <p id="football-stats-title" className="mb-4 text-xs uppercase tracking-[0.4em] text-slate-500">
          Stats
        </p>
        <div className="space-y-4">
          {STAT_ITEMS.map((item) => (
            <StatBar key={item.key} label={item.label} value={stats[item.key]} />
          ))}
        </div>
      </div>
    </section>
  );
}
