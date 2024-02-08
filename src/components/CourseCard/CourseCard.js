import React from 'react';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import './CourseCard.css';

export const CourseCard = ({ course, markCompleted }) => {
    const { name, instructor, thumbnail, dueDate, completed, courseId } = course;

    return (
        <div className="course-card">
            <img src={thumbnail} alt={name} />
            <div className="card-container-bottom">
                <h2>{name}</h2>
                <p>Instructor: {instructor}</p>
                <p>Due Date: {dueDate}</p>
                <ProgressBar completed={completed} />
                {!completed && (
                    <button onClick={() => markCompleted(course.id)}>Mark as Completed</button>
                )}
            </div>
        </div>
    );
};
