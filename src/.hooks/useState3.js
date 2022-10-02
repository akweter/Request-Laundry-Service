import React, { useState } from 'react';

const Usetate3 = () =>{
    const [counter, setCounter ] = useState(0);
    const [name, setname] = useState(true);

    const Increment =() =>{
        setCounter(counter +1);
        setname(!name);
        
    }

    return(
        <div>
            <b>useState Hook</b>
            <h2>{counter}</h2>
            <button onClick={Increment}>Click</button>
            <h2>{name && <i>Hide and show</i>}</h2>     
        </div>);
}

export default Usetate3;
