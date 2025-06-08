import React from 'react'
import { Outlet } from 'react-router'

const adminLayout = () => {
  return (
    <div className='admin_layout'>I am the admin-layout
      <aside className='bg-amber-300 w-full max-w-[200px] hidden lg:block'>
        Sidebar Reveal
      </aside>

      <aside className='children'>
        <Outlet />      {/* shows page of current route inside admin layout*/}
      </aside>
    
    </div>
  )
}

export default adminLayout