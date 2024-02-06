import React, { useState, createContext } from 'react';
import Cart from "./Cart"
import Navbar from './Navbar';


export const AppContext = createContext({ totalQuantity:0, setTotalQuantity:()=>{}});

function Context() {
    const [totalQuantity, setTotalQuantity] = useState(0); // Add totalQuantity state

    return (
        <AppContext.Provider value={{totalQuantity, setTotalQuantity }}>
            <Navbar/>
            <Cart/>
        </AppContext.Provider>
    );
}

export default Context;
