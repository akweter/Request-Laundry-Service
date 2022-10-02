import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Container } from "@mui/system";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./Navbar";
import Home from "./homePage";
import Footer from "./Footer";
import Mystory from './Mystory';
import Training from './Training';
import Quote from './Quotes';

export default function App(){
    return(
        <div className='body'>
            < Header />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" exact element={<Home/>}/>
                        <Route path="/story" element={<Mystory/>}/>
                        <Route path="/training" element={<Training/>}/>
                        <Route path="/quotes" element={<Quote/>}/>
                    </Routes>
                </BrowserRouter>
            < Footer />
        </div>
        
    );
}