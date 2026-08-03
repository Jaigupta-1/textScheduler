// Integrations.tsx

import React from "react";
import { Button } from "../ui/button";

const integrations = [
    {
        name: "WhatsApp",
        desc: "Send messages using WhatsApp",
        status: "Connected",
    },
    {
        name: "Telegram",
        desc: "Send notifications via Telegram",
        status: "Connected",
    },
    {
        name: "Slack",
        desc: "Receive workspace notifications",
        status: "Not Connected",
    },
    {
        name: "Google Calendar",
        desc: "Sync schedules with calendar",
        status: "Connected",
    },
];

const Integrations = () => {
    return (
        <div className="w-full h-full overflow-y-auto p-5 flex flex-col gap-5">
            {/* Header */}
            <div>
                <p className="font-semibold text-xl">Integrations</p>
                <p className="text-sm text-muted-foreground">
                    Connect your favorite services.
                </p>
            </div>

            {/* Integrations List */}
            <div className="border border-white/10 rounded-md divide-y divide-white/10">
                {integrations.map((item, index) => (
                    <div
                        key={index}
                        className="p-4 flex items-center justify-between"
                    >
                        <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-muted-foreground">
                                {item.desc}
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <span
                                className={`text-xs px-2 py-1 rounded-sm ${item.status === "Connected"
                                        ? "bg-green-500/20 text-green-400"
                                        : "bg-yellow-500/20 text-yellow-400"
                                    }`}
                            >
                                {item.status}
                            </span>

                            <Button className="bg-[#5236e0] rounded-sm">
                                {item.status === "Connected"
                                    ? "Manage"
                                    : "Connect"}
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="border border-white/10 rounded-md p-4 flex items-center justify-between">
                <div>
                    <p className="font-semibold">
                        Need help connecting integrations?
                    </p>

                    <p className="text-sm text-muted-foreground">
                        Check documentation for setup guides.
                    </p>
                </div>

                <Button variant="outline" className="rounded-sm">
                    View Docs
                </Button>
            </div>
        </div>
    );
};

export default Integrations;