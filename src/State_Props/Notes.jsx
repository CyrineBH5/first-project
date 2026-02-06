import { useState } from 'react';

function Notes({ initialNotes = [] }) {
    const [notes, setNotes] = useState(initialNotes);
    const [inputValue, setInputValue] = useState('');
    
    const addNote = () => {
        const note = parseFloat(inputValue);
        if (!isNaN(note) && note >= 0 && note <= 20) {
            setNotes([...notes, note]);
            setInputValue('');
        }
    };

    const deleteNote = (index) => {
        setNotes(notes.filter((_, i) => i !== index));
    };

    const average = notes.length > 0 
        ? (notes.reduce((sum, note) => sum + note, 0) / notes.length).toFixed(2)
        : "0.00";

    return (
        <div>
            <h1>Notes</h1>
            
            <div>
                <h3>Liste :</h3>
                {notes.map((note, index) => (
                    <div key={index}>
                        {note}/20
                        <button onClick={() => deleteNote(index)}>Supprimer</button>
                    </div>
                ))}
            </div>
            
            <p>Moyenne : {average}/20</p>
            <p>Total : {notes.length} notes</p>
            
            <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Note (0-20)"
                min="0"
                max="20"
            />
            <button onClick={addNote}>Ajouter</button>
        </div>
    );
}

export default Notes;