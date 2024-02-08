/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    courses: []
};

const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        addCourses: (state, action) => {
            state.courses = action.payload;
        },
    },
});

export const { addCourses } = coursesSlice.actions;

export default coursesSlice.reducer;
