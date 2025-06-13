import React from 'react'
import { Header }  from '../../../components'

const dashboard = () => {
  const user = {name: 'Joker'}
  return (
    <main className='dashboard wrapper'>
      <Header 
        title={`Welcome ${user?.name ?? 'Guest'}`}
        desc='Track your productive lifestyle and adventures'
      />
      
      <div>This is dashy board</div>
    </main>
  )
}

export default dashboard