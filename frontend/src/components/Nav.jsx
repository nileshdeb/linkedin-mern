import React from 'react'
import logo2 from '../assets/logo2.png'
import { CiSearch } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import dp from '../assets/emptyprofile.png'



function Nav() {
    return (
        <div className='w-full h-[80px] bg-[white] fixed top-0 shadow-lg flex justify-around items-center'>
            <div className='flex justify-center items-center gap-[10px]'>

                <div>
                    <img src={logo2} alt="" className='w-[50px]' />
                </div>
                <form className='w-[350px] h-[40px] bg-[#eceade] flex items-center gap-[10px] px-[10px] py-[5px] rounded-md'>
                    <div><CiSearch className='w-[25px] h-[25px] text-gray-600'/></div>
                    <input type="text" className='w-[80%] h-full bg-transparent outline-none border-0' placeholder='search users...' />
                </form>
            </div>

            <div className='flex justify-center items-center gap-[20px]'>
                <div className='flex flex-col items-center justify-center'>
                    <IoMdHome />
                    <div>Home</div>
                </div >
                <div className='flex flex-col items-center justify-center'>
                    <FaUserGroup />
                <div>My Networks</div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <IoNotifications />
                <div>Notifications</div>
                </div>

                <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
                    <img src={dp} alt="" className='w-full h-full'/>
                </div>

            
            </div>



        </div>
    )
}

export default Nav