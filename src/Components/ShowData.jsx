import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { studentUpdated } from '../features/StudentSlice';
import './../App.css'


function ShowData() {
    const navigate=useNavigate();
    const data = useSelector((state) => state.student)
    // console.log(data);

    return (
<>
<br />
<h1>Data:</h1>

<table id='tabledata' border="1" width="70%" cellpadding="2" cellspacing="2">
        <thead>
            <tr>
              <td className="t-head">Name</td>
              <td className="t-head">Age</td>
              <td className="t-head">Course</td>
              <td className="t-head">Batch</td>
              <td className="t-head">Change</td>
            </tr>
          </thead>

        {
        data.map((item, index) => {
        return (
            
        <tr key={index}>
            
            <td>{ item.Name }</td>
            <td>{ item.Age }</td>
            <td>{ item.Course }</td>
            <td>{ item.Batch }</td>
            
        
            
        <td>   
            <button onClick={()=>{
             const id=item.id;
             navigate('/editstudent',{state:id});
            //console.log(id);

        }}>Edit</button>

        </td>
        </tr>)
        
        })}

  </table>

   </>
        
        )}
        
        
        export default ShowData