import { useState, useEffect } from "react"
import Layout from "../components/layout/Layout"
import NoteForm from "../components/notes/NoteForm"
import NoteList from "../components/notes/NoteList"

const Notes = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes")
    return savedNotes ? JSON.parse(savedNotes) : []
  })

  const addNote = (note) => {
    const newNote = {
      id: Date.now(),
      ...note
    }

    setNotes([...notes, newNote])
  }

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id)
    setNotes(updatedNotes)
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  return (
    <Layout>
      <h1>Notes</h1>

      <NoteForm addNote={addNote} />

      <NoteList notes={notes} deleteNote={deleteNote} />
    </Layout>
  )
}

export default Notes