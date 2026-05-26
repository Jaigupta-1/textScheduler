import React, { useState } from 'react'
import { Bell, Settings, UserRound, Workflow, KeyRound, ShieldCogCorner } from 'lucide-react';
import Icon from '@/components/shared/Icon';
import { AvatarDemo } from '@/components/shared/Avatar';
import { Link } from 'react-router-dom';
import Profile from '@/components/settings/Profile';
import Security from '@/components/settings/Security';
import Notifications from '@/components/settings/Notifications';
import Preferences from '@/components/settings/Prefrences';
import Integrations from '@/components/settings/Integration';
import ApiKeys from '@/components/settings/ApiKeys';
const settings = [{
  icon: <UserRound />,
  data: "Profile",
  nav: "/profile"
},
{
  icon: <Bell />,
  data: "Notifications",
  nav: "/profile"
}, {
  icon: <Settings />,
  data: "Preferences",
  nav: "/pre"
}, {
  icon: <Workflow />,
  data: "Integrations",
  nav: "/profile"
}, {
  icon: <KeyRound />,
  data: "API Keys",
  nav: "/profile"
}, {
  icon: <ShieldCogCorner />,
  data: "Security",
  nav: "/profile"
}];

const renderComponent = (setting) => {
  switch (setting) {
    case "Profile":
      return <Profile />;

    case "Notifications":
      return <Notifications />;

    case "Preferences":
      return <Preferences />;

    case "Integrations":
      return <Integrations />;

    case "API Keys":
      return <ApiKeys />;

    case "Security":
      return <Security />;

    default:
      return <Profile />;
  }
};
const SettingsPage = () => {
  const [setting, setSetting] = useState("Profile");
  return (
    <div className='bg-[#051321] text-white px-5 h-screen'>
      <div className="flex justify-between items-center h-[15%]">
        <div>
          <h2 className="text-xl font-semibold">Settings</h2>
          <h5 className="text-sm opacity-80">
            Manag your account and prefrences
          </h5>
        </div>
        <div className="flex gap-3 items-center">
          <Icon component={<Bell />} />
          <AvatarDemo img={"./favicon.svg"} className={"border border-white/30"} />
        </div>
      </div>
      <div className='flex gap-4 h-[84%]'>
        <div className='w-[21%] bg-[#0c1b2b] rounded-lg border border-white/30 shadow-2xl flex items-center flex-col gap-2 space-y-1 pt-5'>
          {
            settings.map(
              (itm) => {
                return <Link className='flex gap-3 hover:bg-violet-400 w-[80%] px-4 py-3 rounded-md' onClick={()=>setSetting(itm.data)}>{itm.icon}<p>{itm.data}</p></Link>
              }
            )
          } <p></p>
        </div>
        <div className="w-[79%] h-[85vh] bg-[#0c1b2b] rounded-lg border border-white/10 shadow-2xl overflow-hidden">
          {renderComponent(setting) }
          <Security />
        </div>
      </div>
    </div>
  )
}

export default SettingsPage