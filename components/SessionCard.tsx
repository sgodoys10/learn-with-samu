// components/SessionCard.tsx
import StatusPill, { type SessionStatus } from "./StatusPill";

export type Session = {
  level: string;
  sessionLabel: string;
  startDate: string;
  endDate: string;
  meetingPattern: string;
  status: SessionStatus;
};

/**
 * Single session card. Start/end dates are shown as their own labeled
 * line (not folded into a sentence) since they need to be clearly
 * visible at a glance, per spec.
 */
export default function SessionCard({ session }: { session: Session }) {
  return (
    <div className="rounded-panel border border-rule bg-paper p-s4">
      <div className="flex items-start justify-between gap-s2">
        <p className="font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
          {session.level}
        </p>
        <StatusPill status={session.status} />
      </div>

      <h3 className="mt-s1 font-serif text-h3 text-ink">
        {session.sessionLabel}
      </h3>

      <dl className="mt-s3 space-y-1">
        <div className="flex justify-between gap-s2">
          <dt className="font-sans text-small text-ink-soft">Starts</dt>
          <dd className="font-sans text-small font-medium text-ink">
            {session.startDate}
          </dd>
        </div>
        <div className="flex justify-between gap-s2">
          <dt className="font-sans text-small text-ink-soft">Ends</dt>
          <dd className="font-sans text-small font-medium text-ink">
            {session.endDate}
          </dd>
        </div>
      </dl>

      <p className="mt-s3 border-t border-rule-soft pt-s2 font-sans text-small text-ink">
        {session.meetingPattern}
      </p>
    </div>
  );
}
