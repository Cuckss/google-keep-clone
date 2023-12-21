import { createSlice } from "@reduxjs/toolkit";
const createNoteSlice=createSlice({
    name:"createNote",
    initialState:[],
    reducers:{
        addNote:(state,action)=>{
               return[...state,action.payload]
        },
        removeNote:(state,action)=>{
            return state.filter((item)=>item.id!=action.payload)
        },
        updateNote:(state,action)=>{
            return state.map((item)=>{
                if(item.id==action.payload.id){
                    return{...item,title:action.payload.title,note:action.payload.note}
                }else{
                    return item;
                }
            })
        }
    }              
})
export const {addNote,removeNote,updateNote}=createNoteSlice.actions;
export default createNoteSlice.reducer;