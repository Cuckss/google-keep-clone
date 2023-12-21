import React,{useContext, useState,useEffect}from "react";
import "./style.css"
//  import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Notes from "../notesFolder/Notes";
import { useSelector,useDispatch } from "react-redux";
import { addNote,deleteNote,updateNote } from "../../redux-toolkit/slices/createNoteSlice";
import { NotesContext } from "../../contextFolder/NotesContext";
const CreateNote=({filterSearch})=>{
    const{titleText,setTitleText,description,setDescription}=useContext(NotesContext)
        const[displayArea,setDisplayArea]=useState(false);
        const dispatch=useDispatch();
        let notes=useSelector((state)=>state.createNote);
       
      
      
          let savedNotes;
        useEffect(() => {
             savedNotes = JSON.parse(localStorage.getItem("notes"));
            console.log(savedNotes)
            savedNotes.map((note)=>{
                dispatch(addNote(note))
            })
           
          }, [dispatch]);
        //   console.log("yourfi",filterSearch)
            let filteredNotes=notes && notes.filter((item)=>{
            return item.title.toLowerCase().includes(filterSearch.toLowerCase()) ;
           })
           console.log("your filtered notes  ",filteredNotes)
          console.log("notes are",notes)
        notes=filteredNotes;
        
        function displaytextArea(e){
            e.stopPropagation(); 
            setDisplayArea(true)
        }
      
        window.addEventListener("click",()=>setDisplayArea(false))
        function handleTitleChange(e){
           setTitleText(e.target.value)
        }
        function handleDescriptionChange(e){
            setDescription(e.target.value);
        }
        function handleAddNote(e){
           e.preventDefault();
           if(titleText==""  && description==""){
            return;
           }else{
           dispatch(addNote({id:notes.length+1,title:titleText,note:description}))
           const updatedNotes = [...notes,{ id: notes.length + 1, title: titleText, note: description }];
      
          localStorage.setItem("notes", JSON.stringify(updatedNotes));
           setDescription("");
           setTitleText("");
           }
        }


    return(
        <>
        <div className="add-note">
        <form className="note-form" onClick={displaytextArea}  onSubmit={handleAddNote}>
            <input 
             onClick={displaytextArea}
             value={titleText}  
             className="form-input"
              type="text" 
              placeholder={displayArea?"Title":"Take a Note..."}
              onChange={handleTitleChange}/>
            <textarea 
             style={{ display: displayArea ? 'block' : 'none' }}
            className="textarea"
             rows="10"
              cols="40"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Take a Note...."/>
           
               <Button onClick={handleAddNote}>Add</Button>
            
        </form>
    </div>
    <div className="notes-container">
         {
            notes && notes.map((item)=>(
                
                    <Notes key={item.id} item={item}/>
              
            ))
         }
    </div>
    </>
    )
}
export default CreateNote;