import React, { useState } from 'react';

const Usetate1 = () =>{
    const [counter, setCounter ] = useState(0);

    const Increment =() =>{
        setCounter(counter +1);
    }

    return(
        <div>
            <b>useState Hook</b>
            <h2>{counter}</h2>
            <button onClick={Increment}>Add 1</button>
        </div>);
}

export default Usetate1;
