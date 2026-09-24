import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-paper">
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
            Get in touch
          </p>
        </div>

        <div className="group mt-s2 w-fit">
          <h2 className="font-serif text-h2 font-medium text-ink">
            Get in touch
          </h2>

          <p className="gloss mt-s1 text-h3 transition-all duration-300 ease-out group-hover:-translate-y-0.5">
            Ponte en contacto
          </p>
        </div>

        <p className="prose-measure mt-s3 font-sans text-body text-ink-soft">
          Have questions about group classes or want to ask about private
          lessons? Send a message below.
        </p>

        <div className="mt-s5 max-w-[480px]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
