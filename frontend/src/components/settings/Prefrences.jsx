// Preferences.tsx

import React from "react";
import { Button } from "../ui/button";
import { FieldLabel } from "../ui/field";
import { Input } from "../ui/input";

const Preferences = () => {
    return (
        <div className="w-full h-full overflow-y-auto p-5 flex flex-col gap-5">
            {/* Header */}
            <div>
                <p className="font-semibold text-xl">Preferences</p>
                <p className="text-sm text-muted-foreground">
                    Customize your app experience.
                </p>
            </div>

            {/* General Settings */}
            <div className="border border-white/10 rounded-md p-4 space-y-4">
                <p className="font-semibold text-lg">General Settings</p>

                <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                        <FieldLabel>Language</FieldLabel>
                        <Input value="English" className="rounded-sm" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <FieldLabel>Date Format</FieldLabel>
                        <Input value="DD/MM/YYYY" className="rounded-sm" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <FieldLabel>Time Format</FieldLabel>
                        <Input value="12 Hour" className="rounded-sm" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <FieldLabel>Items Per Page</FieldLabel>
                        <Input value="10" className="rounded-sm" />
                    </div>
                </div>
            </div>

            {/* Theme */}
            <div className="border border-white/10 rounded-md p-4 flex items-center justify-between">
                <div>
                    <p className="font-semibold">Theme</p>
                    <p className="text-sm text-muted-foreground">
                        Select your preferred theme.
                    </p>
                </div>

                <div className="flex gap-2">
                    <Button variant="outline" className="rounded-sm">
                        Light
                    </Button>

                    <Button className="bg-[#5236e0] rounded-sm">
                        Dark
                    </Button>

                    <Button variant="outline" className="rounded-sm">
                        System
                    </Button>
                </div>
            </div>

            <Button className="bg-[#5236e0] w-fit rounded-sm">
                Save Changes
            </Button>
        </div>
    );
};

export default Preferences;