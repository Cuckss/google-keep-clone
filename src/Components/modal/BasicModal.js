import React, { useContext ,useState,useEffect} from "react"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./style.css"
import { NotesContext } from "../../contextFolder/NotesContext";
import { useSelector,useDispatch } from "react-redux";
import { updateNote } from "../../redux-toolkit/slices/createNoteSlice";
const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({open,handleClose,item}) {

  const dispatch=useDispatch();
  const notes=useSelector((state)=>state.createNote)
  const{setTitleText,setDescription}=useContext(NotesContext)

  const[updateTitle,setUpdateTitle]=useState(item.title)
  const[updateDesc,setUpdateDesc]=useState(item.note)
  function handleCloseDiv(){
    if(updateTitle=="" && updateDesc==""){
       notes.forEach((newItem)=>{
        if(newItem.id==item.id)
        setUpdateTitle(newItem.title)
        setUpdateDesc(newItem.note)
      })
    }
    else{
      dispatch(updateNote({id:item.id,title:updateTitle,note:updateDesc}))
       const updatedNotes=notes.map((newNote)=>{
        if(newNote.id==item.id){
          return{...newNote,title:updateTitle,note:updateDesc}
        }else{
          return newNote;
        }
       })
       localStorage.setItem("notes", JSON.stringify(updatedNotes));
      setUpdateTitle("");
      setDescription("");
    }

    handleClose();

  }
  useEffect(() => {
    setUpdateTitle(item.title);
    setUpdateDesc(item.note);
  }, [item]);
  useEffect(() => {
    setUpdateTitle(item.title);
    setUpdateDesc(item.note);
  }, []);
  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal-div"
        
      >
        <div className="add-note">
       <form className="note-form"  >
            <input 
             className="form-input"
              type="text" 
              placeholder="take"
              value={updateTitle}
              onChange={(e)=>setUpdateTitle(e.target.value)}
            />
            <textarea 
            className="textarea"
             rows="10"
              cols="40"
              value={updateDesc}
              onChange={(e)=>setUpdateDesc(e.target.value)}
              placeholder="Take a Note...."/>
           
           <Button variant="contained" onClick={handleCloseDiv}>Update</Button>
            
        </form>
        </div>
      </Modal>
    </div>
  );
}