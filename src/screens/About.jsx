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
            <p className='text-center text-white md:text-lg exp-font'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quae ea sunt doloremque tenetur aliquid voluptatibus nisi illo molestias. Eum soluta amet sunt officia ut quasi. Dolor excepturi sint sed eius eaque similique iusto corrupti illo, numquam cumque velit quo quaerat, at, eos ducimus deleniti veritatis recusandae odit? Odio reiciendis adipisci, eum inventore cupiditate fugit cum hic consequatur quam, fuga neque commodi nam. Repellendus aperiam quam itaque cupiditate eveniet excepturi neque? Dolores enim quis, molestias alias possimus ab voluptatem nemo autem eveniet quisquam et nisi amet labore! Aspernatur voluptatibus mollitia, veritatis rerum voluptatem pariatur id recusandae commodi fugit culpa quae consectetur beatae cum tempora excepturi ipsum veniam reprehenderit cupiditate officia quasi adipisci. Ut cum obcaecati expedita beatae.</p>
          </div>
      </div>
      </div>
    </div>
  )
}

export default About

