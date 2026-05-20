import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuAction,
  SidebarMenuSub,
  SidebarMenuBadge,
} from "./sidebar";

import {
  Settings,
  LayoutDashboardIcon,
  Calendar,
  Contact,
  Logs,
  Send,
  CalendarPlus,
  CalendarMinus,
  ChartNoAxesCombined,
  BookTemplate,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const items = [
  {
    title: "Dashboard",
    icon: LayoutDashboardIcon,
    route: "/",
    active: true,
  },
  {
    title: "Schedules",
    icon: CalendarMinus,
    route: "schedulesList",
  },
  {
    title: "Create Schedules",
    icon: CalendarPlus,
    route: "createSchedule",
  },
  {
    title: "Calendar",
    icon: Calendar,
    route: "calender",
  },
  {
    title: "Tempaltes",
    icon: BookTemplate,
    route: "templates",
  },
  {
    title: "Contacts",
    icon: Contact,
    route: "contact",
  },
  {
    title: "Analytics",
    icon: ChartNoAxesCombined,
    route: "",
  },
  {
    title: "Logs",
    icon: Logs,
    route: "logs",
  },
  {
    title: "Settings",
    icon: Settings,
    route: "",
  },
];

export default function AppSidebar() {
  return (
    <Sidebar className={"px-4 py-1 bg-sidebar  "}>
      <SidebarHeader className={"py-4  "}>
        <div className="gap-2 flex items-center   ">
          <span className="bg-[#5c3ffc] p-1.5 rounded-lg shadow-md border border-white ">
            <Send size={22} strokeWidth={2.5} className="text-white "/>
          </span>
          <span className="font-heading text-lg text-white">
            Text Scheduler
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent className="text-white ">
        <SidebarGroup>
          <SidebarMenu className={"flex gap-1 px-0"}>
            {items.map((item) => (
              <SidebarMenuItem
                key={item.title}
                className={
                  "py-1  rounded-sm hover:border-[#6b4ff7]  hover:bg-[#131740] hover:text-white border-l-3 border-transparent"
                }
              >
                <SidebarMenuButton asChild>
                  <NavLink
                    className={""}
                    to={`/${item.route.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <item.icon size={22} />  <span className="text-base font-medium">{item.title}</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className={"text-white"}>Jai Gupta</SidebarFooter>
    </Sidebar>
  );
}
