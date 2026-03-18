import { useEffect, useState } from "react"
import Layout from "../components/layout/Layout"

const Dashboard = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks")
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }, [])

  const totalTasks = tasks.length
  const completedTasks = tasks.filter((task) => task.completed).length
  const activeTasks = tasks.filter((task) => !task.completed).length

  const today = new Date().toDateString()

  const todaysDeadlines = tasks.filter(
    (task) =>
      task.deadline &&
      new Date(task.deadline).toDateString() === today
  )

  const overdueTasks = tasks.filter(
    (task) =>
      task.deadline &&
      new Date(task.deadline) < new Date() &&
      !task.completed
  )

  const cardStyle = {
    padding: "20px",
    borderRadius: "10px",
    background: "#f9f9f9",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    flex: 1,
    color: "black"
  }

  return (
    <Layout>
      <h1>Dashboard</h1>

      {/* 🔷 Stats Cards */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px", marginBottom: "40px" }}>
        <div style={cardStyle}>
          <h3 style={{ marginBottom: "10px" }}>Total Tasks</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>{totalTasks}</p>
        </div>

        <div style={cardStyle}>
          <h3 style={{ marginBottom: "10px" }}>Completed</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>{completedTasks}</p>
        </div>

        <div style={cardStyle}>
          <h3 style={{ marginBottom: "10px" }}>Active</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>{activeTasks}</p>
        </div>
      </div>

      {/* Due Today */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ marginBottom: "15px" }}>Due Today</h2>

        {todaysDeadlines.length === 0 ? (
          <p>No tasks due today</p>
        ) : (
          todaysDeadlines.map((task) => (
            <div
              key={task.id}
              style={{
                ...cardStyle,
                marginBottom: "15px" 
              }}
            >
              {task.title}
            </div>
          ))
        )}
      </div>

      {/* 🔴 Overdue */}
      <div>
        <h2 style={{ color: "red", marginBottom: "15px" }}>Overdue</h2>

        {overdueTasks.length === 0 ? (
          <p>No overdue tasks 🎉</p>
        ) : (
          overdueTasks.map((task) => (
            <div
              key={task.id}
              style={{
                ...cardStyle,
                marginBottom: "15px", 
                border: "2px solid red",
                color: "red"
              }}
            >
              {task.title}
            </div>
          ))
        )}
      </div>
    </Layout>
  )
}

export default Dashboard