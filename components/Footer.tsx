// components/Footer.tsx

// PLACEHOLDER — "Cadencia" is only a working design name, not final.
const siteName = "[Site Name]";
const tagline = "[One-line description of the Spanish teaching offering]";

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
      <div className="container flex flex-col gap-s4 py-s5 stack:gap-s3">
        <div className="flex flex-wrap items-center justify-between gap-s3 stack:flex-col stack:items-start">
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
                    className="font-sans text-small font-medium text-ink transition-colors hover:text-accent-deep"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="border-t border-rule-soft pt-s3 font-sans text-micro text-ink-soft">
          © {new Date().getFullYear()} {siteName}
        </p>
      </div>
    </footer>
  );
}
