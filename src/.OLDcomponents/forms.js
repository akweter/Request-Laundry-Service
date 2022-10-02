import React, { useState } from "react";

function Form(){
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [telephone, setTelephone] = useState('');
    const [serial, setSerial] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [commencement, setCommencement] = useState('');

    const handleFirstname=(b)=>{
        const firstname = b.target.value;
        setFirstname(firstname);
    }

    const handleLastname=(c)=>{
        const lastname = c.target.value;
        setLastname(lastname);
    }

    const handleTelephone=(d)=>{
        const telephone = d.target.value;
        setTelephone(telephone);
    }

    const handleId=(e)=>{
        const serial = e.target.value;
        setSerial(serial);
    }

    const handleEmail=(f)=>{
        const email = f.target.value;
        setEmail(email);
    }

    const handleLocation=(g)=>{
        const location = g.target.value;
        setLocation(location);
    }

    const handleCommencement=(date)=>{
        const commencement = date.target.value;
        setCommencement(commencement);
    }

    return(
        <div className="form-row">
            <div className="col-md-2"></div>
                <div className="col col-md-8">
                    <h2 className="form-header">Fill this Form</h2><br />
                    <form >
                        <div className="form-group">
                            <label>Surname:</label>
                            <input 
                            type="text"
                            required
                            placeholder="Akweter"
                            className="form-control"
                            value={firstname}
                            onChange={handleFirstname}/>
                        </div>
                        <div className="form-group">
                            <label>Lastname:</label>
                            <input 
                            type="text"
                            required
                            placeholder="James"
                            className="form-control"
                            value={lastname}
                            onChange={handleLastname}/>
                        </div>
                        <div className="form-group">
                            <label>Telephone:</label>
                            <input 
                            type="tel"
                            placeholder="Eg: +233 5405 44760"
                            required
                            className="form-control"
                            value={telephone}
                            onChange={handleTelephone}/>
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input 
                            type="email"
                            required
                            placeholder="example@mail.com"
                            className="form-control"
                            value={email}
                            onChange={handleEmail}/>
                        </div>
                        <div className="form-group">
                            <label>Location:</label>
                            <input 
                            type="text"
                            required
                            placeholder="Accra - Ghana"
                            className="form-control"
                            value={location}
                            onChange={handleLocation}/>
                        </div>
                        <input type="submit" value='Submit' name="submit-btn" className="btn btn-primary"/>
                    </form>
                </div>
            <div className="col-md-2"></div>
        </div>
        
    );
}
export default Form;
