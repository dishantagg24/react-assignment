import { useState } from "react";
import { CourseCard } from "../../components/CourseCard/CourseCard";
import './StudentDashboard.css';
import { SearchBox } from "../../components/SearchBox/SearchBox";

export const StudentDashboard = () => {

    const [enrolledCourses, setEnrolledCourses] = useState([
        {
            id: 1,
            name: 'Introduction to React Native',
            instructor: 'John Doe',
            thumbnail: 'https://miro.medium.com/v2/resize:fit:1024/0*dhDZY5VlvfPB5WtZ.png',
            dueDate: '12-03-2024',
            completed: false,
            courseId: '1'
        },
        {
            id: 2,
            name: 'Introduction to Cloud',
            instructor: 'Jeff Bezos',
            thumbnail: 'https://miro.medium.com/v2/resize:fit:640/1*ngkHgQq7ij1NBNr62er3zA.png',
            dueDate: '12-09-2024',
            completed: true,
            courseId: '7'
        },
        {
            id: 3,
            name: 'Introduction to Data Science',
            instructor: 'Steve Harrington',
            thumbnail: 'https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg',
            dueDate: '06-10-2024',
            completed: false,
            courseId: '8'
        },
    ]);

    const markCourseCompleted = (id) => {
        setEnrolledCourses((prevCourses) =>
            prevCourses.map((course) =>
                course.id === id ? { ...course, completed: true } : course
            )
        );
    };
    const [searchField, setSearchField] = useState('');

    const filteredcourses = enrolledCourses?.filter(course =>
        course.name.toLowerCase().includes(searchField.toLowerCase()) || course.instructor.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
        <>
            <div>
                <h1 className='text-center text-4xl font-bold m-3'>My Courses</h1>
                <SearchBox placeholder="search courses" handleChange={(e) => setSearchField(e.target.value)} />
                <div className="course-list">
                    {filteredcourses.map((course) => (
                        <CourseCard
                            key={course.id}
                            course={course}
                            markCompleted={markCourseCompleted}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};