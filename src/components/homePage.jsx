import React, {Component} from 'react';
import { Container } from "@mui/system"
import Banner from './Banner';
import Posts from '../api/posts.json';
import { useState } from 'react';   

export default function Home(){

    let postings = JSON.parse(localStorage.getItem("value")) || [];

    let genPost =() =>{
        return (Posts.map((x) =>{
            let {id, title, body, userId, tags, reactions}= x;
            console.log(x.title[0]);
            let search = postings.find((y) => y.id === id) || [];
            return`
            <div>name</div>`;
    }).join(""));
    }

        return(
        <div>
             <Banner/>
            <div className='main'>
                <div className="row row1">
                    <div className="col col-md-6 offset-1 about-header">
                        <h1>About Us</h1>
                        <p>Our story comes from the various sources to facilitate....</p>
                        < a href='mailto:jamesakweter@gmail.com' target='_blank'><button className='callBtn'>Email me</button></a>
                    </div>
                    <div className="col col-md-4">
                        <img src='images/.jpg' alt='Akweter James'/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3 className="middle-blocks left">Get Our latest Deals</h3>
                        <li></li>
                    </div>
                    <div className="col">
                        <h3 className="middle-blocks middle">Become a rider</h3>
                        <div>{genPost}</div>
                    </div>
                    <div className="col">
                        <h3 className="middle-blocks right">Read the imitable posts</h3>
                    </div>
                </div>
                <div className="testimonial">Testimonials</div>
            </div>
        </div>
    );    
}
