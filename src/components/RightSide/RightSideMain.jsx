import React from 'react';
import './RightSide.css';
import { Routes, Route } from "react-router-dom";
// PAGES
import MyExercisesPage from './RightSidePages/Myexercises/MyExercisesPage';
import HomePage from './RightSidePages/Homepage/HomePage';
import Mystats from './RightSidePages/MyStats/Mystats';


function RightSideMain() {
  return (
    <div className='RightSideMain'>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MyExercises" element={<MyExercisesPage />} />
        <Route path="/Mystats" element={<Mystats />} />
      </Routes>

    </div>
  )
}

export default RightSideMain