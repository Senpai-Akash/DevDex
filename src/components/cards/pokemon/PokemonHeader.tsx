import { CardData } from '@/types/card';
import { motion } from 'framer-motion';

interface PokemonHeaderProps {
  data: CardData;
}

// Simple mapping from technology to badge color
const typeColorMap: Record<string, string> = {
  Typescript: 'bg-yellow-400 text-white',
  Python: 'bg-green-500 text-white',
  Rust: 'bg-gray-600 text-white',
  Go: 'bg-blue-500 text-white',
  Java: 'bg-red-600 text-white',
  Cpp: 'bg-purple-700 text-white',
};

export function PokemonHeader({ data }: PokemonHeaderProps) {
  const typeClass = typeColorMap[data.technology] || 'bg-gray-400 text-white';
  return (
    <motion.div
      className="flex w-full items-start justify-between"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {/* Left side – Type badge */}
      <div className={`rounded px-2 py-1 text-xs font-bold uppercase ${typeClass}`}>
        {data.technology}
      </div>

      {/* Right side – HP */}
      <div className="flex items-center gap-1 text-xl font-black text-red-600">
        <span>{data.rating}</span>
        <span>HP</span>
      </div>

      {/* Center – Name and role */}
      <div className="absolute inset-x-0 top-10 flex flex-col items-center">
        <h2 className="text-2xl font-black uppercase tracking-wider text-gray-800">
          {data.displayName}
        </h2>
        <p className="text-sm font-semibold uppercase text-gray-600">
          {data.role}
        </p>
      </div>

      {/* Rarity badge – bottom right */}
      <div className="absolute right-2 bottom-2 rounded bg-yellow-300 px-2 py-1 text-xs font-bold uppercase">
        {data.rarity}
      </div>
    </motion.div>
  );
}
