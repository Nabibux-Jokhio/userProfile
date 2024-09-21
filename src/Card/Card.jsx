import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";

export default function Card({ data }) {
    const { id, background, description, name, profession, profileImage, profileLink } = data

    return (
        <div className='shadow-lg  rounded-md relative '>
            <div className=''>
                <img className='w-full h-48 object-cover rounded-t-md ' src={background} alt="" />
            </div>
            <div className='absolute top-36 left-44 sm:left-36 md:left-28 lg:left-32 border-2 border-black bg-white  rounded-full '>
                <img className='p-1 w-20 h-20 object-contain rounded-full' src={profileImage || '/assets/images/notFound.jpg'} onError={(e) => { e.target.onerror = null; e.target.src = '/assets/images/notFound.jpg'; }} alt="" />
            </div>
            <div className='flex flex-col items-center justify-center mt-10 '>
                <h2 className='mt-6 font-semibold text-lg '>{name}</h2>
                <p className='mt-4 text-gray-400' >{profession}</p>
                <p className='mt-4 text-center  '>{description}</p>
                <p className='mt-4 flex gap-8'>
                    <a href={`${profileLink}`}><FaFacebook /></a>
                    <a href=""><FaLinkedin /></a>
                    <FaInstagram />
                    <LuTwitter />
                </p>
            </div>
            <div className='flex items-center justify-center'>
                <Link to={`/detailPage/${id}`} className='my-4 py-2 px-6 bg-[#3D7793] text-white rounded-sm'>view profile</Link>
            </div>
        </div>
    )
}
