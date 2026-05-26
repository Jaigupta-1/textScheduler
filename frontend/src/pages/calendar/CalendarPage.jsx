import React from "react";

import {
  ChevronLeft,
  ChevronRight,
  Bell,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const dates = [
  [28, 29, 30, 1, 2, 3, 4],
  [5, 6, 7, 8, 9, 10, 11],
  [12, 13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24, 25],
  [26, 27, 28, 29, 30, 31, 1],
];

const events = {
  6: {
    time: "09:00 AM",
    title: "Morning Reminder",
    color: "green",
  },

  10: {
    time: "03:30 PM",
    title: "Team Meeting",
    color: "purple",
  },

  15: {
    time: "01:00 PM",
    title: "Project Update",
    color: "yellow",
  },

  20: {
    time: "10:00 AM",
    title: "Weekly Newsletter",
    color: "purple",
  },

  21: {
    time: "11:45 AM",
    title: "Client Follow-up",
    color: "green",
  },
};

const getEventStyle = (color) => {
  switch (color) {
    case "green":
      return "bg-green-500/20 border border-green-500/20 text-green-300";

    case "yellow":
      return "bg-yellow-500/20 border border-yellow-500/20 text-yellow-300";

    default:
      return "bg-[#5236e0]/30 border border-[#5236e0]/30 text-[#c4b5fd]";
  }
};

const CalendarPage = () => {
  return (
    <div className="w-full h-full bg-[#0c1b2b] text-white overflow-hidden flex flex-col p-5 gap-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Calendar</h2>

          <p className="text-sm text-zinc-400">
            View your scheduled messages in calendar
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            className="bg-[#091521] border-white/10 hover:bg-white/10"
          >
            <Bell size={18} />
          </Button>
        </div>
      </div>

      {/* Top Actions */}
      <div className="flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-3">
          <Button className="bg-[#5236e0] hover:bg-[#5236e0]">
            Today
          </Button>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="bg-[#091521] border-white/10 hover:bg-white/10"
            >
              <ChevronLeft size={18} />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="bg-[#091521] border-white/10 hover:bg-white/10"
            >
              <ChevronRight size={18} />
            </Button>
          </div>
        </div>

        {/* Month */}
        <h2 className="text-3xl font-semibold">May 2024</h2>

        {/* View Buttons */}
        <div className="flex items-center gap-2">
          {["Month", "Week", "Day"].map((item, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={`${
                index === 0
                  ? "bg-[#5236e0] hover:bg-[#5236e0]"
                  : "bg-[#091521] border-white/10 hover:bg-white/10"
              }`}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>

      {/* Calendar */}
      <div className="flex-1 border border-white/10 rounded-xl overflow-hidden bg-[#091521]">
        {/* Days */}
        <div className="grid grid-cols-7 border-b border-white/10">
          {days.map((day) => (
            <div
              key={day}
              className="h-14 flex items-center justify-center border-r border-white/10 text-sm font-medium"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Dates */}
        <div className="grid grid-rows-5 h-[calc(100%-56px)]">
          {dates.map((week, weekIndex) => (
            <div
              key={weekIndex}
              className="grid grid-cols-7 border-b border-white/10"
            >
              {week.map((date, index) => (
                <div
                  key={index}
                  className="border-r border-white/10 p-2 relative"
                >
                  {/* Date */}
                  <p className="text-sm text-zinc-300 mb-2">
                    {date}
                  </p>

                  {/* Event */}
                  {events[date] && (
                    <div
                      className={`rounded-md p-2 text-xs space-y-1 ${getEventStyle(
                        events[date].color
                      )}`}
                    >
                      <p>{events[date].time}</p>

                      <p className="font-medium truncate">
                        {events[date].title}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#5236e0]" />
          <p className="text-zinc-400">Pending</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-500" />
          <p className="text-zinc-400">Sent</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <p className="text-zinc-400">Failed</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;