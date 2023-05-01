import "./global.css"
import { TaskList } from "./components/TaskList"
import { Header } from "./components/Header"
import { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "todo:savedTasks"

export interface ITask {
  id: string;
  title: string;
  isComplited: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])

  function setTasksAndSaveLocalStorage(newTasks: ITask[]) {
    setTasks(newTasks)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }

  function loadSavedTasks() {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }

  useEffect(() => {
    loadSavedTasks()
  }, [])

  function addTask(title: string) {
    setTasksAndSaveLocalStorage([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title,
        isComplited: false
      }
    ])
  }

  function deleteTask(taskId: string) {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasksAndSaveLocalStorage(newTasks)
  }

  function toggleTaskComplete(taskId: string) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isComplited: !task.isComplited
        }
      }
      return task
    })
    setTasksAndSaveLocalStorage(newTasks)
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onComplete={toggleTaskComplete}
      />
    </>
  )
}

export default App
