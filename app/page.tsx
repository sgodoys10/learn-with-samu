// app/page.tsx
import Hero from "@/components/Hero";
import TeacherIntro from "@/components/TeacherIntro";
import Offerings from "@/components/Offerings";
import Sessions from "@/components/Sessions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LearnPreview from "@/components/LearnPreview";

export default function Home() {
  return (
    <main>
      <Hero />
      <TeacherIntro />
      <Offerings />
      <Sessions />
      <LearnPreview />
      <Contact />
      <Footer />
    </main>
  );
}
