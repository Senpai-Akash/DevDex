interface FootballFooterProps {
  edition: string;
  branding: string;
  cardNumber: string;
}

export function FootballFooter({ edition, branding, cardNumber }: FootballFooterProps) {
  return (
    <footer className="mt-3 grid grid-cols-3 gap-2 text-[0.56rem] uppercase tracking-[0.18em] text-slate-500">
      <dl className="min-w-0">
        <dt className="text-[0.52rem] tracking-[0.24em] text-slate-400">Edition</dt>
        <dd className="truncate font-semibold text-slate-100">{edition}</dd>
      </dl>
      <dl className="min-w-0 text-center">
        <dt className="text-[0.52rem] tracking-[0.24em] text-slate-400">Brand</dt>
        <dd className="truncate font-semibold text-amber-200">{branding}</dd>
      </dl>
      <dl className="min-w-0 text-right">
        <dt className="text-[0.52rem] tracking-[0.24em] text-slate-400">Card</dt>
        <dd className="truncate font-semibold text-slate-100">{cardNumber}</dd>
      </dl>
    </footer>
  );
}
