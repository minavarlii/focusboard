import NoteCard from "./NoteCard"

const NoteList = ({ notes, deleteNote }) => {
  return (
    <div>
      {notes.length === 0 ? (
        <p>No notes yet</p>
      ) : (
        notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            deleteNote={deleteNote}
          />
        ))
      )}
    </div>
  )
}

export default NoteList