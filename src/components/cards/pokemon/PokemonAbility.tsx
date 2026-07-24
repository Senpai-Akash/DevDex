'use client';

interface PokemonAbilityProps {
  developerClass?: string;
  trait: string;
  typeColor: string;
}

export function PokemonAbility({
  developerClass,
  trait,
  typeColor,
}: PokemonAbilityProps) {
  const abilityName = developerClass ?? 'Full Stack';

  return (
    <section className="mx-3 mb-2">

      {/* Ability Header */}

      <div className="flex items-center gap-2">

        {/* Pokémon Ability Pill */}

        <div className="rounded-full bg-[#d92d2d] px-2.5 py-[2px] shadow-sm">

          <span className="text-[9px] font-black uppercase tracking-wider text-white">
            Ability
          </span>

        </div>

        {/* Ability Name */}

        <span
          className="text-[13px] font-black tracking-tight"
          style={{
            color: typeColor,
          }}
        >
          {abilityName}
        </span>

      </div>

      {/* Divider */}

      <div
        className="mt-1 mb-1 h-px"
        style={{
          background: `${typeColor}55`,
        }}
      />

      {/* Ability Text */}

      <p className="text-[11px] leading-4 text-neutral-700">

        <span className="font-semibold">
          Once during your turn,
        </span>{' '}

        this developer can use

        <span
          className="font-bold"
          style={{
            color: typeColor,
          }}
        >
          {' '}
          {trait}
        </span>

        {' '}to gain an advantage during development.

      </p>

    </section>
  );
}