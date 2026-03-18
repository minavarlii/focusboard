import { useState } from "react"

const NoteForm = ({ addNote }) => {
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text) return

    addNote({
      text
    })

    setText("")
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <textarea
        placeholder="Write a note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="3"
        style={{ display: "block", marginBottom: "10px", padding: "8px", width: "300px" }}
      />

      <button type="submit">Add Note</button>
    </form>
  )
}

export default NoteForm