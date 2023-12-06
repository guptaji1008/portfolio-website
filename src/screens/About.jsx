import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div className="about-back-image">
      <div className='min-h-screen flex flex-col space-y-7'>
        <Navbar activeLink="About" />
        <p className='text-3xl text-white text-center font-bold mt-5 mb-6'>ABOUT ME</p>
        <div className='bg-transparent lg:px-40 px-10 py-2 flex md:flex-row flex-col md:items-start items-center md:justify-between md:space-y-0 space-y-10 mb-7'>
          <div className='md:w-5/12 w-full'>
            <img className='rounded-3xl w-full object-cover drop-shadow-2xl' src="/profile.JPG" alt="" />
          </div>
          <div className='md:w-1/2 w-full'>
            <p className='text-center text-white md:text-lg exp-font'>Myself Aman Kumar Gupta. I live in Varanasi. Iam a mechanical engineer, and I have completed my graduation from IMS Engineering College in year 2022. After completion of my graduation, I was preparing for GATE/Govt.exams, but then after sometimes, I dropped preparation and with some elder advice, I entered in IT sector field, then after some exploration, I found WEB DEVELOPMENT which looks quite interesting field. Coding was quite tough for me initially, but then slowly I realized that getting bugs/error in very common in web development field. I started from ZERO and Iam capable of making a full fledged web application, I have learnt many concept and Iam still learning. Iam enjoying web development and Iam looking my career as a FULL STACK WEB DEVELOPER.</p>
          </div>
      </div>
      </div>
    </div>
  )
}

export default About

