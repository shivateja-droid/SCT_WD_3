import React, { useState , useEffect } from 'react'
import multiquestions from '../data/mulques'
import { useNavigate } from 'react-router-dom';

const Multipleques = () => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const storedOptions = localStorage.getItem('selectedOptions');
        const storedIndex = localStorage.getItem('questionIndex');
        const storedScore = localStorage.getItem('score');
        if (storedOptions) {
            setSelectedOption(JSON.parse(storedOptions));
        }
        if (storedIndex) {
            setQuestionIndex(parseInt(storedIndex, 10));
        }
        if (storedScore) {
            setScore(parseInt(storedScore, 10));
        }
    }, []);

    const saveToLS = () => {
        localStorage.setItem('selectedOptions', JSON.stringify(selectedOption));
        localStorage.setItem('questionIndex', questionIndex);
        localStorage.setItem('score', score);
    };

      const handleOptionChange = (e) => {
        const value = e.target.value;
        setSelectedOption((prev) => {
            if (prev.includes(value)) {
                return prev.filter((option) => option !== value);
            } else {
                return [...prev, value];
            }
        });
        saveToLS();
    };

    const handleNextQuestion = () => {
        if (selectedOption.length === 0) {
            alert("Please select an option before proceeding.");
            return;
        }
        if (JSON.stringify(selectedOption.sort()) === JSON.stringify(multiquestions[questionIndex].correctAnswers.sort())) {
            setScore(score + 1);
        }
        setSelectedOption([]);
        if (questionIndex < multiquestions.length - 1) {
            setQuestionIndex(questionIndex + 1);
            saveToLS();
        }
        else{
            handleSubmitQuiz();
        }
    };
    const handleSubmitQuiz = () => {
        if (!selectedOption) {
            alert("Please select an option before submitting.");
            return;
        }
        if(selectedOption){
            let confirm = window.confirm("Are you sure you want to submit the quiz?");
            if (!confirm) {
                return;
            }
        }
        let finalScore = score;
        if (JSON.stringify(selectedOption.sort()) === JSON.stringify(multiquestions[questionIndex].correctAnswers.sort())) {
            finalScore = score + 1;
        }
        saveToLS();
        navigate('/scores', { state: { score: finalScore } });
        localStorage.removeItem('selectedOptions');
        localStorage.removeItem('questionIndex');
        localStorage.removeItem('score');
    };


    return (
        <div>
            <div className='w-full bg-gray-200 p-4 mb-3 text-center'>
                <h1 className='text-3xl text-black font-bold mb-3'>Quiz Screen</h1>
                <p className='mb-5 text-black'>Answer the questions below:</p>
            </div>
            <div className='quiz-question w-full text-center'>

                <h2 className='text-2xl text-black font-bold mb-2 '>Question {questionIndex + 1}/{multiquestions.length}</h2>
                <p id='question' className='text-black mb-2 '>{multiquestions[questionIndex].question}</p>
                <div className='quiz-options px-2'>
                    {multiquestions[questionIndex].options.map((option, id) => (
                        <button
                            key={id}
                            className={`quiz-option w-full md:w-1/2 mx-auto border-2 p-2 flex justify-start mb-3 rounded-xl gap-1 ${selectedOption.includes(option) ? 'border-blue-500' : ''}`}
                        >
                            <input
                                type="checkbox"
                                value={option}
                                name="quiz"
                                id={`option${id + 1}`}
                                checked={selectedOption.includes(option)}
                                onChange={handleOptionChange}
                                className='cursor-pointer'
                            />
                            {option}
                        </button>
                    ))}
                </div>
                <div className='w-full md:w-1/2 mx-auto flex justify-around mt-5'>
                  <button onClick={handleSubmitQuiz} className='submit-quiz-button bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600'>Submit quiz</button>
                    <button onClick={handleNextQuestion} className='next-btn bg-green-500 text-white p-2 rounded-lg hover:bg-green-600'>Next Question</button>
                </div>
            </div>
        </div>
    );
}

export default Multipleques;
