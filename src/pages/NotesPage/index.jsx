import { useEffect, useState } from "react"
import NoteForm from "../../components/NoteForm"
import NoteList from "../../components/NoteList"
import * as notesAPI from '../../utilities/notes-api'


const NotesPage = () => {
  const [notes, setNotes] = useState([])
  
  const addNote = async(note) => {
    const newNote=await notesAPI.createNote(note)
    setNotes([...notes,newNote])
  }

  const deleteNote = async (id) => {
    await notesAPI.deleteNote(id)
    const updatedNotes = notes.filter(note => note._id = id)
    setNotes(updatedNotes)
  }

  //what does it do?
  useEffect(() => {
    notesAPI.getNotes().then((notes) => {
        setNotes(notes);
    });
}, []);
  

  return (
    <div>
      <h1>Notes Page</h1>
      <NoteForm addNote={ addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  )
}

export default NotesPage