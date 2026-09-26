import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/Hero";

// Dynamic imports for below-the-fold components to maximize performance & Core Web Vitals
const ProjectGallery = dynamic(
  () => import("@/components/ProjectGallery").then((mod) => mod.ProjectGallery),
  {
    loading: () => (
      <div className="h-screen w-full bg-[#111112] flex items-center justify-center border-t border-[#2A2A2E]">
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#8E8D8A]">
          Loading Project Gallery...
        </span>
      </div>
    ),
  }
);

const Philosophy = dynamic(
  () => import("@/components/Philosophy").then((mod) => mod.Philosophy),
  {
    loading: () => <div className="h-48 w-full bg-[#111112]" />,
  }
);

const About = dynamic(
  () => import("@/components/About").then((mod) => mod.About),
  {
    loading: () => <div className="h-48 w-full bg-[#111112]" />,
  }
);

const ExperienceRegister = dynamic(
  () =>
    import("@/components/ExperienceRegister").then(
      (mod) => mod.ExperienceRegister
    ),
  {
    loading: () => <div className="h-48 w-full bg-[#111112]" />,
  }
);

const ContactCTA = dynamic(
  () => import("@/components/ContactCTA").then((mod) => mod.ContactCTA),
  {
    loading: () => <div className="h-48 w-full bg-[#111112]" />,
  }
);

const Footer = dynamic(
  () => import("@/components/layout/Footer").then((mod) => mod.Footer),
  {
    loading: () => <div className="h-24 w-full bg-[#0e0e0f]" />,
  }
);

export default function Home() {
  return (
    <main className="relative flex flex-col w-full bg-[#111112] text-[#F5F4F0] min-h-screen">
      <Navbar />
      <Hero />
      <ProjectGallery />
      <Philosophy />
      <About />
      <ExperienceRegister />
      <ContactCTA />
      <Footer />
    </main>
  );
}
