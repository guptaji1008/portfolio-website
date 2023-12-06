import React from 'react'
import Navbar from '../components/Navbar'
import Meta from '../components/meta'

const Contact = () => {
  return (
    <div className='contact-back-image'>
      <Meta title="Contacts" />
      <div className='min-h-screen flex flex-col space-y-40'>
        <Navbar activeLink="Contact" />
        <div className='flex flex-col items-center space-y-6'>
          <p className='text-white text-xl exp-font'><span className='exp-font text-2xl font-semibold'>Mobile No.:&nbsp;</span>+91 7991326619</p>
          <p className='text-white text-xl exp-font'><span className='exp-font text-2xl font-semibold'>Email Address :&nbsp;</span>gupta.aman27121998@gmail.com</p>
          <p className='text-white text-xl exp-font'><span className='exp-font text-2xl font-semibold'>linkedin :&nbsp;</span>www.linkedin.com/in/aman-gupta-16864626b</p>
          <p className='text-white text-3xl exp-font font-semibold'>Feel free to contact 😊</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
