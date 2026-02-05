import { useState } from 'react';
// Exercice 2 : List Manager
function ListManager(props) {
    const [items, setItems] = useState(props.initialItems);
    const [inputValue, setInputValue] = useState('');

    const addItem = () => {
        if (inputValue.trim() !== '') {
            setItems([...items, inputValue]);
            setInputValue('');
        }
    };

    const removeItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1>List :</h1>

            <ul>
                {items.map((item, index) => (
                    <p key={index}>
                        {item} &nbsp;
                        <button className="remove-button" onClick={() => removeItem(index)}>Supprimer</button>
                    </p>
                ))}
            </ul>
            <br />
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Entez un nouveau élément"
            /> <button onClick={addItem}>Ajouter</button>
        </div>
    );
}

export default ListManager;