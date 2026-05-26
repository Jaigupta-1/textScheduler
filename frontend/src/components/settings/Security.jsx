// Security.tsx

import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import { FieldLabel } from "../ui/field";

const Security = () => {
  return (
    <div className="w-full h-full overflow-y-auto p-5 flex flex-col gap-5">
      {/* Header */}
      <div>
        <p className="font-semibold text-xl">Security</p>
        <p className="text-sm text-muted-foreground">
          Manage your account security and access.
        </p>
      </div>

      {/* Change Password */}
      <div className="border border-white/10 rounded-md p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-lg">Change Password</p>
            <p className="text-sm text-muted-foreground">
              Update your password regularly.
            </p>
          </div>

          <Button className="bg-[#5236e0] rounded-sm">
            Change Password
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col gap-1">
            <FieldLabel>Current Password</FieldLabel>
            <Input type="password" className="rounded-sm" />
          </div>

          <div className="flex flex-col gap-1">
            <FieldLabel>New Password</FieldLabel>
            <Input type="password" className="rounded-sm" />
          </div>

          <div className="flex flex-col gap-1">
            <FieldLabel>Confirm Password</FieldLabel>
            <Input type="password" className="rounded-sm" />
          </div>
        </div>
      </div>

      {/* 2FA */}
      <div className="border border-white/10 rounded-md p-4 flex justify-between items-center">
        <div>
          <p className="font-semibold">Two-Factor Authentication</p>
          <p className="text-sm text-muted-foreground">
            Add extra security to your account.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-green-400 text-sm">Enabled</span>
          <Switch defaultChecked />
        </div>
      </div>

      {/* Active Sessions */}
      <div className="border border-white/10 rounded-md p-4 flex justify-between items-center">
        <div>
          <p className="font-semibold">Active Sessions</p>
          <p className="text-sm text-muted-foreground">
            Windows • Chrome • Delhi, India
          </p>
        </div>

        <Button
          variant="outline"
          className="rounded-sm border-white/10"
        >
          Logout All
        </Button>
      </div>

      {/* Login History */}
      <div className="border border-white/10 rounded-md p-4 flex justify-between items-center">
        <div>
          <p className="font-semibold">Login History</p>
          <p className="text-sm text-muted-foreground">
            Review recent login activity.
          </p>
        </div>

        <Button
          variant="outline"
          className="rounded-sm border-white/10"
        >
          View History
        </Button>
      </div>

      {/* Delete Account */}
      <div className="border border-red-500/20 rounded-md p-4 flex justify-between items-center">
        <div>
          <p className="font-semibold text-red-400">
            Delete Account
          </p>

          <p className="text-sm text-muted-foreground">
            Permanently delete your account and data.
          </p>
        </div>

        <Button variant="destructive" className="rounded-sm">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Security;