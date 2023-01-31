import React from 'react'
import NF from "../assets/netflix.jpg"
import CA from '../assets/chatapp.jpg'
import RB from '../assets/resume-builder.png'

const Work = () => {
  return (
    <div name="work" className='w-full md:h-screen bg-[rgb(10,25,47)] text-white '>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl border-b-4 border-pink-600 inline '>Work</p>
          <p className='py-6'>Check out some of my recent work </p>
        </div>

          {/* Container */}
        <div className='grid sm:grid-cols-3 md:grid-col-3 gap-4'>


          {/* Grid Item */}
          <div style={{backgroundImage: `url(${RB})`}}  className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-black tracking-wide'>Resume Builder</span>
                <div className='pt-8 text-center'>
                  <p className='font-bold '>MERN Stack Project</p>
                    <a href="https://fair-blue-lemur-veil.cyclic.app/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    {/* <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a> */}
                </div>
            </div>
          </div>

          {/* Grid Item */}
          <div style={{backgroundImage: `url(${CA})`}}  className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-lg font-bold text-black tracking-wide'>Chat APP</span>
                <div className='pt-8 text-center'>
                <p className='font-bold '>HTML, Tailwind CSS, FireBase</p>
                    <a href="https://tanvi-chat-app.netlify.app/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    {/* <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a> */}
                </div>
            </div>
          </div>

          {/* Grid Item */}
          <div style={{backgroundImage: `url(${NF})`}}  className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-lg font-bold text-black tracking-wide '> Netflix Clone</span>
                <div className='pt-8 text-center'>
                <p className='font-bold '>HTML, CSS and JavaScript</p>
                    <a href="https://tanvi-netflix-clone.netlify.app/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    {/* <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a> */}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
