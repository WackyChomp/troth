import React from 'react'
import { Outlet, redirect } from 'react-router'
import { SidebarComponent } from '@syncfusion/ej2-react-navigations'
import { NavItems } from 'components'
import MobileSidebar from 'components/MobileSidebar'
import { account } from '~/appwrite/client'
import { getExistingUser, storeUserData } from '~/appwrite/auth'



// export async function clientLoader(){
//   try{
//     const user = await account.get();
//     if(!user.$id) return redirect('/sign-in');

//     const existingUser = await getExistingUser(user.$id)
//     if(existingUser?.status == 'user'){
//       return redirect('/');       // users shouldn't have access to dashboard / only admin
//     }

//     return existingUser?.$id ? existingUser : await storeUserData()
//   }catch(error){
//     console.log('clientLoader Error: ', error);
//     return redirect('/sign-in')
//   }
// }


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