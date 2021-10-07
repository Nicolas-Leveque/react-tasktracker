import React, { useState } from 'react';
import Button from './Button'

const AddTask = ({addTask}) => {
  const [ task, setTask ] = useState('')
  const [ day, setDay ] = useState('')
  const [ reminder, setReminder ] = useState(false)
  const addNewTask = async (e) => {
    e.preventDefault()
    const newTask = {
      text: task,
      day: day,
      reminder: reminder
    }
    addTask(newTask)
  }
  return (
    <form className="w-full" onSubmit={addNewTask} >
      <div className="form-control m-5 flex flex-col">
        <label>Task</label>
        <input type="text" placeholder="Add task"className="input-text" name="task" onChange={(e)=>{setTask(e.target.value)}}/>
      </div>
      <div className="form-control m-5 flex flex-col">
        <label>Day & time</label>
        <input type="text" placeholder="Add day and time" className="input-text" name="day" onChange={(e)=>{setDay(e.target.value)}}/>
      </div>
      <div className="form-control m-5 w-1/2 flex flex-row justify-between">
        <label>Reminder</label>
        <input type="checkbox" name="reminder" onChange={(e)=>{setReminder(e.target.checked)}}/>
      </div>
      <div className="flex justify-end pr-16">
      <Button color="green" className="justify-self-center" type="submit"  >Add</Button>
      </div>
      
    </form>
  );
}

export default AddTask