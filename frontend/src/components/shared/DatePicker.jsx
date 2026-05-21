"use client"

import React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function DateRangePicker() {
  const [date, setDate] = React.useState()

  return (
    <div className="w-full max-w-sm">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-between rounded-[10px] border-white/30 bg-[#051321] px-4 py-5 text-left font-normal shadow-sm hover:bg-zinc-50",
              !date && "text-zinc-500"
            )}
          >
            <div className="flex flex-col items-start">
              {/* <span className="text-xs text-zinc-500">
                Select dates
              </span> */}

              {date?.from ? (
                date.to ? (
                  <span className="text-sm font-medium text-white">
                    {format(date.from, "dd MMM")} -{" "}
                    {format(date.to, "dd MMM yyyy")}
                  </span>
                ) : (
                  <span className="text-sm font-medium">
                    {format(date.from, "dd MMM yyyy")}
                  </span>
                )
              ) : (
                <span className="text-sm">
                  Pick a date range
                </span>
              )}
            </div>

            <CalendarIcon className="h-5 w-5 text-zinc-500" />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          className="w-auto rounded-2xl border border-zinc-200 p-3 shadow-xl"
          align="start"
        >
          <Calendar
            mode="range"
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            className="rounded-xl"
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}