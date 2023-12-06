import React from "react";
import Navbar from "../components/Navbar";
import { GiSpiralArrow } from "react-icons/gi";
import mernCert from '../Credential/mernCert.pdf'
import Meta from "../components/Meta";

const Experience = () => {
  return (
    <div className="exp-back-image">
      <Meta title="Experience" />
        <div className="min-h-screen flex flex-col space-y-5">
        <Navbar activeLink="Exp" />
        <p className="text-white text-3xl font-bold text-center">
          My Experience
        </p>
        <div className="md:px-40 px-10 md:space-y-5 space-y-10">
          <div>
            <p className="text-white text-3xl font-semibold md:my-4 my-9">Experience :</p>
            <div className="flex items-baseline space-x-5">
              <GiSpiralArrow className="-rotate-45 text-yellow-500 text-xl" />
              <div className="space-y-2">
                <p className="text-white text-3xl exp-font">
                    WEB DEVELOPMENT TRAINEE
                </p>
                <p className="text-white text-2xl exp-font">AlmaBetter</p>
                <div className="flex items-center space-x-24">
                  <p className="text-white text-lg exp-font">
                    04-04-2023 / 01-12-2023
                  </p>
                  <p className="text-white text-lg exp-font">
                    Bangalore (Remote)
                  </p>
                </div>
                <div className="flex lg:flex-row flex-col lg:items-center items-start lg:space-x-5">
                  <p className="text-white md:text-lg exp-font font-semibold">
                    Skills Learnt :
                  </p>
                  <p className="text-white md:text-lg exp-font">
                    HTML/CSS, JavaScript, React, Express, Node, Mongodb, MERN
                    stack web application building.
                  </p>
                </div>
                <div className="md:space-y-2 space-y-5">
                <div className="flex items-baseline space-x-5">
                  <GiSpiralArrow className="-rotate-45 text-yellow-400" />
                  <p className="text-white md:text-lg exp-font">Acquired proficiency in both <strong className="exp-font md:text-xl text-lg">front-end</strong> and <strong className="exp-font md:text-xl text-lg">back-end</strong> programming.</p>
                </div>
                <div className="flex items-baseline space-x-5">
                  <GiSpiralArrow className="-rotate-45 text-yellow-400" />
                  <p className="text-white md:text-lg exp-font">Utilized <strong className="exp-font md:text-xl text-lg">React</strong> for front-end development and <strong className="exp-font md:text-xl text-lg">Redux</strong> for state management.</p>
                </div>
                <div className="flex items-baseline space-x-5">
                  <GiSpiralArrow className="-rotate-45 text-yellow-400" />
                  <p className="text-white md:text-lg exp-font">Developed skills in working with <strong className="exp-font md:text-xl text-lg">Node js</strong> for backend development.</p>
                </div>
                <div className="flex items-baseline space-x-5">
                  <GiSpiralArrow className="-rotate-45 text-yellow-400" />
                  <p className="text-white md:text-lg exp-font">Mastered best practices for user <strong className="exp-font md:text-xl text-lg">authentication</strong> and <strong className="exp-font md:text-xl text-lg">data encryption</strong>.</p>
                </div>
                <div className="flex items-baseline space-x-5">
                  <GiSpiralArrow className="-rotate-45 text-yellow-400" />
                  <p className="text-white md:text-lg exp-font"><strong className="exp-font md:text-xl text-lg">Focused on creating high-quality</strong> and secure web applications through learning and practice.</p>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center pb-5">
            <a href={mernCert} className='bg-pink-600 text-2xl py-3 px-5 text-white rounded-xl' target="_blank">Show Credentials</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
