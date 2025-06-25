import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'


const AllTask = () => {
    const [userData , setUserData] = useContext(AuthContext);
    return (
        <div className='bg-[#1C1C1C] p-5 mt-5 h-60  rounded'>
            <div className="font-bold text-xl flex justify-between rounded mb-2 py-2 px-4 bg-red-400">
                <h2 className='w-1/5 '>Employee Name</h2>
                <h2 className='w-1/5 '>New Task</h2>
                <h2 className='w-1/5 '>Active Task</h2>
                <h2 className='w-1/5 '>Completed</h2>
                <h2 className='w-1/5 '>Failed</h2>
            </div>
            <div className='h-[80%] overflow-auto'>

                {userData.employees.map((elem , idx) => {

                    return <div key={idx} className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
                        <h2 className='w-1/5 text-yellow-500'>{elem.firstName}</h2>
                        <h2 className='w-1/5 text-red-600'>{elem.taskStats.newTask}</h2>
                        <h2 className='w-1/5 text-red-600'>{elem.taskStats.active}</h2>
                        <h2 className='w-1/5 text-red-600'>{elem.taskStats.completed}</h2>
                        <h2 className='w-1/5 text-red-600'>{elem.taskStats.failed}</h2>
                    </div>
                })}
            </div>
        </div>
    )
}

export default AllTask