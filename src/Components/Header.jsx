import React from 'react'
import Home from './Home'
import ContactUs from './ContactUs'
import Students from './Students'
import { NavLink } from 'react-router-dom'
import './../App.css'

function Header() 
{return (
<nav>
  <NavLink to='/'className={({ isActive }) =>(isActive ? "active-class" : "not-active-class")}>Home</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <NavLink to='/student' className={({ isActive }) =>(isActive ? "active-class" : "not-active-class")}>Student</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <NavLink to='/Contact' className={({ isActive }) =>(isActive ? "active-class" : "not-active-class")}>ContactUs</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </nav>)}
  
  export default Header