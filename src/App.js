import React, { useState, useEffect } from 'react';
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'


function App() {
  const [ tasks, setTasks ] = useState([])
  const [ showAddTask, setShowAddTask ] = useState(false)

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const task = await res.json()
    return task
  }
  const deleteTask = async (id) => {
    
      const res = await fetch(`http://localhost:5000/tasks/${id}` ,{
        method: 'DELETE'
      })
      res.status ===200 ? setTasks(tasks.filter((task) => task.id !== id)) : alert("Error deleting task")
    
  }
  const addTask = async (task) => {
    console.log('app', task)
    const res = await fetch('http://localhost:5000/tasks', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    setTasks([ ...tasks, data])
    setShowAddTask(false)
  }
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)

    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)  
    })
    const data = await res.json()
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, reminder: data.reminder } : task 
    ))
  }

  useEffect(()=> {
    fetch('http://localhost:5000/tasks')
    .then(response => response.json())
    .then((json) => {
    setTasks(json)
    })
  }, [])

  
  return (
    
    <main className="w-5/6 mx-auto my-6">
      <Header toggleAddTask={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
      {showAddTask ? (<AddTask addTask={addTask}/>): ''}
      <Tasks data={tasks} onToggle={toggleReminder} onDelete={deleteTask}/>
      
    </main>
  );
}

export default App;
