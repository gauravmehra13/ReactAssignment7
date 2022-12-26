import { createSlice } from "@reduxjs/toolkit";
import Student from './../Data'

const StudentSlice = createSlice({

    name: 'students',
    initialState: Student,
    reducers: {
        AddStudent: (state, action) => {
            state.push(action.payload);
        },

        studentUpdated: (state, action) => {
            const { id, Name, Age, Course, Batch } = action.payload;
            const exsitingStudent = state.find((user) => user.id === id)
            if (exsitingStudent) {
                exsitingStudent.Name = Name;
                exsitingStudent.Age = Age; 
                exsitingStudent.Course = Course;
                exsitingStudent.Batch = Batch;
            }
        }
    }
})


export default StudentSlice.reducer;
export const { AddStudent, studentUpdated } = StudentSlice.actions;