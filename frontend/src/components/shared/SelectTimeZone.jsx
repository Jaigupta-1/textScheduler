import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function TimezoneSelect() {
  return (
    <Select defaultValue="Asia/Kolkata">
      <SelectTrigger className="w-full bg-transparent border-white/30 text-white">
        <SelectValue placeholder="Select timezone" />
      </SelectTrigger>

      <SelectContent className="bg-[#0b1120] border-white/30 text-white">
        <SelectItem value="Asia/Kolkata">
          (GMT+5:30) Asia/Kolkata
        </SelectItem>

        <SelectItem value="UTC">
          (GMT+0:00) UTC
        </SelectItem>

        <SelectItem value="America/New_York">
          (GMT-5:00) America/New_York
        </SelectItem>

        <SelectItem value="Europe/London">
          (GMT+1:00) Europe/London
        </SelectItem>
      </SelectContent>
    </Select>
  )
}