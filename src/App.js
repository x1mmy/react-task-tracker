import { useState} from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctor',
        day: 'Feb 5 at 2.30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'School',
        day: 'Feb 6 at 1.30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Shopping',
        day: 'Feb 4 at 3.30pm',
        reminder: false,
    },
])

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }


  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, reminder: !task.reminder} : task
    )
  )
  }

  return (
    <div className='container'>
      <Header/> 
      {tasks.length > 0 ? <Tasks tasks={tasks}  onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to Show'}
    </div>
  );
}

export default App;
