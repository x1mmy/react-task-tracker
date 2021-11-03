import { useState} from 'react'


const Tasks = () => {
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
    ]

    )
    
    return (
        <>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks
