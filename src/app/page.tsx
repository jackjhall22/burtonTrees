import { TopNav } from "@/components/layout/top-nav";
import { BottomNav } from "@/components/layout/bottom-nav";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/marketing/hero-section";
import { TrustBanner } from "@/components/marketing/trust-banner";
import { ServicesGrid } from "@/components/marketing/services-grid";

export default function HomePage() {
  return (
    <>
      <TopNav />
      <main className="flex-grow pt-20">
        <HeroSection />
        <TrustBanner />
        <ServicesGrid />
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
