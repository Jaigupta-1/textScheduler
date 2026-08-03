import React from "react";
import { Button } from "@/components/ui/button";
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

import { Plus, Bell, Settings, Edit, Mail, Import, Filter } from "lucide-react";
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
const ContactsPage = () => {
  return (
    <div className=" text-white px-5 min-h-screen bg-[#051321]">
      {/* Dashboard navbar */}
      <div className="flex justify-between items-center h-[15vh]">
        <div>
          <h2 className="text-xl font-semibold">Contacts</h2>
          <h5 className="text-sm opacity-80">
            Manage your contacts and groups
          </h5>
        </div>
        <div className="flex gap-5 items-center">
          <Button className={"bg-[#5236e0] rounded-md py-4.5 text-xs"}>
            <Plus></Plus>New Contact
          </Button>
          <Button className={"border border-gray-700 py-4.5 text-xs"}>
            <Import />
            Import
          </Button>

          <Button className={"border border-gray-700 py-4.5 text-xs"}>
            <Bell />
          </Button>
          <Button className={"border border-gray-700 py-4.5 text-xs"}>
            <Settings />
          </Button>
        </div>
      </div>
      {/* center div */}
      <div className="flex justify-between">
        <div className="">
          <Button
            className={
              "bg-transparent border border-gray-800 rounded-sm py-4.5"
            }
          >
            All(53)
          </Button>
          <Button
            className={
              "bg-transparent border border-gray-800 rounded-sm py-4.5"
            }
          >
            Contacts(43)
          </Button>
          <Button
            className={
              "bg-transparent border border-gray-800 rounded-sm py-4.5 hover:border-b hover:border-blue-600"
            }
          >
            Online(10)
          </Button>
        </div>
        <div className="">
          <Button
            className={
              "bg-transparent border border-gray-800 rounded-sm py-4.5"
            }
          >
            <Filter />
            Filter
          </Button>
        </div>
      </div>
      {/* from div */}
      <div className="min-h-[65vh]  shadow-2xl flex items-center">
        <div className="bg-[#0c1b2b] w-full  border border-white/30 rounded-lg">
          <div className="flex justify-between  px-5 items-center">
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

export default ContactsPage;
