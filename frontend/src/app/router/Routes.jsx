import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import DashBoardPage from "../../pages/dashboard/DashBoardPage";
import ScheduleListPage from "../../pages/schedules/ScheduleListPage";
import CreateSchedulePage from "../../pages/schedules/CreateSchedulePage";
import CalendarPage from "../../pages/calendar/CalendarPage";
import TemplatesPage from "../../pages/templates/TemplatesPage";
import ContactsPage from "../../pages/contacts/ContactsPage";
import LogsPage from "../../pages/logs/LogsPage";
import SettingsPage from "@/pages/settings/SettingsPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashBoardPage />,
      },
      {
        path: "schedulesList",
        element: <ScheduleListPage />,
      },
      {
        path: "createSchedule",
        element: <CreateSchedulePage />,
      },
      {
        path: "calender",
        element: <CalendarPage />,
      },
      {
        path: "templates",
        element: <TemplatesPage />,
      },
      {
        path: "contact",
        element: <ContactsPage />,
      },
      {
        path: "logs",
        element: <LogsPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
]);
export default router;
