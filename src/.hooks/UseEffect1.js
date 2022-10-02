import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UseEffect1(){
    const [data, setData ] = useState('');
    const [num, setNum ] = useState(0);

    //useEffect are mostly used  for API data fetch.
    useEffect(() =>{
        axios.get('http://localhost:4000/employee')
        .then((res) => {
            setData(res.data[0].email);
            console.log(res.data);
        });
    }, []);

    return(
        <div>
            <b>UseEffect Hook</b>
            <p>is mostly used to fetch API data <i>because it mounts every data before the DOM renders</i></p>
            <h3>My email is: {data}</h3>
            <button onClick={()=>{setNum(num+1)}}>{num}</button>
        </div>
    );
}

export default UseEffect1;
