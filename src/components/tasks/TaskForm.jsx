import { useState } from "react"

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [deadline, setDeadline] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title) return

    addTask({
      title,
      description,
      deadline
    })

    setTitle("")
    setDescription("")
    setDeadline("")
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          display: "block",
          marginBottom: "10px",
          padding: "8px",
          width: "300px"
        }}
      />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{
          display: "block",
          marginBottom: "10px",
          padding: "8px",
          width: "300px"
        }}
      />
      
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        style={{
          display: "block",
          marginBottom: "10px",
          padding: "8px",
          width: "300px"
        }}
      />

      <button type="submit">Add Task</button>
    </form>
  )
}

export default TaskForm