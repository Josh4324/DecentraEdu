import { Course } from "./Course";
import { courseList, CourseListWrapper } from "./CourseList";

export const LatestCourses = () => {
  return (
    <section className="bg-[#4169E1] p-8 lg:p-20 lg:pb-80 relative">
      <div className="container">
        <h2 className="text-white font-semibold text-3xl lg:text-5xl text-center">
          Our Latest Courses
        </h2>
      </div>
      <CourseListWrapper className="container lg:absolute">
        {courseList.slice(0, 3).map((course) => (
          <Course {...course} key={course.image} />
        ))}
      </CourseListWrapper>
    </section>
  );
};
