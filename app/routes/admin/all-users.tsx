import React from 'react'
import { Header } from 'components'

const allUsers = () => {
  return (
    <div className="all_users wrapper">
      <Header 
        title='All Users'
        desc='Monitor all the people in your network!'
      />
    <div>All of them users displayed here</div>
    </div>
  )
}

export default allUsers