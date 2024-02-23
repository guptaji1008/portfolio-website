import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import resume from '../Credential/MyResume4.pdf'
import Meta from "../components/Meta";

const Home = () => {
  return (
    <div className="home-back-image">
      <Meta />
      <div className="min-h-screen flex flex-col justify-between">
        <Navbar activeLink="Home" />
        <div className="bg-transparent lg:px-40 px-10 py-2  flex flex-col items-center justify-center space-y-2">
          <p className="text-white text-3xl">Hi, myself</p>
          <p className="text-white text-5xl text-center">Aman Kumar Gupta</p>
          <p className="text-white text-xl text-shadow text-center exp-font">
            Certified Web developer, specialized in MERN (Mongodb, Express, React,
            Node) technogies.
          </p>
          <div className="flex items-center justify-center pb-5">
            <a href={resume} className='bg-pink-600 text-2xl py-3 px-5 text-white rounded-xl' target="_blank">Download Resume</a>
          </div>
        </div>
        <Footer className="py-3" />
      </div>
    </div>
  );
};

export default Home;
