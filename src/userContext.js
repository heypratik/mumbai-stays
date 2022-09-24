import React, { useState } from "react"

const UserContext = React.createContext()

function UserContextProvider(props) {
    
    const [showBackDrop, setShowBackDrop] = useState(false)
    const [showSearch, setShowSearch] = useState(false);
    
    return (
        <UserContext.Provider value={{setShowBackDrop, showBackDrop, setShowSearch, showSearch}}>
        {props.children}
        </UserContext.Provider>
    )
}

export {UserContextProvider, UserContext}