import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div>
      <div name='home' className="w-full h-screen bg-[#0a192f] ">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full">
            <p className='text-pink-600'>Hi, my name is</p>
            <p className='text-white text-4xl sm:text-6xl font-bold'>Tanvi Gaikwad</p>
            <p className='text-gray-600 text-4xl sm:text-5xl font-semibold'>I'm a Computer Engineering Student</p>
            <p className='text-gray-400 max-w-[700px] py-4 left-0'>Currently pursuing computer science engineering with coding knowledge in different programming languages. I am ambitious and enthusiastic learner who is enhancing her knowledge to approach new challenges with an open mind.</p>
            <div>
                <button className='text-white border-2 px-6 py-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work <HiArrowNarrowRight className='ml-3 hover:rotate-90 duration-300'/> </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
