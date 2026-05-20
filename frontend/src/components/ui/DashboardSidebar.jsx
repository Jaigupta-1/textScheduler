import React from 'react';
import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import AppSidebar from './AppSidebar';
const DashboardSidebar = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar />

        <main className="flex-1 p-4">
          <SidebarTrigger />
        </main>
      </div>
    </SidebarProvider>
  )
}

export default DashboardSidebar;

