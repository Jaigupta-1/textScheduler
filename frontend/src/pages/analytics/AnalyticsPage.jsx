// Analytics.tsx

import React from "react";

import {
  TrendingUp,
  TrendingDown,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

const stats = [
  {
    title: "Total Sent",
    value: "76",
    change: "+18 this week",
    positive: true,
  },

  {
    title: "Delivery Rate",
    value: "98.6%",
    change: "+1.2% this week",
    positive: true,
  },

  {
    title: "Open Rate",
    value: "65.4%",
    change: "+3.6% this week",
    positive: true,
  },

  {
    title: "Failure Rate",
    value: "1.4%",
    change: "-0.8% this week",
    positive: false,
  },
];

const chartData = [
  { day: "May 13", sent: 20, delivered: 35, failed: 5 },
  { day: "May 14", sent: 40, delivered: 60, failed: 3 },
  { day: "May 15", sent: 40, delivered: 55, failed: 2 },
  { day: "May 16", sent: 55, delivered: 70, failed: 4 },
  { day: "May 17", sent: 58, delivered: 75, failed: 18 },
  { day: "May 18", sent: 75, delivered: 92, failed: 12 },
  { day: "May 19", sent: 62, delivered: 78, failed: 14 },
  { day: "May 20", sent: 70, delivered: 88, failed: 18 },
];

const platforms = [
  {
    name: "Email",
    value: 49,
    color: "bg-[#5236e0]",
  },

  {
    name: "WhatsApp",
    value: 40,
    color: "bg-green-500",
  },

  {
    name: "Telegram",
    value: 22,
    color: "bg-cyan-500",
  },

  {
    name: "SMS",
    value: 13,
    color: "bg-violet-400",
  },
];

const AnalyticsPage = () => {
  const maxValue = 100;

  return (
    <div className="w-full h-full overflow-hidden bg-[#0c1b2b] text-white p-5 flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">
            Analytics
          </h2>

          <p className="text-sm text-zinc-400">
            Track your message performance
          </p>
        </div>

        <div className="px-4 py-2 rounded-md border border-white/10 bg-[#091521] text-sm">
          May 13 - May 20, 2024
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map((item, index) => (
          <Card
            key={index}
            className="bg-[#091521] border-white/10 text-white"
          >
            <CardContent className="p-5 space-y-2">
              <p className="text-sm text-zinc-400">
                {item.title}
              </p>

              <h2 className="text-3xl font-semibold">
                {item.value}
              </h2>

              <div
                className={`flex items-center gap-1 text-xs ${
                  item.positive
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {item.positive ? (
                  <TrendingUp size={14} />
                ) : (
                  <TrendingDown size={14} />
                )}

                {item.change}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-[2fr_1fr] gap-4 flex-1 overflow-hidden">
        {/* Line Chart */}
        <Card className="bg-[#091521] border-white/10 text-white overflow-hidden">
          <CardContent className="p-5 h-full flex flex-col">
            <div className="mb-4">
              <h3 className="font-semibold">
                Messages Overview
              </h3>
            </div>

            {/* Graph */}
            <div className="flex-1 flex items-end gap-4 relative">
              {/* Lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 800 300"
                preserveAspectRatio="none"
              >
                {/* Delivered */}
                <polyline
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="3"
                  points={chartData
                    .map((d, i) => {
                      const x =
                        (i /
                          (chartData.length - 1)) *
                        780;

                      const y =
                        280 -
                        (d.delivered / maxValue) *
                          240;

                      return `${x},${y}`;
                    })
                    .join(" ")}
                />

                {/* Sent */}
                <polyline
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  points={chartData
                    .map((d, i) => {
                      const x =
                        (i /
                          (chartData.length - 1)) *
                        780;

                      const y =
                        280 -
                        (d.sent / maxValue) * 240;

                      return `${x},${y}`;
                    })
                    .join(" ")}
                />

                {/* Failed */}
                <polyline
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="3"
                  points={chartData
                    .map((d, i) => {
                      const x =
                        (i /
                          (chartData.length - 1)) *
                        780;

                      const y =
                        280 -
                        (d.failed / maxValue) *
                          240;

                      return `${x},${y}`;
                    })
                    .join(" ")}
                />
              </svg>

              {/* Bottom Labels */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-zinc-500 px-2">
                {chartData.map((item) => (
                  <span key={item.day}>
                    {item.day}
                  </span>
                ))}
              </div>
            </div>

            {/* Legends */}
            <div className="flex gap-5 mt-5 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <p className="text-zinc-400">
                  Sent
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-blue-500" />
                <p className="text-zinc-400">
                  Delivered
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <p className="text-zinc-400">
                  Failed
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Donut Chart */}
        <Card className="bg-[#091521] border-white/10 text-white">
          <CardContent className="p-5 flex flex-col h-full">
            <div className="mb-5">
              <h3 className="font-semibold">
                Platform Distribution
              </h3>
            </div>

            {/* Donut */}
            <div className="flex-1 flex items-center justify-center">
              <div className="relative h-52 w-52">
                <div className="absolute inset-0 rounded-full border-[22px] border-[#5236e0]" />

                <div className="absolute inset-[22px] rounded-full bg-[#091521] flex flex-col items-center justify-center">
                  <h2 className="text-3xl font-bold">
                    128
                  </h2>

                  <p className="text-zinc-400 text-sm">
                    Total
                  </p>
                </div>
              </div>
            </div>

            {/* Platform List */}
            <div className="space-y-3 mt-4">
              {platforms.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-3 w-3 rounded-full ${item.color}`}
                    />

                    <p className="text-sm text-zinc-300">
                      {item.name}
                    </p>
                  </div>

                  <p className="text-sm text-zinc-400">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsPage;