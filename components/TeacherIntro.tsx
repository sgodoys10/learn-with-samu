// components/TeacherIntro.tsx

import Image from "next/image";

const teacher = {
  name: "Samuel",
  photoAlt: "Portrait of Samuel",
  photoSrc: "/samuel.jpeg",
  greeting: "Hi, I'm Samuel.",
  bio: [
    "I’m a Spanish instructor and language educator with years of experience teaching Spanish to university students and learners in a variety of settings. Spanish is my first language, and I am from Cali, Colombia. I began teaching Spanish while pursuing my studies in Latin American Studies and History, and teaching quickly became an important part of my work. Since then, I’ve taught Spanish at the university level, both online and in person, and worked with students with different goals, backgrounds, and levels of experience.",
    "My teaching is grounded in language education and a strong interest in the cultures and communities where Spanish is spoken. I have an M.A. in Latin American Studies from UC San Diego and have taught Spanish from introductory courses through advanced university-level language and culture. I have continued teaching Spanish to high school students, including AP Spanish, while also teaching English alongside my Spanish instruction. I hold a 120-hour TEFL certification and continue to develop my practice through language pedagogy and curriculum design.",
  ],
  philosophy:
    "In my classes, Spanish is something we use—not just something we study. We work with real-world topics, conversations, texts, media, and situations that give students a reason to communicate. Grammar and vocabulary are introduced and practiced as tools for expressing ideas, understanding others, and accomplishing meaningful tasks. Classes are active and collaborative, with opportunities to listen, speak, read, and write. Progress also requires work beyond the classroom, so students are expected to engage with Spanish regularly and take an active role in working toward the goals for their level.",
  credentials: [
    "M.A. Latin American Studies — UC San Diego",
    "120-Hour TEFL Certification",
  ],
};

/**
 * First-person teacher introduction built around a real photo,
 * personal background, and teaching philosophy.
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
        <p className="gloss mt-s1 text-h3">Conoce a tu profesor</p>

        <div className="mt-s5 grid grid-cols-[280px_1fr] gap-s5 nav:grid-cols-1">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-panel border border-rule">
            <Image
              src={teacher.photoSrc}
              alt={teacher.photoAlt}
              fill
              sizes="(max-width: 980px) 100vw, 280px"
              className="object-cover"
            />
          </div>

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
