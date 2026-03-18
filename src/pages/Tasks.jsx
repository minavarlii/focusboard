import { useState, useEffect } from "react"
import Layout from "../components/layout/Layout"
import TaskList from "../components/tasks/TaskList"
import TaskForm from "../components/tasks/TaskForm"

const Tasks = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks")
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  const [filter, setFilter] = useState("all")

  const addTask = (task) => {
    const newTask = {
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
      completedAt: null,
      deadline: task.deadline || null, // ✅ deadline added
      ...task
    }

    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id)
    setTasks(updatedTasks)
  }

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            completed: !task.completed,
            completedAt: !task.completed
              ? new Date().toISOString()
              : null
          }
        : task
    )

    setTasks(updatedTasks)
  }

  const editTask = (id, newTitle) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title: newTitle } : task
    )

    setTasks(updatedTasks)
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed
    if (filter === "completed") return task.completed
    return true
  })

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  return (
    <Layout>
      <h1>Tasks</h1>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      <TaskForm addTask={addTask} />

      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        editTask={editTask}
      />
    </Layout>
  )
}

export default Tasks