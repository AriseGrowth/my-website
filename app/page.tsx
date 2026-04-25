import { ShellFrame } from "@/components/site/ShellFrame";
import { NavBar } from "@/components/site/NavBar";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Problem } from "@/components/sections/Problem";
import { SelfDiagnosis } from "@/components/sections/SelfDiagnosis";
import { CostOfChaos } from "@/components/sections/CostOfChaos";
import { HowIWork } from "@/components/sections/HowIWork";
import { WhyDifferent } from "@/components/sections/WhyDifferent";
import { Diagnosis } from "@/components/sections/Diagnosis";
import { Outcomes } from "@/components/sections/Outcomes";
import { Proof } from "@/components/sections/Proof";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <main className="relative">
      <ShellFrame>
        <NavBar />
        <Hero />
        <TrustStrip />
        <Problem />
        <SelfDiagnosis />
        <CostOfChaos />
        <HowIWork />
        <WhyDifferent />
        <Diagnosis />
        <Outcomes />
        <Proof />
        <FinalCTA />
        <Footer />
      </ShellFrame>
    </main>
  );
}
