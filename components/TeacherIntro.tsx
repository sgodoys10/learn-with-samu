// components/TeacherIntro.tsx

// PLACEHOLDER content only. Nothing here is invented — every credential,
// bio line, and the photo itself are marked as placeholders to be
// replaced with real content. No degrees, years, employers, student
// counts, or testimonials are implied.
const teacher = {
  name: "[Teacher Name]",
  photoAlt: "[Portrait of teacher name — replace with a real photo]",
  greeting: "Hi, I'm [Teacher Name].",
  bio: [
    "[Short first-person paragraph — who you are and how you came to teach Spanish.]",
    "[Short first-person paragraph — your background or approach relevant to teaching.]",
  ],
  philosophy:
    "[One paragraph describing your teaching philosophy and what a class with you actually feels like.]",
  // Compact list, not a résumé timeline — one short line per item.
  credentials: [
    "[Credential or background line]",
    "[Credential or background line]",
  ],
};

/**
 * First-person teacher introduction. Built around a real photo slot
 * (currently a placeholder block, not a generated or invented image) and
 * a first-person greeting, per spec — this section is meant to build
 * trust, not read as a résumé.
 */
export default function TeacherIntro() {
  return (
    <section id="about" className="bg-paper-alt">
      <div className="container py-s7">
        <p className="mb-s2 font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
          The teacher
        </p>
        <h2 className="font-serif text-h2 font-medium text-ink">
          Meet your teacher
        </h2>
        <p className="gloss mt-s1 text-h3">Conoce a tu profesora o profesor</p>

        <div className="mt-s5 grid grid-cols-[280px_1fr] gap-s5 nav:grid-cols-1">
          {/* PLACEHOLDER photo slot — replace this div with a real
              next/image once a photo is supplied. Do not fill with a
              generated or stock image. */}
          <div
            role="img"
            aria-label={teacher.photoAlt}
            className="aspect-[4/5] w-full rounded-panel border border-rule bg-bronze/30"
          />

          <div className="prose-measure">
            <p className="font-serif text-h3 text-ink">{teacher.greeting}</p>

            <div className="mt-s3 space-y-s3">
              {teacher.bio.map((paragraph, index) => (
                <p key={index} className="font-sans text-body text-ink">
                  {paragraph}
                </p>
              ))}
            </div>

            <p className="mt-s3 font-sans text-body text-ink-soft">
              {teacher.philosophy}
            </p>

            {teacher.credentials.length > 0 && (
              <ul className="mt-s4 flex flex-wrap gap-s2 border-t border-rule-soft pt-s3 stack:flex-col">
                {teacher.credentials.map((item, index) => (
                  <li
                    key={index}
                    className="font-sans text-micro font-medium uppercase tracking-wide text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
