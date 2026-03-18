import { useContext, useState } from "react"
import { ThemeContext } from "../../context/ThemeContext"

const TaskCard = ({ task, deleteTask, toggleTask, editTask }) => {
  const { darkMode } = useContext(ThemeContext)

  const [isEditing, setIsEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(task.title)

  const handleSave = () => {
    if (newTitle.trim() === "") return
    editTask(task.id, newTitle)
    setIsEditing(false)
  }

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        marginBottom: "15px",
        borderRadius: "6px",
        background: darkMode ? "#1f2937" : "#f9f9f9",
        color: darkMode ? "white" : "black"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        {isEditing ? (
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            style={{ padding: "5px", borderRadius: "4px" }}
          />
        ) : (
          <h3
            style={{
              textDecoration: task.completed ? "line-through" : "none"
            }}
          >
            {task.title}
          </h3>
        )}
      </div>

      <p>{task.description}</p>
      {task.deadline && (
  <p style={{ fontSize: "12px", opacity: 0.7 }}>
    Deadline: {new Date(task.deadline).toLocaleDateString()}
  </p>
)}

      <p style={{ fontSize: "12px", opacity: 0.7 }}>
        Created:{" "}
        {task.createdAt
          ? new Date(task.createdAt).toLocaleDateString()
          : "N/A"}
      </p>

      {task.completedAt && (
        <p style={{ fontSize: "12px", opacity: 0.7 }}>
          Completed: {new Date(task.completedAt).toLocaleDateString()}
        </p>
      )}

      <div style={{ marginTop: "10px" }}>
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}

        <button
          onClick={() => deleteTask(task.id)}
          style={{ marginLeft: "10px" }}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TaskCard