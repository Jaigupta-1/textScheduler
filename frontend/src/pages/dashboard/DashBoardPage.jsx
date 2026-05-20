import React from "react";
import { Button } from "@/components/ui/button";
import { Plus, Bell, Settings, CalendarPlus, Send, X, Check } from "lucide-react";
const Icon = ({ component, bgColor }) => {
  console.log(bgColor);
  return (
    <div className={`w-auto rounded-sm border-white/30 border shadow-2xl p-2 bg-[${bgColor}]`}>{component}</div>
  );
}
const DashBoardPage = () => {
  return (
    <div className="bg-[#051321] text-white space-y-7 p-5">
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <h5 className="">Overview of your scheduled messsages</h5>
        </div>
        <div className="flex gap-3 items-center">
          <Button className={"bg-[#5236e0]"}><Plus></Plus>New Schedule</Button>
          {/* <div className="w-10 h-10 rounded-sm border-white/30 border shadow-2xl p-2"><Bell></Bell></div>
          <div className="w-10 h-10 rounded-sm border-white/30 border shadow-2xl p-2"><Settings></Settings></div> */}
          <Icon component={<Bell />} />
          <Icon component={<Settings />} />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="w-1/4 flex gap-4 items-center border border-white/30 p-5 rounded-xl bg-[#0c1b2b] shadow-2xl">
          <div>
            <Icon component={<CalendarPlus size={25} />} bgColor={"#5236e0"} />
          </div>
          <div className="flex-col gap-2 text-nowrap">
            <h5>Total Scheduled</h5>
            <p className="text-lg">128</p>
            <p>+11 this week</p>
          </div>
        </div>
        <div className="w-1/4 flex gap-4 items-center border border-white/30 p-5 rounded-xl bg-[#0c1b2b] shadow-2xl">
          <div>
            <Icon component={<Send size={25} />} bgColor={"#f99b06"} />
          </div>
          <div className="flex-col gap-2">
            <h5>Pending</h5>
            <p className="text-lg">45</p>
            <p className="text-nowrap text-sm">Next: Today,10:30 AM</p>
          </div>
        </div>
        <div className="w-1/4 flex gap-4 items-center border border-white/30 p-5 rounded-xl bg-[#0c1b2b] shadow-2xl">
          <div>
            <Icon component={<Check size={25} />} bgColor={"#43ba5c"} />
          </div>
          <div className="flex-col gap-2">
            <h5>Sent</h5>
            <p className="text-lg">76</p>
            <p>+13 this week</p>
          </div>
        </div>
        <div className="w-1/4 flex gap-4 items-center border border-white/30 p-2 rounded-xl bg-[#0c1b2b] shadow-2xl">
          <div>
            <Icon component={<X size={25} />} bgColor={"#f03c3c"} />
          </div>
          <div className="flex-col gap-2">
            <h5>Failed</h5>
            <p className="text-lg">7</p>
            <p>View logs</p>
          </div>
        </div>
      </div>
      <div className="border border-white/30 rounded-lg">
        <div className="flex justify-between px-5 py-3.5">
          <h2 className="font-semibold text-lg">Recent Schedules</h2>
          <button className="text-[#5236e0]">View all</button>
        </div>
        <div>
          <TableDemo/>
        </div>
      </div>
    </div>
  );
};

export default DashBoardPage;


import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    Message: "INV001",
    Platform: "Paid",
    SchedulesTime: "$250.00",
    Status: "Credit Card",
  },
  {
    Message: "INV001",
    Platform: "Paid",
    SchedulesTime: "$250.00",
    Status: "Credit Card",
  },
  {
    Message: "INV001",
    Platform: "Paid",
    SchedulesTime: "$250.00",
    Status: "Credit Card",
  },
  {
    Message: "INV001",
    Platform: "Paid",
    SchedulesTime: "$250.00",
    Status: "Credit Card",
  },
  {
    Message: "INV001",
    Platform: "Paid",
    SchedulesTime: "$250.00",
    Status: "Credit Card",
  },
  {
    Message: "INV001",
    Platform: "Paid",
    SchedulesTime: "$250.00",
    Status: "Credit Card",
  }
]

function TableDemo() {
  return (
    <Table className={""}>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow className="text-white">
          <TableHead className="w-[100px]">Message</TableHead>
          <TableHead>Platform</TableHead>
          <TableHead>Schedule Time</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.Message}>
            <TableCell className="font-medium">{invoice.Message}</TableCell>
            <TableCell>{invoice.Platform}</TableCell>
            <TableCell>{invoice.SchedulesTime}</TableCell>
            <TableCell className="text-right">{invoice.Status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  )
}

