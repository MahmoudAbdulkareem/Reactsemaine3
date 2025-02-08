import React, { useState } from 'react';

function ListManager({ initialItems, placeholder }) {
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItem.trim()) {
      setItems([...items, newItem.trim()]);
      setNewItem('');
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} 
            <button onClick={() => handleDeleteItem(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder={placeholder}
        />
        <button type="submit">Ajouter </button>
      </form>
    </div>
  );
}

export default ListManager;
