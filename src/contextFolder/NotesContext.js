import React,{useState} from "react";
import { createContext } from "react";

export const NotesContext=createContext();

const NotesContextProvider=({children})=>{
  
    const[titleText,setTitleText]=useState("");
    const[description,setDescription]=useState("");

    return(
        <NotesContext.Provider value={{titleText,setTitleText,description,setDescription}}>
            {children}
        </NotesContext.Provider>
    )
}
export default NotesContextProvider;