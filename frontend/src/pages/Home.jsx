import React from 'react'
import Nav from '../components/Nav'
import dp from '../assets/emptyprofile.png'
import { GoPlus } from "react-icons/go";
import { MdOutlineCameraAlt } from "react-icons/md";



function Home() {
  return (
    <div className='w-full min-h-[100vh] bg-[#eceade] pt-[100px] flex items-start justify-center gap-[20px] px-[20px] 
    flex-col lg:flex-row'>
      <Nav />
      <div className='w-full lg:w-[25%] min-h-[200px] bg-[white] shadow-lg
      rounded-lg p-[10px] relative'>
        <div className='w-[100%] h-[100px] bg-gray-400 rounded '>
          <img src="" alt="" className='w-full' />
          <MdOutlineCameraAlt className='absolute right-[20px] top-[20px] w-[25px] h-[25px] text-gray-800'/>

        </div>
        <div className='w-[70px] h-[70px] rounded-full overflow-hidden items-center justify-center relative top-[-45px] left-[30px]'>
          <img src={dp} alt="" className='h-full' />
          
        </div>
        <div className='w-[20px] h-[20px] bg-[#17c1ff] absolute top-[105px] left-[90px] rounded-full flex justify-center items-center'>
            <GoPlus />
          </div>

      </div>
      <div className='w-full lg:w-[50%] min-h-[200px] bg-[white] shadow-lg'>

      </div>
      <div className='w-full lg:w-[25%] min-h-[200px] bg-[white] shadow-lg'>

      </div>
    </div>
  )
}

export default Home