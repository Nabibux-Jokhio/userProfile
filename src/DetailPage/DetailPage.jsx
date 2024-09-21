import React from 'react'
import { useParams } from 'react-router-dom'
import { Data } from '../utils/Data/Data'
import { FaFacebook, FaInstagram,FaLinkedin } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";

export default function DetailPage() {
  const {id} = useParams()

  const userData = Data.find((item) => item.id == id);
  
  const {description, name, profession, profileImage, profileLink } = userData
  
  
  return (
    <div className='flex justify-center items-center h-[100vh]'>
    <div className='w-[40%] bg-[url(/assets/images/bg-img-detail.png)] bg-cover bg-center  flex bg-red-100 pt-10 rounded-lg'>
       <div className='w-[50%] pl-1'>
        <img className='w-[250px] h-[330px] '    src={profileImage || '/assets/images/notFound.jpg' } onError={(e) => { e.target.onerror = null; e.target.src = '/assets/images/notFound.jpg'; }}  alt="" />
       </div>
       <div className='ml-6 w-[50%] '>
       <div className='mt-10 '>
        <h2 className='text-3xl font-semibold'>{name}</h2>
        <p className='text-[#D5B0CF] font-semibold'>{profession}</p>
       </div>
       <div className='mt-6'>
        <p>{description}</p>
       </div>
       <div className='mt-6 mb-4'>
       <p className=' flex gap-8'>
                    <a href={`${profileLink}`}><FaFacebook /></a>
                    <a href=""><FaLinkedin /></a>
                    <FaInstagram />
                    <LuTwitter />
                </p>
       </div>
       <button className='mt-4 mb-10 py-2 px-6 bg-[#BB8DB7] text-white rounded-sm'>Buy me a coffee</button>
       </div>
    </div>
    </div>
  )
}
