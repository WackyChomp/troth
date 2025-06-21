import React from 'react'
import { Header, StatsCard }  from '../../../components'
import { allTreks, dashboardStats, users } from '~/constants'
import TrekCard from 'components/TrekCard'

const { totalUsers, usersJoined, totalTreks, treksCreated, userRole } = dashboardStats     // destructured

const dashboard = () => {
  const user = {name: 'Joker'}      // Mock Data

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

      
      <section className="container">
        <h1 className='text-xl font-semibold text-orange-700'>Created Treks</h1>
        <div className="trek_grid">
          {allTreks.slice(0, 10).map(({ id, name, imageUrls, itinerary, tags, estimatedPrice }) => (
            <TrekCard 
              key={id}
              id={id.toString()}
              name={name}
              imageUrls={imageUrls[0]}
              location={itinerary?.[0]?.location ?? ''}
              tags={tags}
              price={estimatedPrice}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default dashboard