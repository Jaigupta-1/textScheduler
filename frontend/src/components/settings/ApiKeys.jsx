// ApiKeys.tsx

import React from "react";
import { Button } from "../ui/button";

const ApiKeys = () => {
    return (
        <div className="w-full h-full overflow-y-auto p-5 flex flex-col gap-5">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <p className="font-semibold text-xl">API Keys</p>
                    <p className="text-sm text-muted-foreground">
                        Manage your API access keys.
                    </p>
                </div>

                <Button className="bg-[#5236e0] rounded-sm">
                    Create New Key
                </Button>
            </div>

            {/* Keys */}
            <div className="border border-white/10 rounded-md divide-y divide-white/10">
                {[1, 2, 3].map((_, index) => (
                    <div
                        key={index}
                        className="p-4 flex items-center justify-between"
                    >
                        <div>
                            <p className="font-medium">Production App</p>
                            <p className="text-sm text-muted-foreground">
                                ts_live_************************
                            </p>
                        </div>

                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                className="rounded-sm"
                            >
                                Copy
                            </Button>

                            <Button
                                variant="destructive"
                                className="rounded-sm"
                            >
                                Revoke
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Security Note */}
            <div className="border border-white/10 rounded-md p-4 flex items-center justify-between">
                <div>
                    <p className="font-semibold">
                        Keep your API keys secure
                    </p>

                    <p className="text-sm text-muted-foreground">
                        Never expose keys publicly.
                    </p>
                </div>

                <Button variant="outline" className="rounded-sm">
                    Documentation
                </Button>
            </div>
        </div>
    );
};

export default ApiKeys;