import React, { useState } from 'react'

const TaskManagerPage = () => {

  const [task,setTask] = useState([]);
  return (
    <div className='min-h-screen bg-gray-200 p-6'>

    <h1 className='text-4xl font-bold text-center text-blue-500 mb-6'>Task Manager</h1>

    <div className='bg-blue-500 rounded shadow mx-auto max-w-md p-4'>
        <input 
        type="text" 
        placeholder='Enter your task'  
        className='w-full bg-white rounded  shadow p-2' 
        />

        <button className='w-60 bg-black text-white p-2 rounded mt-10 block mx-auto  '>Add Task</button>
    </div>
      
    </div>
  )
}

export default TaskManagerPage
