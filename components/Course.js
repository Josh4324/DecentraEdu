import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Course = ({ title, image, votes }) => {
  return (
    <CourseWrapper className="tile ">
      <img src={image} alt={title} className="banner" />
      <div>
        <p>{title}</p>
        <div className="footer">
          <div className="icons">
            <img src="/images/upvote.svg" />
            <small>{votes}</small>
            <img src="/images/downvote.svg" />
          </div>
          <div className="icons">
            <Link href={"/"}>
              <a>Learn More</a>
            </Link>
            <img src="/images/arrow-right.svg" />
          </div>
        </div>
      </div>
    </CourseWrapper>
  );
};

const CourseWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 5px rgba(40, 40, 40, 0.13);
  border-radius: 8px;
  width: 31%;
  @media screen and (max-width: 960px) {
    width: 48%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  margin-top: 56px;
  img.banner {
    width: 100%;
  }
  & > div {
    padding: 32px 18px;
    width: 100%;
  }
  p {
    font-weight: 700;
    font-size: 20px;
    color: #333333;
    margin-bottom: 35px;
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .icons {
    display: flex;
    align-items: center;

    small {
      margin: 0 10.25px;
    }
  }
  a {
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    margin-right: 10.25px;
    color: #4169e1;
  }
`;
