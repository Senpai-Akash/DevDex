interface FootballFooterProps {
  edition: string;
  branding: string;
  cardNumber: string;
}

export function FootballFooter({ edition, branding, cardNumber }: FootballFooterProps) {
  return (
    <footer className="mt-3 grid grid-cols-3 gap-2 text-[0.56rem] uppercase tracking-[0.18em] text-slate-500">
      <div className="min-w-0">
        <p className="text-[0.52rem] tracking-[0.24em] text-slate-400">Edition</p>
        <p className="truncate font-semibold text-slate-100">{edition}</p>
      </div>
      <div className="min-w-0 text-center">
        <p className="text-[0.52rem] tracking-[0.24em] text-slate-400">Brand</p>
        <p className="truncate font-semibold text-amber-200">{branding}</p>
      </div>
      <div className="min-w-0 text-right">
        <p className="text-[0.52rem] tracking-[0.24em] text-slate-400">Card</p>
        <p className="truncate font-semibold text-slate-100">{cardNumber}</p>
      </div>
    </footer>
  );
}
