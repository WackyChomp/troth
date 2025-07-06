import React from 'react'
import { Header } from 'components'
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids'
import { users } from '~/constants'

const allUsers = () => {
  return (
    <div className="bg-blue-300 all_users wrapper">
      <Header 
        title='All Users'
        desc='Monitor all the people in your network!'
      />

    <div>All of them users displayed here</div>

    <GridComponent dataSource={users}>
      <ColumnsDirective>
        <ColumnDirective 
          field='name'
          headerText='Name'
          width='200'
          textAlign='Left'
        />
      </ColumnsDirective>
    </GridComponent>
    </div>
  )
}

export default allUsers