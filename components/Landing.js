import Head from "next/head";

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
      <section className="py-12">{children}</section>
    </div>
  );
}
