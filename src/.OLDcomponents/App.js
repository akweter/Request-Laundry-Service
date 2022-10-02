import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dash from './dashboard';
import Login from './login';
import Pref from './prefernces';
import './styles/myStyles.css';

function setToken(userToken){
  sessionStorage.setItem('token', JSON.stringify(userToken)); //set the token to session storage in JSON format.
}

function getToken(){
  const tokenString= sessionStorage.getItem('token', JSON.stringify('token')); //Retrieve the token.
  const userToken = JSON.parse(tokenString); //Parse the retrieved token into object
  return userToken?.token; //Return the token.
}

function App() {
const token = getToken(); //Assign getToken function to token.

if(!token){
  return(<Login setToken={setToken}/>); //Set
}

  const Home =()=>{
    return(
      <h1>Application</h1>
    );
  }

  return (
    <div className='wrapper'>
      <BrowserRouter>
      < Home />
        <Routes>
          <Route path='/login' element={< Login/>} />
          <Route path='/pref' element={< Pref/>} />
          <Route path='/dash' element={< Dash/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
