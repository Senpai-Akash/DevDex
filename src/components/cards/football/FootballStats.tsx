import { CardStats } from "../../../types/card";

interface FootballStatsProps {
  stats: CardStats;
}

const LEFT = [
  { key: "attack", label: "PAC" },
  { key: "intelligence", label: "SHO" },
  { key: "speed", label: "PAS" },
] as const;

const RIGHT = [
  { key: "defense", label: "DRI" },
  { key: "versatility", label: "DEF" },
  { key: "teamwork", label: "PHY" },
] as const;

function StatColumn({
  items,
  stats,
}: {
  items: readonly {
    key: keyof CardStats;
    label: string;
  }[];
  stats: CardStats;
}) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item.key}
          className="flex items-center justify-between"
        >
          <span className="w-12 text-right text-[1.65rem] font-black leading-none text-white">
            {Math.round(stats[item.key])}
          </span>

          <span className="ml-4 text-[0.82rem] font-black tracking-[0.18em] text-amber-300">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function FootballStats({
  stats,
}: FootballStatsProps) {
  return (
    <section className="mt-5 rounded-2xl border border-amber-400/20 bg-black/20 px-8 py-6 backdrop-blur-sm">

      <div className="grid grid-cols-2 gap-10">

        <StatColumn
          items={LEFT}
          stats={stats}
        />

        <StatColumn
          items={RIGHT}
          stats={stats}
        />

      </div>

    </section>
  );
}