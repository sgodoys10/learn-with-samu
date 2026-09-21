// components/OfferingPanel.tsx

type OfferingPanelProps = {
  heading: string;
  gloss: string;
  description: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
};

/**
 * Single offering panel — used twice (group, private) with matching
 * structure so both read as two forms of the same teaching approach.
 */
export default function OfferingPanel({
  heading,
  gloss,
  description,
  bullets,
  ctaLabel,
  ctaHref,
}: OfferingPanelProps) {
  return (
    <div className="rounded-panel bg-paper p-s4">
      <h3 className="font-serif text-h3 text-ink">{heading}</h3>
      <p className="gloss mt-s1">{gloss}</p>

      <p className="mt-s3 font-sans text-body text-ink-soft">{description}</p>

      <ul className="mt-s3 space-y-s2">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex items-start gap-s2">
            <span
              aria-hidden="true"
              className="mt-[0.5em] size-1.5 flex-shrink-0 rounded-full bg-accent"
            />
            <span className="font-sans text-small text-ink">{bullet}</span>
          </li>
        ))}
      </ul>

      <a
        href={ctaHref}
        className="mt-s4 inline-flex min-h-11 items-center border-b border-accent-deep font-sans text-small font-semibold text-accent-deep transition-colors hover:border-accent hover:text-accent"
      >
        {ctaLabel}
      </a>
    </div>
  );
}
