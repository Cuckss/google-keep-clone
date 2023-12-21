import React ,{useState,useEffect}from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import BasicModal from "../modal/BasicModal";
import "./style.css"
import { useDispatch, useSelector } from "react-redux";
import { removeNote,updateNote } from "../../redux-toolkit/slices/createNoteSlice";





const Notes=({item})=>{
  const notes=useSelector((state)=>state.createNote)
   
  // const [age, setAge] = React.useState('');
  // const handleSelectChange = () => {  

  // };



      const [open, setOpen] = React.useState(false);
      const handleChange = () => {       
      };
      const handleClickOpen = () => {
        setOpen(true);
      };
       const handleClose = () => {   
            setOpen(false);     
      };
    const dispatch=useDispatch();
     function deleteItem(){
        dispatch(removeNote(item.id))
        //const updatedNotes = [...notes,{ id: notes.length + 1, title: titleText, note: description }];
        const updatedNotes = notes.filter((noteItem)=>noteItem.id!==item.id);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
     }
     function updateYourNotes(){
      handleClickOpen();
     
     }
     const [selectedColor, setSelectedColor] = useState("");
     const handleColorChange = (event) => {
      setSelectedColor(event.target.value);
    };
    useEffect(() => {
      // Retrieve the selected color from local storage
      const storedColor = localStorage.getItem(`noteColor-${item.id}`);
      if (storedColor) {
        setSelectedColor(storedColor);
      }
    }, [item.id]);
  
    useEffect(() => {
      // Save the selected color to local storage
      localStorage.setItem(`noteColor-${item.id}`, selectedColor);
    }, [selectedColor, item.id]);
   return(
    <>
       <div className="note-div" style={selectedColor ? { backgroundColor: selectedColor } : {}}>
           <h4>{item.title}</h4>
           <div className="notes">{item.note}</div>
           <div className="note-button">

           <label for="cars"></label>
           <select name="cars" id="cars"className="select-div" onChange={handleColorChange}>
             <option value="" >
               Select a color
             </option>
             <option value="green">green</option>
             <option value="red">red</option>
             <option value="yellow">yellow</option>
             <option value="pink">pink</option>
             <option value="azure">azure</option>
             <option value="tomato">tomato</option>
             <option value="SlateBlue">SlateBlue</option>
             <option value="Violet">Violet</option>
           </select>
               <IconButton onClick={deleteItem}>
                   <DeleteIcon />
               </IconButton>
               <IconButton onClick={updateYourNotes}>
               <EditIcon />
               </IconButton >
                   
               
           </div>
       </div>
       <BasicModal open={open} handleClose={handleClose} item={item}/>
      {/* <BasicSelect /> */}
       </>
   )
}
export default Notes;