interface FootballFooterProps {
  edition: string;
  branding: string;
  cardNumber: string;
}

export function FootballFooter({ edition, branding, cardNumber }: FootballFooterProps) {
  return (
    <footer className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-3 text-[0.68rem] uppercase tracking-[0.25em] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
      <div className="space-y-1">
        <p className="text-[0.6rem] tracking-[0.35em] text-slate-400">Edition</p>
        <p className="font-semibold text-slate-100">{edition}</p>
      </div>
      <div className="space-y-1 text-center">
        <p className="text-[0.6rem] tracking-[0.35em] text-slate-400">Brand</p>
        <p className="font-semibold text-amber-200">{branding}</p>
      </div>
      <div className="space-y-1 text-right">
        <p className="text-[0.6rem] tracking-[0.35em] text-slate-400">Card</p>
        <p className="font-semibold text-slate-100">{cardNumber}</p>
      </div>
    </footer>
  );
}
