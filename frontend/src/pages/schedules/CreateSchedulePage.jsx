import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../../components/ui/input-group";
import { ChevronDownIcon, MoreHorizontal } from "lucide-react";
import {
  Plus,
  Bell,
  Settings,
  CalendarPlus,
  Send,
  X,
  Check,
  Calendar1,
  Mail,
  MessageCircleMore,
} from "lucide-react";
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
import Icon from "@/components/shared/Icon";
const buttons = [
  {
    icon: <Mail />,
    name: "Email",
  },
  {
    icon: <Mail />,
    name: "WhatsApp",
  },
  {
    icon: <Mail />,
    name: "Telegram",
  },
  {
    icon: <MessageCircleMore />,
    name: "SMS",
  },
];
const CreateSchedulePage = () => {
  return (
    <div className="bg-[#051321] text-white px-5 h-screen ">
      {/* Dashboard navbar */}
      <div className="flex justify-between items-center h-[15%]">
        <div>
          <h2 className="text-xl font-semibold">Create New Schedule</h2>
          <h5 className="text-sm opacity-80">
            Overview of your scheduled messsages
          </h5>
        </div>
        <div className="flex gap-3 items-center">
          <Button className={"bg-[#5236e0]"}>
            <Plus></Plus>New Schedule
          </Button>
          <Icon component={<Bell />} />
          <Icon component={<Settings />} />
        </div>
      </div>
      {/* from div */}
      <div className="p-2 flex gap-3 w-full ">
        {/* schedule form */}
        {/* bg-[#0c1b2b] */}
        <div className="border flex-2 bg-red-500 p-2 rounded-md shadow-2xl">
          {/* button */}
          <div className="">
            <p>Platform</p>
            {buttons.map((btn) => (
              <Button className={"bg-[#0c1b2b] hover:bg-[#5236e0]/60"}>
                <span>{btn.icon}</span>
                <span>{btn.name}</span>
              </Button>
            ))}
          </div>
          <div className="">
            <p>Message</p>
            <textarea className="bg-green-400 w-full h-40 rounded" />
          </div>
          <div className="">
            <p>Contact / Group</p>
            <div className="flex gap-1.5">
              <InputGroup className="[--radius:1rem]">
                <InputGroupInput placeholder="Enter search query" />
                <InputGroupAddon align="inline-end">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <InputGroupButton
                        variant="ghost"
                        className="pr-1.5! text-xs"
                      >
                        Search In... <ChevronDownIcon className="size-3" />
                      </InputGroupButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="[--radius:0.95rem]"
                    >
                      <DropdownMenuGroup>
                        <DropdownMenuItem>Documentation</DropdownMenuItem>
                        <DropdownMenuItem>Blog Posts</DropdownMenuItem>
                        <DropdownMenuItem>Changelog</DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </InputGroupAddon>
              </InputGroup>
              <Button>More Contact</Button>
            </div>
          </div>
          <div className="">
            <p>Schedule Date & Time</p>
            <div className=""></div>
          </div>
          <div className=""></div>
          <div className=""></div>
        </div>
        {/* schedule message preview */}
        <div className="border-2 flex-1"></div>
      </div>
    </div>
  );
};

export default CreateSchedulePage;
