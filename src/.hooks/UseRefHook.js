import React, {useRef} from 'react';

export default function UseRefHook1(){
    //useRef is initially set to null value.
    const inputRef = useRef(null);

    const handleClick=(e)=>{
        const Val = inputRef.current.value;

        if(Val.length <= 5 ){
            alert('Type a name above 5 letters');
        }
        else{
            return(window.alert('Your name is: ' + Val));
        }
    }
    return(
        <div>
            <form>
                <b>useRef Hook</b>
                <p/>
                <input type='text' ref={inputRef} placeholder='please type your name here...' />
                <p/>
                <button type='submit' value='Press' onClick={handleClick}>Okay</button>
            </form>
            
        </div>
    );
}