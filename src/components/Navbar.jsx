import React from 'react'
import imagelogo from '../assets/quiz.svg'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full bg-gray-800 text-white flex justify-between items-center p-4'>
            <div className='flex items-center'>
                <span><img height={30} width={30} src={imagelogo} alt="logo" /></span>
                <span className='md:text-lg font-bold text-sm '>Quiz Game</span>
            </div>
            <div className='flex gap-1 md:gap-5'>
                <div className='hover:text-blue-300 text-sm cursor-pointer ' onClick={(e)=>navigate('/')}>Home</div>
                <div className='hover:text-blue-300 text-sm cursor-pointer ' onClick={(e)=>navigate('/categories')}>Categories</div>
                <div className='hover:text-blue-300 text-sm cursor-pointer '>Leaderboard</div>
            </div>
        </div>
    )
}

export default Navbar;