import React from 'react'
import { Bell, Settings } from 'lucide-react';
import Icon from '@/components/shared/Icon';
import { AvatarDemo } from '@/components/shared/Avatar';
const SettingsPage = () => {
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
          <AvatarDemo img={"./favicon.svg"} className={"border border-white/30"}/>
        </div>
      </div>
      <div className='flex gap-4 h-[84%]'>
        <div className='w-[21%] bg-[#0c1b2b] rounded-lg border border-white/30 shadow-2xl'>

        </div>
        <div className='w-[79%] bg-[#0c1b2b] rounded-lg border border-white/30 shadow-2xl'>

        </div>
      </div>
    </div>
  )
}

export default SettingsPage