import { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import CounterC from './CounterC';
import CounterF from './CounterF';
import Pokemon from './Pokemon';

function App() {
    const [count, setCount] = useState(0);
    const [name] = useState('Mahmoud');
    const [lastName] = useState('Abdulkareem');

    return (
        <>
            <Header name={name} lastName={lastName} />
            <button onClick={() => setCount(count + 1)}>Click: {count}</button>

            <h1>Counter C</h1>
            <CounterC counter={count} initialCount={5} />

            <h1>Counter F</h1>
            <CounterF initialCount={10} step={2} />

            <h1>Pokémon </h1>
            <Pokemon />

            <Footer />
        </>
    );
}

export default App;
