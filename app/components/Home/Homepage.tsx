import React from 'react'
import Hero from './Hero'
import Cuisines from './Cuisines'

function Homepage() {
  return (
    <div className='bg-orange-100 w-full dark:bg-gray-800'>
      <Hero />
      <Cuisines />
    </div>
  )
}

export default Homepage