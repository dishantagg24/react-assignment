import { Route, Routes } from "react-router-dom";
import { StudentDashboard } from "../pages/StudentDashboard/StudentDashboard";
import { CourseListing } from "../pages/CourseListing/CourseListing";
import { CourseDetails } from "../pages/CourseDetails/CourseDetails";
import { Home } from "../pages/Home/Home";

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/mycourses' element={<StudentDashboard />} />
                <Route path='/courses' element={<CourseListing />} />
                <Route path='/courses/:id' element={<CourseDetails />} />
            </Routes>
        </>
    )
}

export default AllRoutes;