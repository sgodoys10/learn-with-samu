// components/Contact.tsx
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-paper">
      <div className="container py-s7">
        <p className="mb-s2 font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
          Get in touch
        </p>
        <h2 className="font-serif text-h2 font-medium text-ink">
          Get in touch
        </h2>
        <p className="gloss mt-s1 text-h3">Ponte en contacto</p>

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
