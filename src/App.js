import { useState} from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTasks, setShowAddTasks] = useState(false)
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

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() *
  1000) + 1
  const newtask = {id, ...task}
  setTasks([...tasks, newtask])
  
}

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
      <Header 
        onAdd={() => setShowAddTasks(!showAddTasks)} showAdd={showAddTasks}
      /> 
      {showAddTasks && <AddTask onAdd = {addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks}  onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to Show'}
    </div>
  );
}

export default App;
