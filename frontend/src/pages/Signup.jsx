import {React,useState} from 'react'
import logo from "../assets/logo.svg"
import {useNavigate} from "react-router-dom"
function Signup() {
  let [show,setShow]=useState(false)
  let navigate=useNavigate()

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
        <input type="email" placeholder='email' required className='w-[100%] h-[50px] border-2 border-gray-600  text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md' />

        <div  className='w-[100%] h-[50px] border-2 border-gray-600  text-gray-800 text-[18px]  rounded-md relative '>
          <input type={show?"text":"password"} placeholder='password' required className='w-full h-full border-none text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md' />
          <span className='absolute right-[20px] top-[10px] text-[#24b2ff] cursor-pointer font-semibold ' onClick={()=>setShow(prev=>!prev)}>{show?"hidden":"show"}</span>
        </div>
        
        <button className='w-[100%] h-[50px] rounded-full bg-[#24b2ff] mt-[40px] text-white'>Sign Up</button>
        <p className='text-center cursor-pointer' onClick={()=>navigate("/login")}>Already have and account ? <span className='text-[#056293]' >Sign In</span></p>
        
        
      </form>
    </div>
  )
}

export default Signup