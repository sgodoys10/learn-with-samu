export type SessionStatus = "open" | "limited" | "full" | "soon";

const statusLabels: Record<SessionStatus, string> = {
  open: "Enrollment Open",
  limited: "Limited Availability",
  full: "Full",
  soon: "Coming Soon",
};

const statusClasses: Record<SessionStatus, string> = {
  open: "border-accent-deep/30 bg-accent-deep/10 text-accent-deep",
  limited: "border-amber/30 bg-amber/10 text-amber",
  full: "border-rule bg-transparent text-ink-soft",
  soon: "border-dashed border-cyan-deep/40 bg-cyan-deep/10 text-cyan-deep",
};

export default function StatusPill({ status }: { status: SessionStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-s2 py-[0.2rem] font-sans text-micro font-semibold ${statusClasses[status]}`}
    >
      <span
        aria-hidden="true"
        className="mr-s1 h-1.5 w-1.5 rounded-full bg-current"
      />
      {statusLabels[status]}
    </span>
  );
}
