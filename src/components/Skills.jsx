import React from 'react'
import Java from "../assets/java.png"
import CPP from "../assets/cpp_logo.png"
import node from "../assets/node-express.png"
import react from "../assets/reactjs.png"
import JS from "../assets/javascript.png"
import MD from "../assets/MongoDB.jpg"

const Skills = () => {
  return (
    <div className='w-full h-screen text-white bg-[rgb(10,25,47)]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='inline text-4xl border-b-4 border-pink-600 font-bold'>Skills</p>
            <p className='py-4'> These are the technologies i have studied</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
            <div className=' shadow-md shadow-[black] py-2 my-4 hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={Java} alt="" />
              <p>JAVA</p>
            </div>
            <div className=' shadow-md shadow-[black] py-2 my-4 hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={CPP} alt="" />
              <p>CPP</p>
            </div>
            <div className=' shadow-md shadow-[black] py-2 my-4 hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={react} alt="" />
              <p>React</p>
            </div>
            <div className=' shadow-md shadow-[black] py-2 my-4 hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={node} alt="" />
              <p>Node Js and Express Js</p>
            </div>
            <div className=' shadow-md shadow-[black] py-2 my-4 hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={JS} alt="" />
              <p>JS</p>
            </div>
            <div className=' shadow-md shadow-[black] py-2 my-4 hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={MD} alt="" />
              <p>MongoDB</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
