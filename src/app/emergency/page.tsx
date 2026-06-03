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
      <TopNav topOffset="top-9" />
      <main className="pt-36 w-full max-w-[var(--spacing-container)] mx-auto pb-[var(--spacing-section)]">
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
