import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Form from './Form';

export default function Header(){
    return(
        <div className='header'>
            <div className="nav container">
                <div className="nav-brand"><a href='/'> <img src='images/5.jpg' alt='Logo' width='52' height='40'/></a></div>
                <div className="navList">
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/story'>My Story</a></li>
                        <li><a href='/training'>Training</a></li>
                        <li><a href='/quotes'>Quotes</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
