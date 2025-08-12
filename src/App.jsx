import { useState } from 'react'
import './App.css'
import Homescreen from './components/Homescreen'
import Quizscreen from './components/Quizscreen'
import Multipleques from './components/Multipleques'
import Scorescreen from './components/Scorescreen'
import Instructions from './components/Instructions'
import  Categories  from './components/categories'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/quiz1" element={<Quizscreen />} />
        <Route path="/quiz2" element={<Multipleques />} />
        <Route path="/scores" element={<Scorescreen />} />
      </Routes>
    </Router>
  )
}
export default App
