import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const MainContext = React.createContext() 


export default function MainContextProvider({children}) {
    const [loginBox, setLoginBox] = useState(false)

    function OpenLoginBox() {
        setLoginBox(i => !i)
    }

    function CloseLoginBox() {
        setLoginBox(i => !i)
    }

    const data = {
        loginBox,
        OpenLoginBox,
        CloseLoginBox
    }

    return (
        <MainContext.Provider value={data}>
            {children}
        </MainContext.Provider>
    )
}