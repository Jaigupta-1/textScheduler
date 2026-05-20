import React from 'react'
import {Outlet} from 'react-router-dom';
import DashboardSidebar from '../components/ui/DashboardSidebar';

const DashboardLayout = () => {
  return (
    <>
    <DashboardSidebar />
    <Outlet />
    </>
  )
}

export default DashboardLayout