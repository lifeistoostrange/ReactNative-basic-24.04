import React, { useState } from "react";

export default function Count() {
    const [count, setCount] = useState(0);

    const handleButtonClick = () => {
        setCount(count + 1); 
    };

    return (
        <div>
            <header className="App-header">
                <div>Count: {count}</div>
                <button onClick={handleButtonClick} disabled={count === 5}>+</button>
            </header>
        </div>
    );
}
