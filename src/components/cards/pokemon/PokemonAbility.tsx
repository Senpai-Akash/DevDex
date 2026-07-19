'use client';

interface PokemonAbilityProps {
  developerClass?: string;
  trait: string;
  typeColor: string;
}

/**
 * Ability box — displayed between the artwork and attacks.
 * Styled exactly like a Pokémon card ability/Poké-Power section:
 *  • Red "Ability" pill on the left
 *  • Ability name next to it
 *  • Italic flavour text below
 */
export function PokemonAbility({ developerClass, trait, typeColor }: PokemonAbilityProps) {
  const abilityName = developerClass ?? 'Full-Stack';

  return (
    <div
      className="mx-3 mb-2 rounded-md border px-2.5 py-2"
      style={{
        borderColor: `${typeColor}55`,
        background: `linear-gradient(135deg, rgba(255,255,255,0.85) 0%, ${typeColor}11 100%)`,
      }}
    >
      <div className="flex items-center gap-2 mb-1">
        {/* Red Ability pill */}
        <span className="shrink-0 rounded-full bg-red-600 px-2 py-0.5 text-[0.52rem] font-black uppercase tracking-widest text-white">
          Ability
        </span>
        {/* Ability name */}
        <span className="text-[0.72rem] font-black uppercase tracking-wide text-gray-800">
          {abilityName}
        </span>
      </div>
      {/* Flavour / trait text */}
      {trait && (
        <p className="text-[0.62rem] italic leading-snug text-gray-600">
          {trait}
        </p>
      )}
    </div>
  );
}
