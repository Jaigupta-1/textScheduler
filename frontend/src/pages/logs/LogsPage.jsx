// Logs.tsx

import React from "react";

import {
  Search,
  CalendarDays,
  Mail,
  Send,
  MessageCircle,
  XCircle,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const logs = [
  {
    title: "Team Meeting Reminder",
    platform: "Email",
    status: "Success",
    details: "Email sent to 12 recipients",
    time: "May 20, 2024",
    icon: <Mail size={18} />,
  },
  {
    title: "Happy Birthday! 🎉",
    platform: "WhatsApp",
    status: "Success",
    details: "Message delivered",
    time: "May 20, 2024",
    icon: <MessageCircle size={18} />,
  },
  {
    title: "Daily Report",
    platform: "Telegram",
    status: "Success",
    details: "Message sent to 8 members",
    time: "May 20, 2024",
    icon: <Send size={18} />,
  },
  {
    title: "Weekly Newsletter",
    platform: "Email",
    status: "Pending",
    details: "Scheduled to send",
    time: "May 29, 2024",
    icon: <Mail size={18} />,
  },
  {
    title: "Payment Reminder",
    platform: "WhatsApp",
    status: "Failed",
    details: "Delivery failed",
    time: "May 31, 2024",
    icon: <XCircle size={18} />,
  },
];

const LogsPage = () => {
  return (
    <div className="w-full h-full bg-[#0c1b2b] text-white overflow-hidden flex flex-col p-5 gap-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Logs</h2>

          <p className="text-sm text-zinc-400">
            View execution logs of your scheduled messages
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative w-[260px]">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <Input
              placeholder="Search logs..."
              className="pl-9 bg-[#091521] border-white/10 h-10 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>

          {/* Calendar */}
          <Button
            variant="outline"
            size="icon"
            className="bg-[#091521] border-white/10 hover:bg-white/10"
          >
            <CalendarDays size={18} />
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-3">
        {["All Logs", "Success", "Failed", "Pending"].map(
          (item, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={`rounded-md ${
                index === 0
                  ? "bg-[#5236e0] hover:bg-[#5236e0]"
                  : "bg-[#091521] border-white/10 hover:bg-white/10"
              }`}
            >
              {item}
            </Button>
          )
        )}
      </div>

      {/* Table */}
      <div className="flex-1 border border-white/10 rounded-xl overflow-hidden bg-[#091521]">
        {/* Table Header */}
        <div className="grid grid-cols-5 px-5 py-4 border-b border-white/10 bg-white/[0.03] text-sm font-medium">
          <p>Message</p>
          <p>Platform</p>
          <p>Status</p>
          <p>Details</p>
          <p>Time</p>
        </div>

        {/* Table Body */}
        <div className="overflow-y-auto h-[calc(100%-64px)]">
          {logs.map((log, index) => (
            <div
              key={index}
              className="grid grid-cols-5 px-5 py-4 border-b border-white/10 items-center hover:bg-white/[0.03] transition-all"
            >
              {/* Message */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#5236e0]/20 flex items-center justify-center text-[#8b7cff]">
                  {log.icon}
                </div>

                <div>
                  <p className="text-sm font-medium">
                    {log.title}
                  </p>

                  <p className="text-xs text-zinc-500">
                    ID: MSG-10291
                  </p>
                </div>
              </div>

              {/* Platform */}
              <p className="text-sm text-zinc-300">
                {log.platform}
              </p>

              {/* Status */}
              <div>
                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    log.status === "Success"
                      ? "bg-green-500/20 text-green-400"
                      : log.status === "Pending"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {log.status}
                </span>
              </div>

              {/* Details */}
              <p className="text-sm text-zinc-400 truncate">
                {log.details}
              </p>

              {/* Time */}
              <p className="text-sm text-zinc-400">
                {log.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogsPage;