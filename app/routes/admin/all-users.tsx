import React from 'react'
import { Header } from 'components'
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids'
import { users } from '~/constants'
import { cn } from '~/lib/utils'

const allUsers = () => {
  return (
    <div className="bg-blue-300 all_users wrapper">
      <Header 
        title='All Users'
        desc='Monitor all the people in your network!'
      />

    <div>All of them users displayed here</div>

    <GridComponent dataSource={users} gridLines='None'>
      <ColumnsDirective>
        <ColumnDirective 
          field='name'
          headerText='Name'
          width='200'
          textAlign='Left'
          template={(props: UserData) => {
            <div className='flex items-center gap-2 px-4'>
              <img src={props.imageUrl} alt="user" className='rounded-full size-10 aspect-square' />
              <span>{props.name}</span>
            </div>
          }}
        />

        <ColumnDirective 
          field='email'
          headerText='Email'
          width='150'
          textAlign='Left'
        />

        <ColumnDirective 
          field='dateJoined'
          headerText='Date Joined'
          width='120'
          textAlign='Left'
        />
        <ColumnDirective 
          field='itineraryCreated'
          headerText='Trek Created'
          width='130'
          textAlign='Left'
        />
        <ColumnDirective 
          field='status'
          headerText='Type'
          width='130'
          textAlign='Left'
          template={({ status }: UserData) => (
            <article className={cn('status_column', status === 'user' ? 'bg-green-400' : 'bg-blue-400')}>
              <div className={cn('size-2 rounded-full', status === 'user' ? 'bg-purple-400' : 'bg-amber-600')} />
              <h3 className={cn('font-inter text-xs font-medium', status === 'user' ? 'text-green-800' : 'text-gray-800')}>{status}</h3>

            </article>
          )}
        />
      </ColumnsDirective>
    </GridComponent>
    </div>
  )
}

export default allUsers