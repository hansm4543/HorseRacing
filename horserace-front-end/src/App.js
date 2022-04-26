import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

//import './App.css';


import Main from './Pages/Main'
import DetailedView from './Pages/DetailedView'
import AddHorseRaceForm from './component/AddHorseRaceForm';

function App() {
  return (
    <BrowserRouter>
      

      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="/addHorseRaceForm" element={<AddHorseRaceForm/>}/>
        <Route exact path='/horseRace/:horseRaceId' element={<DetailedView/>}/>
      </Routes>

        


    </BrowserRouter>
  );
}

export default App;