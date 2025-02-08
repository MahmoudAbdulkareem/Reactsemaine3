import React, { useState } from 'react';

function NotesManager({ initialNotes }) {
  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState('');

  const handleAddNote = (e) => {
    e.preventDefault();
    const noteValue = parseFloat(newNote);
    if (!isNaN(noteValue) && noteValue >= 0 && noteValue <= 20) {
      setNotes([...notes, noteValue]);
      setNewNote('');
    } else {
      alert('Please enter a valid note between 0 and 20.');
    }
  };

  const handleDeleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const calculateAverage = () => {
    if (notes.length === 0) return 0;
    const sum = notes.reduce((acc, note) => acc + note, 0);
    return (sum / notes.length).toFixed(2);
  };

  return (
    <div>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note}
            <button onClick={() => handleDeleteNote(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddNote}>
        <input
          type="number"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Enter a note (0-20)"
        />
        <button type="submit">Ajouter</button>
      </form>
      <p>Moyenne : {calculateAverage()}</p>
    </div>
  );
}

export default NotesManager;
