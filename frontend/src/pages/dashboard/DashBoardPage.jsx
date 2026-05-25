import React from "react";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Bell,
  Settings,
  CalendarPlus,
  Send,
  X,
  Check,
  Calendar1,
} from "lucide-react";
import Icon from "@/components/shared/Icon";
const DashBoardPage = () => {
  return (
    <div className="bg-[#051321] text-white px-5 h-screen ">
      {/* Dashboard navbar */}
      <div className="flex justify-between items-center h-[15%]">
        <div>
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <h5 className="text-sm opacity-80">
            Overview of your scheduled messsages
          </h5>
        </div>
        <div className="flex gap-3 items-center">
          <Button className={"bg-[#5236e0]"}>
            <Plus></Plus>New Schedule
          </Button>
          {/* <div className="w-10 h-10 rounded-sm border-white/30 border shadow-2xl p-2"><Bell></Bell></div>
          <div className="w-10 h-10 rounded-sm border-white/30 border shadow-2xl p-2"><Settings></Settings></div> */}
          <Icon component={<Bell />} />
          <Icon component={<Settings />} />
        </div>
      </div>
      {/* card div */}
      {/* <div className="flex gap-3 flex-wrap"> */}
      <div className="grid grid-cols-2 lg:grid-cols-4  gap-3">
        {/*card1   w-[257px] */}

        <div className="w-full  border border-white/30  rounded-xl bg-[#0c1b2b] shadow-2xl p-4 flex items-center">
          <div className="flex gap-3">
            <div className="p-1 ">
              <div className="bg-[#5236e0]/80 rounded-lg border-white/30 border shadow-2xl p-2 overflow-hidden">
                <Calendar1 size={35} className="text-white " />
              </div>
            </div>
            <div className="">
              <p className="opacity-70 font-heading">Total Scheduled</p>
              <p className="text-3xl font-semibold tracking-wider">128</p>
              <p className="text-xs  text-green-400 font-heading">
                +11 this week
              </p>
            </div>
          </div>
        </div>
        {/*card2  */}
        <div className="w-full  md: border border-white/30  rounded-xl bg-[#0c1b2b] shadow-2xl p-4 flex items-center">
          <div className="flex gap-3">
            <div className="p-1 ">
              <div className="bg-amber-600/20 rounded-lg border-white/30 border shadow-2xl p-2 overflow-hidden">
                <Send size={35} className="text-amber-600 " />
              </div>
            </div>
            <div className="">
              <p className="opacity-70 font-heading">Pending</p>
              <p className="text-3xl font-semibold tracking-wider">45</p>
              <p className="text-xs  text-green-400 font-heading">
                Next: Today,10:30 AM
              </p>
            </div>
          </div>
        </div>
        {/*card3  */}
        <div className="w-full  border border-white/30  rounded-xl bg-[#0c1b2b] shadow-2xl p-4 flex items-center">
          <div className="flex gap-3">
            <div className="p-1 ">
              <div className="bg-green-600/20 rounded-lg border-white/30 border shadow-2xl p-2 overflow-hidden">
                <Check
                  size={35}
                  className="text-white  rounded-full bg-green-500/60"
                />
              </div>
            </div>
            <div className="">
              <p className="opacity-70 font-heading">Send</p>
              <p className="text-3xl font-semibold tracking-wider">76</p>
              <p className="text-xs  text-green-400 font-heading">
                +13 this week
              </p>
            </div>
          </div>
        </div>
        {/*card4  */}
        <div className="w-full  border border-white/30  rounded-xl bg-[#0c1b2b] shadow-2xl p-4 flex items-center">
          <div className="flex gap-3">
            <div className="p-1 ">
              <div className="bg-red-600/20 rounded-lg border-white/30 border shadow-2xl p-2 overflow-hidden">
                <X
                  size={35}
                  className="text-white  rounded-full bg-red-500/70"
                />
              </div>
            </div>
            <div className="">
              <p className="opacity-70 font-heading">Failed</p>
              <p className="text-3xl font-semibold tracking-wider">7</p>
              <p className="text-xs  text-green-400 font-heading">View logs</p>
            </div>
          </div>
        </div>
      </div>
      {/* Table */}
      <div className="min-h-[65%]  shadow-2xl flex items-center">
        <div className="bg-[#0c1b2b] w-full h-[93%] border border-white/30 rounded-lg">
          <div className="flex justify-between h-[15%] px-5 items-center">
            <h2 className="font-semibold text-lg">Recent Schedules</h2>
            <button className="text-[#5236e0]">View all</button>
          </div>
          <Table className={"h-[55%] "}>
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader className="">
              <TableRow className=" hover:bg-transparent ">
                <TableHead className="pl-5 text-xs font-normal">
                  Messages
                </TableHead>
                <TableHead className="text-xs font-normal">Platform</TableHead>
                <TableHead className="text-xs font-normal">
                  Schedule Time
                </TableHead>
                <TableHead className="text-xs font-normal">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="">
              {invoices.map((invoice) => (
                <TableRow key={invoice.Message}>
                  <TableCell className=" pl-5">
                    <span className="font-semibold">{invoice.Message}</span>
                    <br />
                    <span className="opacity-70 text-xs">
                      Hi, Team just a reminder...
                    </span>
                  </TableCell>
                  <TableCell>{invoice.Platform}</TableCell>
                  <TableCell className={""}>{invoice.SchedulesTime}</TableCell>
                  <TableCell className=" ">
                    <span className=" bg-amber-500/30 text-white text-[11px] font-semibold px-1.5 py-2 rounded-lg">
                      {/* {invoice.Status} */}
                      Pending
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter className={""}>
              <TableRow>
                <TableCell colspan="4" className={"pl-5  "}></TableCell>
              </TableRow>
            </TableFooter>
          </Table>
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
} from "@/components/ui/table";

const invoices = [
  // {
  //   Message: "INV001",
  //   Platform: "Paid",
  //   SchedulesTime: "$250.00",
  //   Status: "Credit Card",
  // },
  // {
  //   Message: "INV001",
  //   Platform: "Paid",
  //   SchedulesTime: "$250.00",
  //   Status: "Credit Card",
  // },
  // {
  //   Message: "INV001",
  //   Platform: "Paid",
  //   SchedulesTime: "$250.00",
  //   Status: "Credit Card",
  // },
  // {
  //   Message: "INV001",
  //   Platform: "Paid",
  //   SchedulesTime: "$250.00",
  //   Status: "Credit Card",
  // },
  // {
  //   Message: "INV001",
  //   Platform: "Paid",
  //   SchedulesTime: "$250.00",
  //   Status: "Credit Card",
  // },
  // {
  //   Message: "INV001",
  //   Platform: "Paid",
  //   SchedulesTime: "$250.00",
  //   Status: "Credit Card",
  // },
  // {
  //   Message: "INV001",
  //   Platform: "Paid",
  //   SchedulesTime: "$250.00",
  //   Status: "Credit Card",
  // },
  // {
  //   Message: "INV001",
  //   Platform: "Paid",
  //   SchedulesTime: "$250.00",
  //   Status: "Credit Card",
  // },
  // {
  //   Message: "INV001",
  //   Platform: "Paid",
  //   SchedulesTime: "$250.00",
  //   Status: "Credit Card",
  // },
  // {
  //   Message: "INV001",
  //   Platform: "Paid",
  //   SchedulesTime: "$250.00",
  //   Status: "Credit Card",
  // },
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
];

function TableDemo() {
  return (
    <Table className={"bg-red-400 h-[85%] overflow-hidden"}>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader className="h-1">
        <TableRow className=" hover:bg-transparent ">
          <TableHead className="pl-5 text-xs font-normal">Messages</TableHead>
          <TableHead className="text-xs font-normal">Platform</TableHead>
          <TableHead className="text-xs font-normal">Schedule Time</TableHead>
          <TableHead className="text-xs font-normal">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="">
        {invoices.map((invoice) => (
          <TableRow key={invoice.Message}>
            <TableCell className=" pl-5">
              <span className="font-semibold">{invoice.Message}</span>
              <br />
              <span className="opacity-70 text-xs">
                Hi, Team just a reminder...
              </span>
            </TableCell>
            <TableCell>{invoice.Platform}</TableCell>
            <TableCell className={""}>{invoice.SchedulesTime}</TableCell>
            <TableCell className=" ">
              <span className=" bg-amber-500/30 text-white text-[11px] font-semibold px-1.5 py-2 rounded-lg">
                {/* {invoice.Status} */}
                Pending
              </span>
            </TableCell>
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
  );
}
