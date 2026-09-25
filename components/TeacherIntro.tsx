import Image from "next/image";

const teacher = {
  name: "Samuel",
  photoAlt: "Portrait of Samuel",
  photoSrc: "/samuel.jpeg",
  greeting: "Hi, I'm Samuel.",
  bio: [
    "I’m a Spanish teacher from Cali, Colombia. I began teaching Spanish while studying Latin American Studies and History, and have since taught students from a wide range of backgrounds, levels, and goals—from introductory Spanish to advanced university courses and AP Spanish.",
    "I hold an M.A. in Latin American Studies from UC San Diego and a 120-hour TEFL certification. My teaching combines real-world communication with thoughtful attention to language, culture, and the goals of each student.",
  ],
  philosophy:
    "Feel comfortable learning. Make mistakes. Build confidence through meaningful use.",
  credentials: [
    "M.A. Latin American Studies — UC San Diego",
    "B.A. International Relations & Latin American Studies — University of Virginia",
    "8+ years teaching Spanish",
  ],
};

export default function TeacherIntro() {
  return (
    <section id="about" className="bg-paper-alt">
      <div className="container py-s7">
        <div className="group flex w-fit items-center gap-s2">
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-accent transition-transform duration-300 ease-out group-hover:translate-x-1"
          />

          <span
            aria-hidden="true"
            className="h-px w-6 bg-rule transition-all duration-300 ease-out group-hover:w-8"
          />

          <p className="font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
            01 / The teacher
          </p>
        </div>

        <div className="group mt-s2 w-fit">
          <h2 className="font-serif text-h2 font-medium text-ink">
            Meet your teacher
          </h2>

          <p className="gloss mt-s1 text-h3 opacity-75 transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:opacity-100">
            Conoce a tu profesor
          </p>
        </div>

        <div className="mt-s6 grid grid-cols-[minmax(360px,0.9fr)_minmax(0,1fr)] items-start gap-s7 nav:grid-cols-1 nav:gap-s5">
          <div>
            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-panel">
              <Image
                src={teacher.photoSrc}
                alt={teacher.photoAlt}
                fill
                sizes="(max-width: 980px) 100vw, 48vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
            </div>

            <div className="mt-s3 flex items-center justify-between border-t border-rule-soft pt-s2">
              <p className="font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
                Cali, Colombia
              </p>

              <p className="font-serif text-small italic text-ink-soft">
                Español
              </p>
            </div>
          </div>

          <div className="prose-measure pt-s2">
            <p className="font-serif text-h3 text-ink">{teacher.greeting}</p>

            <div className="mt-s4 space-y-s3">
              {teacher.bio.map((paragraph, index) => (
                <p key={index} className="font-sans text-body text-ink">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-s5 border-l-2 border-accent pl-s3">
              <p className="font-sans text-body text-ink-soft">
                {teacher.philosophy}
              </p>
            </div>

            {teacher.credentials.length > 0 && (
              <ul className="mt-s5 border-t border-rule-soft pt-s3">
                {teacher.credentials.map((item, index) => (
                  <li
                    key={index}
                    className="border-b border-rule-soft py-s2 font-sans text-micro font-medium uppercase tracking-wide text-ink-soft transition-transform duration-200 hover:translate-x-0.5"
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
