import Head from "next/head";
import { CourseList } from "./CourseList";
import { LatestCourses } from "./LatestCourses";

export default function Landing({ children }) {
  return (
    <div className="max-w-screen mx-auto">
      <Head>
        <title>DecentraEDU</title>
        <meta
          name="description"
          content="Find, join, and create virtual events with your web3 frens"
        />
      </Head>
      <section className="bg-hero-color py-12">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span>Connecting Learners and </span>
              <span className="text-indigo-600">Teachers</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Find, join, learn and create courses with your web3 frens!
            </p>

            <button className="mt-8 w-21 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
              Get Started
            </button>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/images/man-studying-online.png" alt="landing" />
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="content-center grid max-w-screen-xl px-7.5 py-5 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="grid grid-rows-3 grid-flow-col lg:col-span-4">
            <div className="row-span-3">
              <img src="/images/Group1.png" alt="special courses" />
            </div>
            <div className="col-span-2">
              <h3 className="font-extrabold text-2xl">1000+</h3>
            </div>
            <div className="row-span-2 col-span-2">
              <p className="text-below-hero">Special Courses</p>
            </div>
          </div>
          <div className="grid grid-rows-3 grid-flow-col lg:col-span-4">
            <div className="row-span-3">
              <img src="/images/Group2.png" alt="special courses" />
            </div>
            <div className="col-span-2">
              <h3 className="font-extrabold text-2xl">5000+</h3>
            </div>
            <div className="row-span-2 col-span-2">
              <p className="text-below-hero">Special Courses</p>
            </div>
          </div>
          <div className="grid grid-rows-3 grid-flow-col lg:col-span-4">
            <div className="row-span-3">
              <img src="/images/Group3.png" alt="special courses" />
            </div>
            <div className="col-span-2">
              <h3 className="font-extrabold text-2xl">2000+</h3>
            </div>
            <div className="row-span-2 col-span-2">
              <p className="text-below-hero">Special Courses</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container m-auto max-w-screen-xl px-7.5 py-5 flex flex-col items-center">
          <h2 className="text-2xl font-extrabold text-center">
            Our Top Courses
          </h2>
          <CourseList />
          <button className="bg-[#4169E1] mx-auto mt-16 px-6 py-3 text-white rounded-lg">
            Explore All Courses
          </button>
        </div>
        <div className="container flex flex-col lg:flex-row items-center mx-auto my-28 justify-between">
          <img
            src="/images/laptops.png"
            className="w-4/5 lg:w-2/5 h-[200px] mb-8 lg:mb-0"
          />
          <div className="w-4/5 lg:w-1/2 lg:pr-24">
            <h1 className="text-3xl lg:text-5xl font-medium">
              Students Feedback
            </h1>
            <div className="my-12">
              <h3 className="text-2xl mb-2">Claire Fox</h3>
              <p className="text-[#4169E1] text-base">Student</p>
            </div>
            <p className="text-[#6B6B6B]">
              “The test of a good teacher is not how many questions he can ask
              his pupils that they will answer readily, but how many questions
              he inspires them to ask him which he finds it hard to answer. The
              test of a good teacher is not how many questions he can ask his
              pupils that they will answer readily, but how many questions he
              inspires them to ask him which he finds it hard to answer.”
            </p>
          </div>
        </div>
        <LatestCourses />
        <div className="flex justify-center">
          <button className="bg-[#4169E1] mx-auto mt-10 lg:mt-80 px-6 py-3 text-white rounded-lg">
            Read More{" "}
          </button>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center bg-[#4169E1] mx-auto my-32 container rounded-2xl px-8 lg:px-16 py-10 justify-between">
          <div className="lg:max-w-[60%]">
            <h3 className="text-white text-3xl font-semibold mb-4">
              Ready To Join...
            </h3>
            <p className="text-white text-base">
              Find,Join, learn and create courses with your web3 friends,
              Find,Join, learn and create courses with your web3 friends!
            </p>
          </div>
          <button className="bg-white text-[#4169E1] px-6 py-3 rounded-lg mt-10 lg:mt-0">
            Read More{" "}
          </button>
        </div>
      </section>
      <section className="py-12">{children}</section>
    </div>
  );
}
