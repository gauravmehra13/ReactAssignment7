import React, { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { studentUpdated } from '../features/StudentSlice';
import Header from './Header';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function EditData() {

    const { state } = useLocation();
    const editId=state;
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const data = useSelector((state) => state.student.filter((item) => { return item.id === editId }).map((item) => item))
    const sName = (data[0].Name);
    const sAge = (data[0].Age);
    const sCourse = (data[0].Course);
    const sBatch = (data[0].Batch);

    const [Name, setName] = useState(sName)
    const [Age, setAge] = useState(sAge)
    const [Course, setCourse] = useState(sCourse)
    const [Batch, setBatch] = useState(sBatch)

    const handleSubmit = (e) => {

        e.preventDefault();
        if (Name && Age && Course && Batch) {
            dispatch(studentUpdated({ id: editId, Name, Age, Course, Batch }))

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
            <form onSubmit={handleSubmit}>
                <label htmlFor='Name'>Name</label>
                <input type='text' value={Name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor='Age'>Age</label><input type='text' value={Age} onChange={(e) => setAge(e.target.value)} />
                <label htmlFor='Course'>Course</label>
                <input type='text' value={Course} onChange={(e) => setCourse(e.target.value)} />
                <label htmlFor='Batch'>Batch</label>
                <input type='text' value={Batch} onChange={(e) => setBatch(e.target.value)} />
                <input type='submit' value='Done' />


            </form>
        </>)
}

export default EditData