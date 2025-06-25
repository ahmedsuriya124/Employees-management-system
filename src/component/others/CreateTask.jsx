import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
    const [userData , setUserData] = useContext(AuthContext);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        const data = userData.employees;
        const task = { active: false, category, completed: false, date, description, failed: false, newTask: true, title };
        const updateData = data.map((elem) => {
            if (elem.firstName == assignTo) {
                // elem.tasks.push(task);
                // console.log(elem)
                return {
                    ...elem, tasks:[...elem.tasks, task]
                }
            }
            return elem
        })
        setUserData({...userData , employees: updateData})
        localStorage.setItem('Employees' , JSON.stringify(updateData));
        setTitle('')
        setDate('')
        setAssignTo('')
        setCategory('')
        setDescription('')
    }
    return (
        <div className='p-5 bg-[#1C1C1C] mt-7 rounded'>
            <form onSubmit={(e) => {
                submitHandler(e);
            }} className='flex flex-wrap w-full items-start justify-between '>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded ring-1 ring-gray-400 focus:ring-1 focus:ring-gray-400 outline-none bg-transparent mb-4' type="text" placeholder='Make a UI Design' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                            value={date}
                            onChange={(e) => {
                                setDate(e.target.value);
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded ring-1 ring-gray-400 focus:ring-1 focus:ring-gray-400 outline-none bg-transparent  mb-4' type="date" name="" id="" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                        <input
                            value={assignTo}
                            onChange={(e) => {
                                setAssignTo(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded ring-1 ring-gray-400 focus:ring-1 focus:ring-gray-400 outline-none bg-transparent mb-4' type="text" placeholder='Employee Name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value);
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded ring-1 ring-gray-400 focus:ring-1 focus:ring-gray-400 outline-none bg-transparent mb-4' type="text" placeholder='Design, Dev etc' />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                        className='w-full h-44 text-sm py-2 px-4 rounded ring-1 ring-gray-400 focus:ring-1 focus:ring-gray-400 outline-none bg-transparent' name="" id="" cols="30" rows="10"></textarea>
                    <button className='cursor-pointer bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask