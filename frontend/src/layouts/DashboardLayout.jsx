import React from "react";
import { Outlet } from "react-router-dom";
import AppSidebar from "@/components/ui/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const DashboardLayout = () => {
  return (
    <>
      {/* <DashboardSidebar  />
    <Outlet /> */}
      <SidebarProvider>
        <AppSidebar />
        <div>
          <SidebarTrigger className={"hidden"} />
          <Outlet />
        </div>
      </SidebarProvider>
    </>
  );
};

export default DashboardLayout;
