import React, { useState } from "react";

export default function Count() {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1); 
    };

    const resetClick = () => {
        setCount(0);
    };

    return (
        <div>
            <header className="App-header">
                <div>Count: {count}</div>
                <button onClick={increaseCount} disabled={count === 5}>+</button>
                <button onClick={resetClick}>r</button>
            </header>
        </div>
    );
}
