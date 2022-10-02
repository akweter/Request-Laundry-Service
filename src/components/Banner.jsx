import { Container } from "@mui/system";
import { useState } from "react";


export default function Banner(){
    const [Submit, setSubmit] = useState('');

    const alertName=(event)=>{
        const Submit = event.target.value;
        setSubmit(Submit);
    }

    const Locateme=(e)=>{
        e.preventDefault();
        //Wriet a function.
        if(Submit == '' || Submit == null){
            const Val = window.localStorage.getItem('value');
            alert(Val + ' is detected as your recent location');
        }
        else{
             document.write(
            `<h1>${Submit} is confirmed as your address</h1>
            <a href='/'><button>Back</button></a>`
            );
        }
    }

    const alertSubmit=(e)=>{
        e.preventDefault();
        
        if(Submit == '' || Submit == null ){
            alert('Kindly input your Address');
        }   
        else{
                window.localStorage.setItem('value', Submit);
                document.write(
                    `<h1>Why did you choose ${Submit} as your address?</h1>
                    <a href='/'><button style="background-color:red;color:white">Back</button></a>`
                );
        }
    }

    return(
        <div>
            <div className="banner">
                <p className="nickelodon">Nickeledon</p>
                <p className="nick-shape"></p>
                <form className="locate-form">
                    <input onChange={alertName} className="fa fa-search form-control row" type="search" placeholder="My Address..." value={Submit}/>
                    <button onClick={alertSubmit} className="submitbtn" type="submit">Submit</button>
                    <input onClick={Locateme} className="form-control locate-me-input" type="submit" value="Locate me"/>
                </form>
            </div>
        </div>
    );
}
