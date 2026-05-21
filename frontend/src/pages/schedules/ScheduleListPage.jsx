import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from "../../components/shared/Icon";
import { Input } from '@/components/ui/input';
import { Plus,Bell,Settings,Search,Funnel,ChevronDown } from 'lucide-react';
import DateRangePicker from '@/components/shared/DatePicker';
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

const ScheduleListPage = () => {
  return (
    <div className='bg-[#051321] text-white space-y-4 p-5'>
       <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-semibold">Schedules</h2>
          <h5 className="">Manage all your scheduled messages</h5>
        </div>
        <div className="flex gap-3 items-center">
          <Button className={"bg-[#5236e0]"}><Plus></Plus>New Schedule</Button>
          <Icon component={<Bell />} />
          <Icon component={<Settings />} />
        </div>
      </div>
    <div className='flex justify-evenly '>
      <div className='flex gap-2 flex-1 h-10'>
        <div className='flex items-center border border-white/30 rounded-[8px] px-1 w-1/2'>
          <Search size={40} className='px-2 border-0'/>
          <Input type="search" placeholder="Search schedules..." className={"border-0"}/>
        </div>  
        <button className='flex items-center border border-white/30 rounded-[8px] py-2 px-2 justify-center gap-2 w-1/4'>
          <Funnel size={20} className='border-0'/>
          <span>Filter</span>
        </button>
      </div>
      <div className="flex-1 text-center">
        {/* <DropdownMenuRadioGroupDemo className={"bg-green-300 w-fit"}/> */}
        <DateRangePicker className="bg-[#051321] h-10"/>
      </div>
    </div>
    <div>{
      [{context:"All",no:128},{context:"Pending",no:45},{context:"All",no:128},{context:"All",no:128},{context:"All",no:128}].map((data)=>{
          return <Button className={"bg-[#0c1b2b] border border-white/30 rounded-[5px] mr-2 px-4 py-2"}>
            {data.context}({data.no})
          </Button>
      })
      }
    </div>
    <TableDemo/>
    </div>
  )
}


const invoices = [
  {
    Message: "INV001",
    Platform: "Email",
    Contact:"jai@gmail.com",
    SchedulesTime: "$250.00",
    Status: "Credit Card",
  },
  {
    Message: "INV001",
    Platform: "Whatsapp",
    Contact:"8604891213",
    SchedulesTime: "$250.00",
    Status: "Credit Card",
  },
  {
    Message: "INV001",
    Platform: "Email",
    Contact:"yogesh@gmail.com",
    SchedulesTime: "$250.00",
    Status: "Credit Card",
  },
  {
    Message: "INV001",
    Platform: "Telegram",
    Contact:"8604891213",
    SchedulesTime: "$250.00",
    Status: "Credit Card",
  },
  {
    Message: "INV001",
    Platform: "Telegram",
    Contact:"8604891213",
    SchedulesTime: "$250.00",
    Status: "Credit Card",
  },
  {
    Message: "INV001",
    Platform: "Email",
    Contact:"jai@gmail.com",
    SchedulesTime: "$250.00",
    Status: "Credit Card",
  },{
    Message: "INV001",
    Platform: "Telegram",
    Contact:"8604891213",
    SchedulesTime: "$250.00",
    Status: "Credit Card",
  },
  {
    Message: "INV001",
    Platform: "Telegram",
    Contact:"8604891213",
    SchedulesTime: "$250.00",
    Status: "Credit Card",
  },
  {
    Message: "INV001",
    Platform: "Email",
    Contact:"jai@gmail.com",
    SchedulesTime: "$250.00",
    Status: "Credit Card",
  },
  {
    Message: "INV001",
    Platform: "Email",
    Contact:"jai@gmail.com",
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
          <TableHead>Message</TableHead>
          <TableHead>Platform</TableHead>
          <TableHead>Contact/Group</TableHead>
          <TableHead>Schedule Time</TableHead>
          <TableHead >Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.Message}>
            <TableCell className="font-medium">{invoice.Message}</TableCell>
            <TableCell>{invoice.Platform}</TableCell>
            <TableCell>{invoice.Contact}</TableCell>
            <TableCell>{invoice.SchedulesTime}</TableCell>
            <TableCell >{invoice.Status}</TableCell>
            <TableCell className={"text-center font-semibold" }>. . .</TableCell>
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
export default ScheduleListPage;