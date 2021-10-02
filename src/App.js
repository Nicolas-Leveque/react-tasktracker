import React, { useState, useEffect } from 'react';
import Header from './Components/Header'
import Tasks from './Components/Tasks'


function App() {
  const [ tasks, setTasks ] = useState()
  
  useEffect(()=> {
    fetch('http://localhost:5000/tasks', {
    method: 'GET',
    headers: {
      "Content-Type": 'application/json'
    }})
    .then(response => response.json())
    .then(json => setTasks(json))
  }, [])

  return (
    <main className="w-1/2 mx-auto my-6">
      <Header />
      <Tasks data={tasks}/>
    </main>
  );
}

export default App;
