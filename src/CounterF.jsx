import { useEffect, useState } from "react";

const CounterF = ({ initialCount = 0, step = 1 }) => {
    console.log("CounterF: render");
    
    const [count, setCount] = useState(initialCount);

    const handleIncrement = () => setCount(prev => prev + step);
    const handleDecrement = () => setCount(prev => prev - step);
    const handleReset = () => setCount(0);

    useEffect(() => {
        console.log("Component Did Mount");
    }, []);

    useEffect(() => { 
        console.log("Component Updated"); 
    }, [count]);

    return (
        <>  
            <p>Count = {count}</p>
            <button onClick={handleIncrement}>Increment</button>    
            <button onClick={handleDecrement}>Decrement</button>    
            <button onClick={handleReset}>Reset</button>    

        </>
    );
}

export default CounterF;
