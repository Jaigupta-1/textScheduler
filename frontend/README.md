# UI Pages
Login Page
Dashboard
Schdeules(List) Page
Create Schedule Page
Calendar Page
Templates Page
Contacts Page
Logs Page
Analytics Page 
Settings Page

# Frontend Architecture

src/
│
├── app/
│   ├── router/
│   ├── providers/
│   └── store/
│
├── components/
│   ├── ui/
│   ├── shared/
│   ├── forms/
│   ├── tables/
│   └── charts/
│
├── layouts/
│   ├── DashboardLayout.tsx
│   └── AuthLayout.tsx
│
├── pages/
│   ├── auth/
│   │   └── LoginPage.tsx
│   │
│   ├── dashboard/
│   │   └── DashboardPage.tsx
│   │
│   ├── schedules/
│   │   ├── ScheduleListPage.tsx
│   │   ├── CreateSchedulePage.tsx
│   │   └── EditSchedulePage.tsx
│   │
│   ├── calendar/
│   │   └── CalendarPage.tsx
│   │
│   ├── templates/
│   │   └── TemplatesPage.tsx
│   │
│   ├── contacts/
│   │   └── ContactsPage.tsx
│   │
│   ├── logs/
│   │   └── LogsPage.tsx
│   │
│   ├── analytics/
│   │   └── AnalyticsPage.tsx
│   │
│   └── settings/
│       └── SettingsPage.tsx
│
├── services/
│   ├── api.ts
│   ├── auth.service.ts
│   ├── schedule.service.ts
│   ├── template.service.ts
│   └── analytics.service.ts
│
├── hooks/
│   ├── useAuth.ts
│   ├── useSchedules.ts
│   └── useDebounce.ts
│
├── store/
│   ├── authStore.ts
│   ├── scheduleStore.ts
│   └── uiStore.ts
│
├── types/
│   ├── auth.types.ts
│   ├── schedule.types.ts
│   └── api.types.ts
│
├── utils/
│   ├── formatDate.ts
│   ├── constants.ts
│   └── helpers.ts
│
├── assets/
│
├── styles/
│   └── globals.css
│
├── App.tsx
└── main.tsx

# Routing Structure

/login

/dashboard

/schedules
/schedules/create
/schedules/:id/edit

/calendar

/templates

/contacts

/logs

/analytics

/settings

# State Management Strategy

# Zustand Use Cases

# authStore
user
token
login/logout
# uiStore
sidebar open
theme
# scheduleStore
schedules
filters
loading

# Dashboard Layout

DashboardLayout
   |
   |--- Sidebar
   |--- Navbar
   |--- Main Content

# SideBar Menu

Dashboard
Schedules
Create Schedule
Calendar
Templates
Contacts
Logs
Analytics
Settings

# 🔥 Page-Level Structure Example
# Create Schedule Page
CreateSchedulePage
   |
   |--- ScheduleForm
   |--- MessagePreview
   |--- PlatformSelector


# 🔥 Best Development Order
# Phase 1

Setup project.

# Phase 2

Create layouts.

# Phase 3

Build pages.

# Phase 4

Connect APIs.

# Phase 5

Add realtime/logs.