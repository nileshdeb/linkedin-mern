import React, { useContext, useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { userDataContext } from '../context/UserContext';
import dp from '../assets/emptyprofile.png'
import { GoPlus } from "react-icons/go";
import { MdOutlineCameraAlt } from "react-icons/md";


function EditProfile({ }) {
  let { userData, setUserData, edit, setEdit } = useContext(userDataContext)
  let [firstName, setFirstName] = useState(userData.firstName || "")
  let [lastName, setLastName] = useState(userData.lastName || "")
  let [userName, setUserName] = useState(userData.userName || "")
  let [headline, setHeadline] = useState(userData.headline || "")
  let [location, setLocation] = useState(userData.location || "")
  let [gender, setGender] = useState(userData.gender || "")
  let [skills, setSkills] = useState(userData.skills || [])
  let [newSkills, setNewSkills] = useState("")
  let [education, setEducation] = useState(userData.education || [])
  let [newEducation, setNewEducation] = useState("")

  function addSkill(e){
    e.preventDefault()
    if(newSkills && !skills.includes(newSkills)){
      setSkills([...skills,newSkills])
    }
    setNewSkills("")
  }

  function removeSkill(skill){
    if(skills.includes(skill)){
      setSkills(skills.filter((s)=>s!==skill))
    }
  }
  return (
    <div className='w-full h-[100vh] fixed top-0  z-[100] flex justify-center items-center'>
      <div className=' w-full h-full bg-black opacity-[0.5] absolute'></div>
      <div className='w-[90%] max-w-[500px] h-[600px] bg-white relative z-[200] shadow-lg rounded-lg p-[10px] overflow-auto'>
        <div className='absolute top-[20px] right-[20px] cursor-pointer ' onClick={() => setEdit(false)}>
          <RxCross1 className='w-[25px] h-[25px] text-gray-800 font-bold' />
        </div>

        <div className='w-full h-[150px] bg-gray-500 rounded-lg mt-[40px]'>
          <img src="" alt="" className='w-full ' />
          <MdOutlineCameraAlt className='absolute right-[20px] top-[60px] w-[25px] h-[25px] text-white cursor-pointer' onClick={() => setEdit(true)}
          />

        </div>
        <div className='w-[80px] h-[80px] rounded-full overflow-hidden absolute top-[150px] ml-[20px]'>
          <img src={dp} alt="" className='w-full h-full' />
        </div>
        <div className='w-[20px] h-[20px] bg-[#17c1ff] absolute top-[200px] left-[90px] rounded-full flex justify-center items-center'>
          <GoPlus className='text-white cursor-pointer' />
        </div>
        <div className='w-full flex flex-col items-center justify-center gap-[20px] mt-[50px]' >
          <input type="text" placeholder='firstName' className='w-full h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[18px] border-2 rounded-lg' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <input type="text" placeholder='lastName' className='w-full h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[18px] border-2 rounded-lg' value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <input type="text" placeholder='userName' className='w-full h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[18px] border-2 rounded-lg' value={userName} onChange={(e) => setUserName(e.target.value)} />
          <input type="text" placeholder='headline' className='w-full h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[18px] border-2 rounded-lg' value={headline} onChange={(e) => setHeadline(e.target.value)} />
          <input type="text" placeholder='location' className='w-full h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[18px] border-2 rounded-lg' value={location} onChange={(e) => setLocation(e.target.value)} />
          <input type="text" placeholder='gender (male/female/other)' className='w-full h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[18px] border-2 rounded-lg' value={gender} onChange={(e) => setGender(e.target.value)} />

          <div className='w-full p-[10px] border-2 border-gray-600 flex flex-col gap-[10px]'>
            <h1 className='text-[19px] font-semibold'>Skills</h1>
            {skills && <div className='flex flex-col gap-[10px]'>
              {skills.map((skill, index) => (
                <div key={index} className='w-full h-[40px] border-[1px] bprder-gray-600 bg-gray-200 p-[10px] rounded-lg flex justify-between items-center'><span>{skill}</span><RxCross1 className='w-[20px] h-[20px] text-gray-800 font-bold cursor-pointer' onClick={()=>removeSkill(skill)}/></div>
              ))}
            </div>}
            <div className='flex flex-col gap-[10px] items-start' >
              <input type="text" placeholder='add new skill' value={newSkills} onChange={(e) => setNewSkills(e.target.value)} className='w-full h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[16px] border-2 rounded-lg'/>
              <button className='w-[100%] h-[40px] rounded-full border-2 border-[#2dc0ff] text-[#2dc0ff]' onClick={addSkill}>Add</button>
            </div>

          </div>
        </div>



      </div>


    </div>
  )
}

export default EditProfile