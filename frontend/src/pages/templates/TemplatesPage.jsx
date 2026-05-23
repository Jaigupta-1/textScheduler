import React from "react";
import { Button } from "@/components/ui/button";
import { Plus, Bell, Settings, Edit, Mail } from "lucide-react";
const TemplatesPage = () => {
  return (
    <div className=" text-white px-5 min-h-screen bg-[#051321]">
      {/* Dashboard navbar */}
      <div className="flex justify-between items-center h-[15vh]">
        <div>
          <h2 className="text-xl font-semibold">Templates</h2>
          <h5 className="text-sm opacity-80">
            Create and manage your message templates
          </h5>
        </div>
        <div className="flex gap-3 items-center">
          <Button className={"bg-[#5236e0]"}>
            <Plus></Plus>New Templates
          </Button>
          {/* <Icon component={<Bell />} />
          <Icon component={<Settings />} /> */}
        </div>
      </div>
      {/* from div */}
      <div className="bg-[#051321] min-h-[85vh] ">
        <div className=" flex flex-wrap  gap-5">
          {[1, 2, 3, 1, 2, 3, 42, 3, 2, 7, 8, 9, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-full lg:max-w-[337px] min-h-[250px] border border-gray-500 rounded-sm py-4 px-3  flex flex-col justify-between"
            >
              <div>Birthday Wish</div>

              <div>Happy Birthday 🎉</div>

              <div>May your birthday bring happiness and success.</div>

              <div className="flex gap-2">
                <Button>
                  <Mail />
                  WhatsApp
                </Button>

                <Button>
                  <Edit />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;
