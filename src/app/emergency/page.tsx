import { TopNav } from "@/components/layout/top-nav";
import { BottomNav } from "@/components/layout/bottom-nav";
import { Footer } from "@/components/layout/footer";
import { EmergencyBanner } from "@/components/emergency/emergency-banner";
import { EmergencyHero } from "@/components/emergency/emergency-hero";
import { SafetyGrid } from "@/components/emergency/safety-grid";
import { ProcessSteps } from "@/components/emergency/process-steps";
import { InsuranceCta } from "@/components/emergency/insurance-cta";

export default function EmergencyPage() {
  return (
    <>
      <EmergencyBanner />
      <TopNav />
      <main className="pt-[116px] w-full max-w-[1280px] mx-auto pb-[--spacing-section]">
        <EmergencyHero />
        <SafetyGrid />
        <ProcessSteps />
        <InsuranceCta />
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
