import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import CounterC from './CounterC';
import CounterF from './CounterF';
import Pokemon from './Pokemon';
import ListManager from './ListManager';
import ColorBox from './ColorBox'; // Import ColorBox
import NotesManager from './NotesManager'; // Import NotesManager

function App() {
    const [count, setCount] = useState(0);
    const [name] = useState('Mahmoud');
    const [lastName] = useState('Abdulkareem');

    // Define initialItems for the ListManager component
    const initialItems = ['React', 'Vue', 'Angular'];

    // Define initial color options for ColorBox
    const colorOptions = ['#FF5733', '#33FF57', '#3357FF', '#FF33FF', '#FFFF33'];

    // Define initial notes for NotesManager
    const initialNotes = [12, 15, 18];

    // Define initial tasks for TodoList component
    const initialTasks = [
        { name: 'Learn React', priority: 'High', completed: false },
        { name: 'Study for exams', priority: 'Medium', completed: false },
        { name: 'Read a book', priority: 'Low', completed: false },
    ];

    return (
        <>
            <Header name={name} lastName={lastName} />
            <button onClick={() => setCount(count + 1)}>Click: {count}</button>

            <h1>Counter C</h1>
            <CounterC counter={count} initialCount={5} />

            <h1>Counter F</h1>
            <CounterF initialCount={10} step={2} />


            <h1>Pokémon</h1>
            <Pokemon />
            
            
            <h1>Dynamic List </h1>
            <ListManager initialItems={initialItems} placeholder="Entrez un nouveau element" />


            <h1>Color Box</h1>
            <ColorBox initialColor={colorOptions[0]} colorOptions={colorOptions} />

            <h1>Notes Manager</h1>
            <NotesManager initialNotes={initialNotes} />

            <Footer />
        </>
    );
}

export default App;
