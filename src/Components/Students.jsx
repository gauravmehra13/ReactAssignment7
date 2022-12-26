import React from 'react'
import './../App.css'
import { Link } from 'react-router-dom'
import Addstudents from './Addstudents'
import Header from './Header'
import ShowData from './ShowData'

function Students() {
    return (<div className='App'>
        <Header />
        <Link to="/Addstudent" className='linktoadd'>ADD Student</Link>
        <ShowData />
    </div>)
}


export default Students