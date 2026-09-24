// components/Footer.tsx

// PLACEHOLDER — "Cadencia" is only a working design name, not final.
const siteName = "Learn with Samu";

const tagline =
  "Spanish classes that help you use the language with confidence through meaningful communication and real-world experiences.";

const links = [
  { label: "Classes", href: "#classes" },
  { label: "Sessions", href: "#sessions" },
  { label: "Contact", href: "#contact" },
];

/**
 * Simple closing footer — name/tagline, a few section links, and a
 * copyright line. Deliberately not a full multi-column footer; no
 * policy pages, social links, or newsletter signup exist yet, per spec.
 */
export default function Footer() {
  return (
    <footer className="border-t border-rule-soft bg-paper-alt">
      <div className="container py-s5">
        <div className="group mb-s4 flex w-fit items-center gap-s2">
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-bronze transition-transform duration-300 ease-out group-hover:translate-x-1"
          />

          <span
            aria-hidden="true"
            className="h-px w-6 bg-rule transition-all duration-300 ease-out group-hover:w-8"
          />

          <span className="font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
            Learn with Samu
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-s4 stack:flex-col stack:items-start">
          <div>
            <p className="font-serif text-h3 text-ink">{siteName}</p>

            <p className="mt-1 font-sans text-small text-ink-soft">{tagline}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-s4 stack:gap-s2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group/link inline-flex items-center gap-1 font-sans text-small font-medium text-ink transition-colors duration-200 hover:text-accent-deep"
                  >
                    <span>{link.label}</span>

                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 ease-out group-hover/link:translate-x-0.5"
                    >
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-s4 border-t border-rule-soft pt-s3 font-sans text-micro text-ink-soft">
          © {new Date().getFullYear()} {siteName}
        </p>
      </div>
    </footer>
  );
}
