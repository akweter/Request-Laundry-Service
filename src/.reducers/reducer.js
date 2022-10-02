/*import React from 'react';
import { ReactDOM } from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './app';
import createStore from './createReduxStore';

const store = createStore();

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

const dispatch = useDispatch();

const addItemToCart = () =>{
    return(
        type: "ADD_ITEM_TO_CART"
        payload: {
            bookName: "Harry Potter",
            noOfItem: 1
        }
    )
}

<button onClick={() => dispatch(addItemToCart())}>Add to cart</button>

const initialCartState = {
    noItemInCart: 0,
    cart: []
}

const cartReducer = (state = initialCartState, action) =>{
    switch (action.type){
        case "ADD_ITEM_TO_CART":
            return{
                ...state,
                noItemInCart: state.noItemInCart + 1,
                cart: [
                    ...state.cart,
                    action.payload
                ]
            }
        case "DELETE_ITEM_FROM_CART":
            return{
                //Here we write this message.
            }
        default: state;
        //Default code is written here.
    }
}
*/