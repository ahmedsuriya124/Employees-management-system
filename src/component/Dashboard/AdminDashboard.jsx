import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = (props) => {
    // console.log(props)
    return (
        <div className='h-screen p-7 w-full'>
            <Header data={props.data} changeUser={props.changeUser}/>
            <CreateTask/>
            <AllTask />
        </div>
    )
}

export default AdminDashboard