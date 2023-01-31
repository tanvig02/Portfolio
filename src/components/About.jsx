import React from 'react'

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-[rgb(10,25,47)] text-white'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About
                    </p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-10 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi. I'm Tanvi, nice to meet you please take a look around.</p>
                </div>
                <div>
                    <p>I am passainate about building excellent software that improves the live of those around me. I am ambitious and enthusiastic learner who is enhancing her knowledge to approach new challenges with an open mind.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
