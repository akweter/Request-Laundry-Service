import React, { useReducer } from 'react';

//Reducer fumction reduce threads of codes
const reducer = (state, action) =>{
        switch (action.type){
            case "Add":
                return {count: state.count +1, Name: state.Name}
            case "Toggle":
                return {count: state.count, Name: !state.Name}
            default:
                return state;
        }
    }
    
const UseReducer2 = () =>{
    //state holds the value of our function.
    //dispath will automate our function.
    const [state, dispatch ] = useReducer(reducer,{count: 0, Name: true});

    return(
        <div>
            <b>Reducer Function</b>
            <h3>{state.count}</h3>
            <button onClick={
                () =>{ dispatch({type: "Add"}); dispatch({type: "Toggle"});}
            }>Press</button>
            {state.Name && <h3>Toggle me, toggle you</h3>}
        </div>);
}

export default UseReducer2;