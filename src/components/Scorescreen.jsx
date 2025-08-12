import React from 'react';
import Navbar from './Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import questions from '../data/quiz';
import Footer from './Footer'; 

const Scorescreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const score = location.state?.score ?? 0;
  return (
    <>
      <Navbar />
      <div className='w-full bg-gray-200 p-4 text-center'>
        <h1 className='text-3xl text-black font-bold mb-3'>Your Score</h1>
        <p className='text-black mb-5'>You scored {score} out of {questions.length}!</p>
        <button onClick={() => navigate('/instructions')} className='retry-btn bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600'>Retry Quiz</button>
        <button onClick={() => navigate('/')} className='home-btn bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 ml-3'>Back to Home</button>
      </div>
      <Footer />
    </>
  );
};

export default Scorescreen;