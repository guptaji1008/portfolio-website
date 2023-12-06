import React from 'react'

const Footer = ({className}) => {
  return (
    <div className={'flex md:flex-row flex-col items-center md:justify-between md:space-y-0 space-y-1 md:px-10 ' + className}>
      <p className='text-white text-opacity-80 text-xl animate-pulse'>+91 7991326619</p>
      <p className='text-white text-opacity-80 text-xl animate-pulse'>gupta.aman27121998@gmail.com</p>
      <p className='text-white text-opacity-80 text-xl animate-pulse'>www.linkedin.com/in/aman-gupta-16864626b</p>
    </div>
  )
}

export default Footer
