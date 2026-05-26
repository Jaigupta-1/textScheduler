// Notifications.tsx

import React from "react";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { FieldLabel } from "../ui/field";
import { TimezoneSelect } from "../shared/SelectTimeZone";

const Notifications = () => {
  return (
    <div className="w-full h-full overflow-y-auto p-5 flex flex-col gap-5">
      {/* Header */}
      <div>
        <p className="font-semibold text-xl">Notifications</p>
        <p className="text-sm text-muted-foreground">
          Manage your notifications and reminders.
        </p>
      </div>

      {/* Email Notifications */}
      <div className="border border-white/10 rounded-md">
        {[
          "Schedule Reminders",
          "Schedule Updates",
          "Schedule Failures",
          "Weekly Summary",
        ].map((item, index) => (
          <div
            key={index}
            className={`p-4 flex items-center justify-between ${index !== 3 && "border-b border-white/10"
              }`}
          >
            <div>
              <p className="font-medium">{item}</p>
              <p className="text-sm text-muted-foreground">
                Receive notifications for {item.toLowerCase()}.
              </p>
            </div>

            <Switch defaultChecked={index !== 3} />
          </div>
        ))}
      </div>

      {/* Quiet Hours */}
      <div className="border border-white/10 rounded-md p-4 space-y-4">
        <div>
          <p className="font-semibold text-lg">Quiet Hours</p>
          <p className="text-sm text-muted-foreground">
            Avoid notifications during specific hours.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1">
            <FieldLabel>Start Time</FieldLabel>
            <input
              type="time"
              className="bg-transparent border border-white/10 rounded-sm px-3 py-2"
            />
          </div>

          <div className="flex flex-col gap-1">
            <FieldLabel>End Time</FieldLabel>
            <input
              type="time"
              className="bg-transparent border border-white/10 rounded-sm px-3 py-2"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <FieldLabel>Timezone</FieldLabel>
          <TimezoneSelect />
        </div>

        <Button className="bg-[#5236e0] w-fit rounded-sm">
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default Notifications;