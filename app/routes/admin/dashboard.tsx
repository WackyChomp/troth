import React from 'react'
import { Header, StatsCard }  from '../../../components'

const dashboard = () => {

  {/* Mock Data */}
  const user = {name: 'Joker'}
  const dashboardStats = {
    totalUsers: 140,
    usersJoined: { currentMonth: 32, lastMonth: 14},
    totalTreks: 237,
    treksCreated: { currentMonth: 32, lastMonth: 14},
    userRole: { total: 88, currentMonth: 62, lastMonth: 21}
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
            LastMonthCount={usersJoined.lastMonth}
          />
          <StatsCard 
            headerTitle='Total Treks'
            total={totalTreks}
            currentMonthCount={treksCreated.currentMonth}
            LastMonthCount={treksCreated.lastMonth}
          />
          <StatsCard 
            headerTitle='Active Users'
            total={userRole.total}
            currentMonthCount={userRole.currentMonth}
            LastMonthCount={userRole.lastMonth}
          />
        </div>
      </section>
    </main>
  )
}

export default dashboard