import { useState } from 'react';
import cvImage from './assets/cv.png';
import './App.css'
import EducationInfo from './components/EductionInfo';
import Header from './components/Header';
import GeneralInfo from './components/GeneralInfo';
import WorkExperinceInfo from './components/ExperienceInfo';



function App() {
  return (
    <>
      <Header />
      <GeneralInfo />
      <EducationInfo />
      <WorkExperinceInfo />
    </>
  )
}

export default App;