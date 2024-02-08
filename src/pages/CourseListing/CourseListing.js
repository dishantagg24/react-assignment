import React, { useEffect, useState } from 'react'
import courseModel from '../../components/CourseModel/CourseModel'
import { SearchBox } from '../../components/SearchBox/SearchBox'
import { CardList } from '../../components/CardList/CardList'
import { useDispatch, useSelector } from 'react-redux'
import { addCourses } from '../../redux/courses/coursesSlice'
export const CourseListing = () => {
    const courses = useSelector((state) => state.courses.courses);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addCourses(courseModel));
    }, [])

    const [searchField, setSearchField] = useState('');

    const filteredcourses = courses?.filter(course =>
        course.name.toLowerCase().includes(searchField.toLowerCase()) || course.instructor.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
        <>
            <div>
                <h1 className='text-center text-4xl font-bold m-3'>Courses</h1>
                <SearchBox placeholder="search courses" handleChange={(e) => setSearchField(e.target.value)} />
                <CardList courses={filteredcourses} />
            </div>
        </>

    )
}
