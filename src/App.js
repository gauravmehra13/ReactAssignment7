import React from 'react'
import Home from './Components/Home'
import ContactUs from './Components/ContactUs'
import Students from './Components/Students'
import { Route, Routes } from 'react-router-dom'
import Addstudents from './Components/Addstudents'
import EditData from './Components/EditData'

function App() {

  return (
  
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/student' element={<Students />} />
      <Route path='/Contact' element={<ContactUs />} />
      <Route path='/Addstudent' element={<Addstudents />} /><Route path='/editstudent' element={<EditData />} />
      <Route path='/editstudent' element={<EditData/>} />
            </Routes>)

} 

export default App