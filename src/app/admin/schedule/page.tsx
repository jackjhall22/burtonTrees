import { SideNav } from "@/components/layout/side-nav";
import { BottomNav } from "@/components/layout/bottom-nav";
import { ScheduleHeader } from "@/components/admin/schedule-header";
import { CalendarView } from "@/components/admin/calendar-view";
import { SidePanel } from "@/components/admin/side-panel";

export default function AdminSchedulePage() {
  return (
    <>
      <SideNav variant="admin" />
      <main className="flex-1 lg:ml-64 flex flex-col h-screen overflow-hidden bg-surface relative">
        <ScheduleHeader />
        <div className="flex-1 overflow-hidden flex flex-col lg:flex-row">
          <CalendarView />
          <SidePanel />
        </div>
      </main>
      <BottomNav />
    </>
  );
}
