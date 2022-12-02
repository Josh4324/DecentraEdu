import styled from "styled-components";
import { Course } from "./Course";

export const courseList = [
  {
    image: "/images/image1.png",
    title: "R Programming: Advanced Analytics In R For Data Science",
    votes: 200,
  },
  {
    image: "/images/image2.png",
    title: "R Programming: Advanced Analytics In R For Data Science",
    votes: 200,
  },
  {
    image: "/images/image3.png",
    title: "R Programming: Advanced Analytics In R For Data Science",
    votes: 200,
  },
  {
    image: "/images/image4.png",
    title: "R Programming: Advanced Analytics In R For Data Science",
    votes: 200,
  },
  {
    image: "/images/image5.png",
    title: "R Programming: Advanced Analytics In R For Data Science",
    votes: 200,
  },
  {
    image: "/images/image6.png",
    title: "R Programming: Advanced Analytics In R For Data Science",
    votes: 200,
  },
];

export const CourseList = () => {
  return (
    <CourseListWrapper className="container">
      {courseList.map((course) => (
        <Course {...course} key={course.image} />
      ))}
    </CourseListWrapper>
  );
};

export const CourseListWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`;
