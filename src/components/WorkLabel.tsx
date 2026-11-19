export type WorkKind =
  | 'Shipped product, in-house team'
  | 'Client project'
  | 'Programme project'
  | 'Unsolicited concept'
  | 'Self-set brief'
  | 'Demo'
  | 'Internal tool'
  | 'This site';

// Plain label saying what kind of work a piece is. Same pill shape as the tags,
// with the main text colour so it reads clearly against the surface in both themes.
export default function WorkLabel({ kind, className = '' }: { kind: WorkKind; className?: string }) {
  return (
    <span
      className={`inline-block text-xs font-medium border border-[var(--text-400)] text-[var(--text)] px-3 py-1 rounded-full ${className}`}
    >
      {kind}
    </span>
  );
}
