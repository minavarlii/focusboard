import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

const NoteCard = ({ note, deleteNote }) => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        marginBottom: "15px",
        borderRadius: "6px",
        background: darkMode ? "#1f2937" : "#f9f9f9",
        color: darkMode ? "white" : "black",
        width: "300px"
      }}
    >
      <p>{note.text}</p>

      <button onClick={() => deleteNote(note.id)}>
        Delete
      </button>
    </div>
  )
}

export default NoteCard