import React, { useState } from 'react';

const UseReducer1 = () =>{
    const [inVal, setinVal ] = useState('Type in the above field');

    const Changes =(e) =>{
        const inVal = e.target.value;
        setinVal(inVal);
    }

    return(
        <div>
            <b>useState Hook</b> <p />
            <input onChange={Changes} placeholder='Emter your name...' />
            <h3>{inVal}</h3>
        </div>);
}

export default UseReducer1;