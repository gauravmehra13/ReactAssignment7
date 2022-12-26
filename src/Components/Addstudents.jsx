import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { AddStudent } from '../features/StudentSlice';
import Header from './Header'; import { useNavigate } from 'react-router-dom';
import Student from '../Data';

function Addstudents() {

    const UserList = useSelector((state) => state.student)
    console.log(UserList);

    // const navigate=useNavigation();
    const navigate = useNavigate(); const dispatch = useDispatch();
    const [Name, setName] = useState('')
    const [Age, setAge] = useState('')
    const [Course, setCourse] = useState('')
    const [Batch, setBatch] = useState('')



    const formHandler = (e) => {
        e.preventDefault();
        if (Name && Age && Course && Batch) {
            dispatch(AddStudent({
                id: UserList[UserList.length - 1].id + 1,
                Name,
                Age,
                Course,
                Batch,
            }
            ))
            setName('');
            setAge('');
            setCourse('');
            setBatch('');
            navigate('/student')
        }
    }

    return (
        <>
            <Header />
            <form onSubmit={formHandler}>
                <label htmlFor='Name'>Name</label>
                <input type='text' value={Name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor='Age'>Age</label>
                <input type='text' value={Age} onChange={(e) => setAge(e.target.value)} />

                <label htmlFor='Course'>Course</label>
                <input type='text' value={Course} onChange={(e) => setCourse(e.target.value)} />

                <label htmlFor='Batch'>Batch</label>
                <input type='text' value={Batch} onChange={(e) => setBatch(e.target.value)} />

                <input type='submit' value='submit' />

            </form>
        </>
    )
}



export default Addstudents