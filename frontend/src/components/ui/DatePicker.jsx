"use client";

import * as React from "react";
import { format } from "date-fns";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
const timezones = [
  {
    label: "(GMT +05:30) Asia/Kolkata",
    value: "Asia/Kolkata",
  },
  {
    label: "(GMT +04:00) Asia/Dubai",
    value: "Asia/Dubai",
  },
  {
    label: "(GMT +09:00) Asia/Tokyo",
    value: "Asia/Tokyo",
  },
  {
    label: "(GMT +00:00) Europe/London",
    value: "Europe/London",
  },
  {
    label: "(GMT -05:00) America/New_York",
    value: "America/New_York",
  },
];

export function DatePicker() {
  const [open, setOpen] = React.useState(false);
  // const [date, setDate] = (React.useState < Date) | (undefined > undefined);
  const [date, setDate] = React.useState(new Date());
  // const [month, setMonth] = React.useState(date);
  const [timezone, setTimezone] = React.useState("(GMT +05:30) Asia/Kolkata");
  return (
    <FieldGroup className="flex flex-row">
      <Field className="w-52">
        {/* <FieldLabel htmlFor="date-picker-optional">Date</FieldLabel> */}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="standard"
              id="date-picker-optional"
              className="w-full justify-between font-normal border border-white"
            >
              {date ? format(date, "PPP") : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              defaultMonth={date}
              onSelect={(date) => {
                setDate(date);
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </Field>
      <Field className="w-32">
        {/* <FieldLabel htmlFor="time-picker-optional">Time</FieldLabel> */}
        <Input
          type="time"
          id="time-picker-optional"
          step="1"
          defaultValue="10:30:00"
          className="appearance-none  [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        />
      </Field>
      <Field>
        <Combobox
          items={timezones}
          value={timezone}
          onValueChange={setTimezone}
        >
          <ComboboxInput placeholder="Select Timezone" />

          <ComboboxContent>
            <ComboboxEmpty>No timezone found.</ComboboxEmpty>

            <ComboboxList>
              {(item) => (
                <ComboboxItem key={item.value} value={item.label}>
                  {item.label}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Field>
    </FieldGroup>
  );
}
