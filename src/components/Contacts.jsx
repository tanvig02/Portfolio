import React from 'react'

const Contacts = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[rgb(10,25,47)] flex justify-center items-center p-4'>
        <form action="" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 text-white'>
                <p className='text-4xl font-bold border-b-4 border-pink-600 text-white inline'>Contact</p>
                <p className='py-4'>Submit the form below or email - tanvigaikwad2002@gmail.com</p>
            </div>
            <input className='p-2 bg-[rgb(174,193,223)]' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[rgb(174,193,223)]' type="email" placeholder='Email' name='email' />
            <textarea className='p-2 bg-[rgb(174,193,223)]' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 items-center py-2 px-2 my-4 mx-auto flex hover:bg-pink-600 hover:border-pink-600'>Lets Collaborate</button>
        </form>
      
    </div>
  )
}

export default Contacts
