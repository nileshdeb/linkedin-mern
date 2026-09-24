import React,{useContext, useState} from 'react'
import Nav from '../components/Nav'
import dp from '../assets/emptyprofile.png'
import { GoPlus } from "react-icons/go";
import { MdOutlineCameraAlt } from "react-icons/md";
import { userDataContext } from '../context/UserContext';
import { FaPencilAlt } from "react-icons/fa";
import EditProfile from '../components/EditProfile'

function Home() {
  let{userData,setUserData,edit,setEdit}=useContext(userDataContext)
  
  return (
    <div className='w-full min-h-[100vh] bg-[#eceade] pt-[100px] flex items-start justify-center gap-[20px] px-[20px] 
    flex-col lg:flex-row'>
      {edit && <EditProfile/>}
      
      <Nav />
      <div className='w-full lg:w-[25%] min-h-[200px] bg-[white] shadow-lg
      rounded-lg p-[10px] relative'>
        <div className='w-[100%] h-[100px] bg-gray-400 rounded cursor-pointer'>
          <img src={userData.coverImage || ""} alt="" className='w-full' />
          <MdOutlineCameraAlt className='absolute right-[20px] top-[20px] w-[25px] h-[25px] text-gray-800 cursor-pointer'onClick={()=>setEdit(true)}
          />

        </div>
        <div className='w-[70px] h-[70px] rounded-full overflow-hidden items-center justify-center absolute top-[65px] left-[35px] cursor-pointer'onClick={()=>setEdit(true)}>
          <img src={userData.profileImage || dp} alt="" className='h-full' />
          
        </div>
        <div className='w-[20px] h-[20px] bg-[#17c1ff] absolute top-[105px] left-[90px] rounded-full flex justify-center items-center'>
            <GoPlus className='text-white cursor-pointer'/>
          </div>

        <div className='mt-[30px] pl-[20px] text-[19px] font-semibold text-gray-700'>
          <div>{`${userData.firstName} ${userData.lastName}`}</div> 
          <div className='text-[16px] text-gray-500'>{userData.headline || ""}</div>
          <div className='text-[16px] text-gray-500'>{`${userData.location}`}</div>
        </div>  
        <button className='w-[100%] h-[40px] rounded-full border-2 border-[#2dc0ff] text-[#2dc0ff] my-[20px] 
        flex items-center justify-center gap-[30px]' onClick={()=>setEdit(true)}>Edit Profile <FaPencilAlt /></button>
 
      </div>
      <div className='w-full lg:w-[50%] min-h-[200px] bg-[white] shadow-lg'>

      </div>
      <div className='w-full lg:w-[25%] min-h-[200px] bg-[white] shadow-lg'>

      </div>
    </div>
  )
}

export default Home