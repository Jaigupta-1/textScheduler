import React from "react";
import { Input } from "../ui/input";
import { FieldLabel } from "../ui/field";
import { TimezoneSelect } from "../shared/SelectTimeZone";
import { Button } from "../ui/button";
const Profile = () => {
  return (
    <div className="w-full flex flex-col gap-2 h-full p-5 space-y-2">
      <div className="h-[14%]">
        <p className="font-semibold text-xl">Profile Information</p>
        <p>Update your personal information</p>
      </div>
      <div className="h-[40%] space-y-2">
        <div className="flex gap-3 ">
          <div className="flex-1 flex flex-col gap-1">
            <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
            <Input placeholder="Jordan Lee" className={"rounded-sm"} />
          </div>
          <div className="flex-1 flex flex-col  gap-1">
            <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
            <Input
              type="email"
              placeholder="name@example.com"
              className={"rounded-sm"}
            />
          </div>
        </div>

        <div className="flex flex-col self-center  gap-1">
          <FieldLabel>Timezone</FieldLabel>
          <TimezoneSelect />
        </div>
        <Button className="bg-[#5236e0] w-fit rounded-sm px-3 py-4">
          Save Changes
        </Button>
      </div>
      <div className="h-[5%] font-semibold text-lg">Change Password</div>
      <div className="h-[40%] flex flex-col space-y-2">
        <div className="flex flex-col  gap-1">
          <FieldLabel>Old Password</FieldLabel>
          <Input placeholder="Jordan Lee" type="Password" className={"rounded-sm"} />
        </div>
      <div className="flex gap-3">
        <div className="flex-1 flex-col flex gap-1">
          <FieldLabel>New Password</FieldLabel>
          <Input placeholder="Jordan Lee" type="Password" className={"rounded-sm"} />
        </div>
        <div className="flex-1 flex-col flex gap-1">
          <FieldLabel>Confirm New Password</FieldLabel>
          <Input placeholder="Jordan Lee" type="Password" className={"rounded-sm"} />
        </div>
      </div>
      <Button className="bg-[#5236e0] w-fit rounded-sm px-3 py-4">Update Password</Button>
    </div>
    </div>
  );
};

export default Profile;
