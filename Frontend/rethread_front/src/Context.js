import React, { useState,createContext } from 'react'
import Navbar from './Navbar'
export const AppContext = createContext(null);
function Context() {
    const [quantity, setQuantity] = useState(0)
    return (

        <AppContext.Provider value={{quantity, setQuantity}}>
            <Navbar/>
        </AppContext.Provider>
  )
}

export default Context
