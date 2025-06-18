import React from 'react'
import { Header, StatsCard }  from '../../../components'

const dashboard = () => {

  {/* Mock Data */}
  const user = {name: 'Joker'}
  const dashboardStats = {
    totalUsers: 140,
    usersJoined: { currentMonth: 17, lastMonth: 14},
    totalTreks: 237,
    treksCreated: { currentMonth: 13, lastMonth: 71},
    userRole: { total: 88, currentMonth: 13, lastMonth: 21}
  }
  const { totalUsers, usersJoined, totalTreks, treksCreated, userRole } = dashboardStats


  return (
    <main className='dashboard wrapper'>
      <Header 
        title={`Welcome, ${user?.name ?? 'Guest'}!`}
        desc='Track your productive lifestyle and adventures'
      />
      
      <div>This is dashy board</div>

      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <StatsCard 
            headerTitle='Total Users'
            total={totalUsers}
            currentMonthCount={usersJoined.currentMonth}
            lastMonthCount={usersJoined.lastMonth}
          />
          <StatsCard 
            headerTitle='Total Treks'
            total={totalTreks}
            currentMonthCount={treksCreated.currentMonth}
            lastMonthCount={treksCreated.lastMonth}
          />
          <StatsCard 
            headerTitle='Active Users'
            total={userRole.total}
            currentMonthCount={userRole.currentMonth}
            lastMonthCount={userRole.lastMonth}
          />
        </div>
      </section>
    </main>
  )
}

export default dashboard