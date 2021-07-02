import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  //we can add expressions here above the return
  const [showAddTask, setShowAddTask] = useState(false)
  
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctor\'s Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: 'Feb 6th at 1:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'Feb 5th at 2:30pm',
            reminder: false,
        },
    
    ]
  )

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, reminder:!task.reminder } : task
        )
      )
  }

  return (
    // only returns single Element, so put them inside here
    <div className="container">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask}
      />
      {showAddTask &&
        <AddTask onAdd={addTask} />
      }
      {tasks.length > 0 ? 
        (
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        ) : (
              'No Tasks To Show.'
            )
      
      }
      
    </div>
    
  );
}

export default App;

// ====================NOTE=====================
// To build the entire app type on terminal: npm run build
// Then it's gonna create a folder named build which is gonna be your static assets
// This is the folder you will deploy, what you push to production
// Only the build folder no need for other folder such as component, node_modules, etc.
// Those are your development stuff

// To try it locally you can install npm serve to serve package globally
// After building the app, type in Terminal: npm i -g serve
// Then: serve -s build -p <any port ex: 8000>
// When you go to localhost:8000, you'll see your app
// You can delete the production folders now and still see it running




















// =====this was inside App div=========
   /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
// ========================================

// =======this was the import=========
// import logo from './logo.svg';
// import './App.css';
// ======================================