import React from 'react';
import { Container } from "@mui/system"
import Banner from './Banner';

export default function Home(){
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
                    <div className="col left">
                        <h3 className="middle-blocks">Get the latest Tips</h3>
                    </div>
                    <div className="col middle">
                        <h3 className="middle-blocks">Why we are different</h3>
                    </div>
                    <div className="col right">
                        <h3 className="middle-blocks">Ride and Earn</h3>
                    </div>
                </div>
                <div className="testimonial">Testimonials</div>
            </div>
        </div>
    );
}
