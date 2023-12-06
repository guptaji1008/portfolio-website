import React from 'react'
import { Helmet } from 'react-helmet-async'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
    title: "Welcome to Aman's portfolio",
    description: "Aman Gupta is a certified web developer (specialized in MERN technologies.)",
    keywords: "portfolio, web development, MERN"
}

export default Meta
