import React from 'react'
import Navbar from './Navbar'
import {useNavigate} from 'react-router-dom'
import Footer from './Footer'

const Homescreen = () => {
    const navigate = useNavigate();

    const startQuiz = () => {
        navigate('/instructions');
    }

    return (
        <>
            <Navbar />
            <div className='w-full p-4 text-center flex items-center justify-center mt-40'>
                <div className=' flex flex-col items-center justify-center'>
                    <h1 className='text-3xl text-black font-bold mb-3'>Welcome to the Quiz Game</h1>
                    <p className='mb-5 text-black'>Test your knowledge and have fun!</p>
                    <button onClick={startQuiz} className='start-quiz-button px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-800 hover:cursor-pointer'>Start Quiz</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Homescreen;


