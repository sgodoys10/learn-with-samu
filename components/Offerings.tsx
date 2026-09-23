import OfferingPanel from "./OfferingPanel";

const connector =
  "Whether you learn in a group or through individual instruction, the approach stays the same: Spanish is learned through meaningful communication, real-world contexts, and clear proficiency goals.";

const group = {
  heading: "Group Spanish Classes",
  gloss: "Clases grupales de español",
  description:
    "Small-group courses for students who want to develop their Spanish through consistent practice and interaction with other learners. All group courses meet twice a week for 10 weeks, with each class lasting one hour. Courses range from Novice through Advanced proficiency levels and work toward clear ACTFL-aligned goals through real-world topics, activities, and communication.",
  bullets: [
    "2 classes per week for 10 weeks",
    "1 hour per class • Maximum 8 students",
    "$300 for the full course • $15 per class",
    "Pay in full or divide into 2 payments",
  ],
  ctaLabel: "See which sessions are open",
  ctaHref: "#sessions",
};

const privateClasses = {
  heading: "Private Spanish Classes",
  gloss: "Clases particulares de español",
  description:
    "Individual instruction tailored to your goals, interests, and proficiency level. Lessons can focus on conversation, specific language skills, academic or professional needs, or continued development toward higher levels of proficiency. Private instruction is available from Novice through Distinguished.",
  bullets: [
    "1 hour per session",
    "$30 per session",
    "Scheduling arranged directly with the instructor",
  ],
  ctaLabel: "Ask about private lessons",
  ctaHref: "#contact",
};

export default function Offerings() {
  return (
    <section id="classes" className="bg-paper">
      <div className="container py-s7">
        <div className="flex items-center gap-s2">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-bronze" />
          <p className="font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
            02 / How you can learn
          </p>
        </div>

        <div className="mt-s2 flex items-end justify-between gap-s5 nav:flex-col nav:items-start nav:gap-s3">
          <div>
            <h2 className="font-serif text-h2 font-medium text-ink">
              Two ways to learn
            </h2>
            <p className="gloss mt-s1 text-h3">Dos maneras de aprender</p>
          </div>

          <div
            aria-hidden="true"
            className="mb-2 h-px w-24 bg-bronze nav:hidden"
          />
        </div>

        <p className="prose-measure mt-s3 font-sans text-body text-ink-soft">
          {connector}
        </p>

        <div className="mt-s5 grid grid-cols-2 gap-s4 nav:grid-cols-1">
          <OfferingPanel {...group} />
          <OfferingPanel {...privateClasses} />
        </div>
      </div>
    </section>
  );
}
