import React from 'react'
import { Outlet } from 'react-router'
import { SidebarComponent } from '@syncfusion/ej2-react-navigations'
import { NavItems } from 'components'
import MobileSidebar from 'components/MobileSidebar'

const adminLayout = () => {
  return (
    <div className='admin_layout'>
      {/* <MobileSidebar /> */}
      
      <aside className='bg-amber-300 w-full max-w-[300px] hidden lg:block'>
        <SidebarComponent width='270px' enableGestures={false}>
          <NavItems />
        </SidebarComponent>
      </aside>

      <aside className='children'>
        <Outlet />      {/* shows page of current route inside admin layout*/}
      </aside>
    
    </div>
  )
}

export default adminLayout