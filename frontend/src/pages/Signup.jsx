import React from 'react'
import logo from "../assets/logo.svg"
function Signup() {
  return (
    <div className='w-full h-screen bg-[white] flex flex-col items-center justify-start'>
      <div className='pt-[10px] pb-[30px] px-[30px] lg:pt-[15px] lg:pb-[35px] lg:px-[35px] w-full'>
        <img src={logo} alt="LinkedIn" className='w-[135px]' />
      </div>
      <form className='w-[90%] max-w-[400px] h-[600px] md:shadow-xl flex flex-col justify-center gap-[10px] p-[15px]'>
        <h1 className='text-gray-800 text-[30px] font-semibold mb-[30px]'>Sign Up</h1>
        <input type="text" placeholder='firstname' required className='w-[100%] h-[50px] border-2 border-gray-600  text-gray-800 text-[18px]  px-[20px] py-[10px] rounded-md' />
        <input type="text" placeholder='lastname' required className='w-[100%] h-[50px] border-2 border-gray-600  text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md' />
        <input type="text" placeholder='username' required className='w-[100%] h-[50px] border-2 border-gray-600  text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md' />
        <input type="text" placeholder='email' required className='w-[100%] h-[50px] border-2 border-gray-600  text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md' />
        <input type="text" placeholder='password' required className='w-[100%] h-[50px] border-2 border-gray-600  text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md' />
        <button className='w-[100%] h-[50px] rounded-full bg-[#1dc9fd] mt-[30px] text-white'>Sign Up</button>
        
        
      </form>
    </div>
  )
}

export default Signup