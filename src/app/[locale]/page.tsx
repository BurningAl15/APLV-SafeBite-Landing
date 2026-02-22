import Footer from "@/components/sections/Footer";
import InfoSection from "@/components/sections/InfoSection";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import ProblemSolution from "@/components/sections/ProblemSolution";
import Scenarios from "@/components/sections/Scenarios";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-background overflow-x-hidden">
      <main className="flex flex-1 flex-col items-center w-full px-4 sm:px-0">
        <Hero />
        <ProblemSolution />
        <Scenarios />
        <Features />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
}
