import { configureStore } from "@reduxjs/toolkit";
import createNoteSlice from "./slices/createNoteSlice";
const store=configureStore({
    reducer:{
       createNote:createNoteSlice, 
    }
})
export default store;