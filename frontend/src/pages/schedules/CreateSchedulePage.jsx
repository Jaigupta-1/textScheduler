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
import { DatePicker } from "@/components/ui/DatePicker";
import { ComboboxPicker } from "@/components/ui/ComboxPicker";
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
            Fill in the details to schedule a new message
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
      <div className=" flex gap-7 w-full ">
        {/* schedule form */}
        {/* bg-[#0c1b2b] */}
        <div className="border flex-2  py-3  px-6 rounded-md shadow-2xl flex flex-col space-y-3">
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
            <textarea className="border w-full h-40 rounded" />
          </div>
          <div className="">
            <p>Contact / Group</p>
            <div className="flex gap-1.5">
              <InputGroup className="rounded-sm">
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
            <div className="">
              <DatePicker />
            </div>
          </div>
          <div className="">
            <p>Repeat</p>
            <div className="">
              <ComboboxPicker />
            </div>
          </div>
          <div className="text-end space-x-3">
            <Button className={"bg-transparent border border-gray-500/50"}>
              Save as Draft
            </Button>
            <Button className={"bg-blue-800"}>Schedule Message</Button>
          </div>
        </div>
        {/* schedule message preview */}
        <div className="border-2 flex-1"></div>
      </div>
    </div>
  );
};

export default CreateSchedulePage;
