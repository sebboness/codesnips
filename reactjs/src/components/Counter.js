import React, { useState } from 'react';

var Counter = () => {

    const [count, setCount] = useState(parseInt(localStorage.getItem("count") || "0"));

    const handleClick = (inc) => {
        const newCount = count + inc;
        localStorage.setItem("count", newCount);
        setCount(newCount);
    }

    return <>
        <h3>Counter</h3>
        <div>
            <button onClick={() => handleClick(-1)}>[ - ]</button>
            &nbsp;
            <span>{count}</span>
            &nbsp;
            <button onClick={() => handleClick(1)}>[ + ]</button>
        </div>
    </>;
}

export default Counter;
