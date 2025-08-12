import React from 'react'
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Instructions = () => {
  const navigate = useNavigate();
  const startQuiz1 = () => {
    navigate('/quiz1');
  }
  const startQuiz2 = () => {
    navigate('/quiz2');
  }


  return (
    <div className='w-full overflow-hidden'>
      <Navbar />
      <h2 className='text-2xl font-bold mb-4 w-full md:w-1/2 mx-auto flex justify-center md:justify-start mt-10'>Instructions</h2>
      <div className='instructions-list flex flex-col items-center justify-start px-1  mt-10 mb-10 w-full md:w-1/2 mx-auto'>
        <p className='flex justify-start w-full'>1. There are 2 types of quizzes available.</p>
        <p className='flex justify-start w-full'>2. Each quiz has a different format.</p>
        <p className='flex justify-start w-full'>3. Read each question carefully.</p>
        <p className='flex justify-start w-full'>4. Select the correct answer from the options provided.</p>
        <p className='flex justify-start w-full'>5. Click "Next Question" to proceed.</p>
        <p className='flex justify-start w-full'>6. Your score will be displayed at the end.</p>
      </div>
      <div className=' w-full md:w-1/2 mx-auto flex flex-col max-md:justify-center max-md:items-center space-y-3'>
        <button onClick={startQuiz1} className='start-quiz-button px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700 hover:cursor-pointer w-1/2 flex justify-center max-md:text-sm'>Start Quiz for Single correct answer</button>
        <button onClick={startQuiz2} className='start-quiz-button px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-800 hover:cursor-pointer w-1/2 flex justify-center max-md:text-sm'>Start Quiz for Multiple correct answers</button>
      </div>
      <Footer />
    </div>
  )
}

export default Instructions