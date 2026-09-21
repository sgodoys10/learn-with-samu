// app/page.tsx
import Hero from "@/components/Hero";
import TeacherIntro from "@/components/TeacherIntro";
import Offerings from "@/components/Offerings";
import Sessions from "@/components/Sessions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <TeacherIntro />
      <Offerings />
      <Sessions />
      <Contact />
      <Footer />
    </main>
  );
}
