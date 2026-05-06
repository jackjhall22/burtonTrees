import { SideNav } from "@/components/layout/side-nav";
import { BottomNav } from "@/components/layout/bottom-nav";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { JobStatusCard } from "@/components/dashboard/job-status-card";
import { ActionCard } from "@/components/dashboard/action-card";
import { InvoiceList } from "@/components/dashboard/invoice-list";
import { GalleryGrid } from "@/components/dashboard/gallery-grid";

export default function DashboardPage() {
  return (
    <>
      <SideNav variant="customer" />
      <main className="flex-1 lg:ml-64 p-[--spacing-margin-mobile] lg:p-[--spacing-margin-desktop] pb-32 lg:pb-[--spacing-margin-desktop] bg-surface-container-lowest min-h-screen">
        <DashboardHeader />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[--spacing-gutter]">
          <div className="lg:col-span-8">
            <JobStatusCard />
          </div>
          <div className="lg:col-span-4 flex flex-col gap-[--spacing-gutter]">
            <ActionCard />
            <InvoiceList />
          </div>
          <div className="lg:col-span-12">
            <GalleryGrid />
          </div>
        </div>
      </main>
      <BottomNav />
    </>
  );
}
