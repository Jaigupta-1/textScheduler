// Notifications.tsx

import React from "react";
import { Switch } from "../ui/switch";
import { FieldLabel } from "../ui/field";
import { Button } from "../ui/button";
import { TimezoneSelect } from "../shared/SelectTimeZone";

const Notifications = () => {
  return (
    <div className="w-full flex flex-col gap-5 h-full p-5">
      <div>
        <p className="font-semibold text-xl">Notifications</p>
        <p>Manage how and when you receive notifications.</p>
      </div>

      {/* Email Notifications */}
      <div className="border rounded-md border-white/10">
        <div className="p-4 border-b border-white/10 flex justify-between items-center">
          <div>
            <p className="font-medium">Schedule Reminders</p>
            <p className="text-sm text-muted-foreground">
              Receive reminders for upcoming schedules.
            </p>
          </div>
          <Switch defaultChecked />
        </div>

        <div className="p-4 border-b border-white/10 flex justify-between items-center">
          <div>
            <p className="font-medium">Schedule Updates</p>
            <p className="text-sm text-muted-foreground">
              Get notified when schedules are updated.
            </p>
          </div>
          <Switch defaultChecked />
        </div>

        <div className="p-4 border-b border-white/10 flex justify-between items-center">
          <div>
            <p className="font-medium">Schedule Failures</p>
            <p className="text-sm text-muted-foreground">
              Alerts when a message fails.
            </p>
          </div>
          <Switch defaultChecked />
        </div>

        <div className="p-4 flex justify-between items-center">
          <div>
            <p className="font-medium">Weekly Summary</p>
            <p className="text-sm text-muted-foreground">
              Receive a weekly report.
            </p>
          </div>
          <Switch />
        </div>
      </div>

      {/* Quiet Hours */}
      <div className="space-y-3">
        <div>
          <p className="font-semibold">Quiet Hours</p>
          <p className="text-sm text-muted-foreground">
            Avoid notifications during specific times.
          </p>
        </div>

        <div className="flex gap-3">
          <div className="flex-1 flex flex-col gap-1">
            <FieldLabel>Start Time</FieldLabel>
            <input
              type="time"
              className="bg-transparent border border-white/10 rounded-sm px-3 py-2"
            />
          </div>

          <div className="flex-1 flex flex-col gap-1">
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

        <Button className="bg-[#5236e0] w-fit rounded-sm px-3 py-4">
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default Notifications;