import React,{useState} from "react";
import "./style.css"
import { useSelector } from "react-redux";
const Header=({setFilterSearch,filterSearch})=>{
         const notes=useSelector((state)=>state.createNote)
         function scrollToTop(){
                window.scrollTo({
                  top: 0,
                  behavior: "smooth" // Optional: smooth scrolling animation
              });
              }
   return(
    <header className="navbar">
     
            <img src="https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png" onClick={scrollToTop} alt="nav-logo"/>
            <h2 onClick={scrollToTop}>Google Keep</h2>
            <input type="text" placeholder="Search you Notes Here..." className="nav-searchbar" onChange={(e)=>setFilterSearch(e.target.value)}/>
    </header>
   )
}
export default Header;