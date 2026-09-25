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
    <div className="group border-t-2 border-ink pt-s4 transition-transform duration-300 ease-out hover:-translate-y-1">
      <div className="flex items-start justify-between gap-s4">
        <div>
          <h3 className="font-serif text-h3 text-ink transition-colors duration-200 group-hover:text-accent-deep">
            {heading}
          </h3>

          <p className="gloss mt-s1">{gloss}</p>
        </div>

        <span
          aria-hidden="true"
          className="font-serif text-h3 text-ink-soft/40 transition-transform duration-300 ease-out group-hover:translate-x-1"
        >
          →
        </span>
      </div>

      <p className="mt-s4 max-w-measure font-sans text-body text-ink-soft">
        {description}
      </p>

      <ul className="mt-s4 space-y-s2 border-t border-rule-soft pt-s3">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex items-start gap-s2">
            <span
              aria-hidden="true"
              className="mt-[0.5em] size-1.5 flex-shrink-0 rounded-full bg-accent transition-transform duration-200 group-hover:translate-x-0.5"
            />

            <span className="font-sans text-small text-ink">{bullet}</span>
          </li>
        ))}
      </ul>

      <a
        href={ctaHref}
        className="group/link mt-s4 inline-flex min-h-11 items-center gap-1 border-b border-accent-deep font-sans text-small font-semibold text-accent-deep transition-all duration-200 hover:border-accent hover:text-accent"
      >
        <span>{ctaLabel}</span>

        <span
          aria-hidden="true"
          className="transition-transform duration-200 group-hover/link:translate-x-1"
        >
          →
        </span>
      </a>
    </div>
  );
}
