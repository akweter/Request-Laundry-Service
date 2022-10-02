import React, { useState } from 'react';
import './styles/login.css';

async function Loginuser(credentials){
    return('http://localhost:4000/login',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(credentials)
    })
    .then(data => data.json());
}

export default function Login({setToken}){
    const [username, setUserName]=useState();
    const [password, setPassword]=useState();

    const handleSubmit=async e=>{
        e.preventDefalut();
        const token=await Loginuser({username, password});
        setToken(token);
    }

    return(
        <div className='login-wrapper'>
            <h2>Log In</h2>
            <form>
                <label htmlFor='name'>Full Name:</label>
                <input type='text' name='name' onChange={e=>setUserName(e.target.value)}/>
                <br/>
                <label htmlFor='pass'>Password:</label>
                <input type='password' name='pass' onChange={e=>setPassword(e.target.value)}/>
                <br/>
                <input type='submit' onSubmit={handleSubmit}/>
            </form>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3969.7850317502525!2d-0.3010305!3d5.7440615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7ef6a81e7acc5a65!2sIMANI%20CPE&#39;s%20new%20office!5e0!3m2!1sen!2sgh!4v1660021833004!5m2!1sen!2sgh" width="600" height="450" style="border:6;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade" target="_blank">
            </iframe>
        </div>
    );
}

/*Login.propTypes={setToken: PropTypes.func.isRequired}*/
