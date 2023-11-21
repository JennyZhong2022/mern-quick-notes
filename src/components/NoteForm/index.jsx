import { useState } from "react"

const NoteForm = ({addNote}) => {
  const [newNote, setNewNote] = useState('');
    const _handleSubmit = (e) => {
        e.preventDefault();
        addNote(newNote);
        setNewNote('');
    }
    return (
        <form onSubmit={ _handleSubmit }>
            <label htmlFor="note">
                Note:
            </label>
            <textarea id="note" value={newNote} onChange={(e) => setNewNote(e.target.value)}></textarea>
            <label htmlFor="add">
                Add note:
            </label>
            <button id="add">Add note</button>
        </form>
    );
}

export default NoteForm