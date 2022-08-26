import { useContext, useState } from "react"
import React from "react"


const MenuContext = React.createContext({ isOpen: false, toggle: (isOpen) => !isOpen })


export const useMenuContext = () => {
    return useContext(MenuContext);
}



const MenuContextProvider = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(prevState => !prevState)
    }


    return (
        <MenuContext.Provider value={{ isOpen, toggle }}>
            {props.children}
        </MenuContext.Provider>
    )
}

export default MenuContextProvider;