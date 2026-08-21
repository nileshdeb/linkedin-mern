import React, { useContext, useState } from 'react'
import logo2 from '../assets/logo2.png'
import { CiSearch } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import dp from '../assets/emptyprofile.png'
import { userDataContext } from '../context/UserContext';


function Nav() {
    let [activeSearch, setActiveSearch] = useState(false)
    let { userData, setUserData } = useContext(userDataContext)
    return (
        <div className='w-full h-[80px] bg-[white] fixed top-0 shadow-lg flex justify-between md:justify-around items-center px-[10px]'>
            <div className='flex justify-center items-center gap-[10px]'>

                <div onClick={() => {
                    setActiveSearch(false)
                }}>
                    <img src={logo2} alt="" className='w-[50px]' />
                </div>

                {!activeSearch && <div><CiSearch className='w-[25px] h-[25px] text-gray-600 lg:hidden' onClick={() => setActiveSearch(true)} /></div>}

                <form className={`w-[190px] lg:w-[350px] h-[40px] bg-[#eceade] lg:flex items-center gap-[10px] px-[10px] py-[5px] rounded-md ${!activeSearch ? "hidden" : "flex"} `}>
                    <div><CiSearch className='w-[25px] h-[25px] text-gray-600' /></div>
                    <input type="text" className='w-[80%] h-full bg-transparent outline-none border-0' placeholder='search users...' />
                </form>
            </div>

            <div className='flex justify-center items-center gap-[20px]'>

                <div className='w-[300px] min-h-[300px] bg-white shadow-lg absolute top-[85px] rounded-lg 
                flex flex-col items-center p-[20px] gap-[20px]'>
                    <div className='w-[70px] h-[70px] rounded-full overflow-hidden'>
                        <img src={dp} alt="" className='w-full h-full' />
                    </div>
                    <div className='text-[19px] font-semibold text-gray-700'>{`${userData.firstName} ${userData.lastName}`}</div>
                    <button className='w-[100%] h-[40px] rounded-full border-2 border-[#2dc0ff] text-[#2dc0ff]'>View Profile</button>

                    <div className='w-full h-[1px] bg-gray-600'></div>

                    <div className='flex  w-full items-center justify-start gap-[10px]'>
                        <FaUserGroup className='w-[23px] h-[23px] text-gray-600' />
                        <div>My Networks</div>
                    </div>

                    <button className='w-[100%] h-[40px] rounded-full border-2 border-[#e83508] text-[#e83508]'>Sign Out</button>

                </div>
                <div className='lg:flex flex-col items-center justify-center hidden'>
                    <IoMdHome className='w-[23px] h-[23px] text-gray-600 ' />
                    <div>Home</div>
                </div >
                <div className='lg:flex flex-col items-center justify-center hidden'>
                    <FaUserGroup className='w-[23px] h-[23px] text-gray-600' />
                    <div>My Networks</div>
                </div>
                <div className='flex flex-col items-center justify-center text-gray-600 '>
                    <IoNotifications className='w-[23px] h-[23px] text-gray-600' />
                    <div className='hidden md:block'>Notifications</div>
                </div>

                <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
                    <img src={dp} alt="" className='w-full h-full' />
                </div>


            </div>



        </div>
    )
}

export default Nav