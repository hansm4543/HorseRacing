import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

//import './App.css';


import Main from './Pages/Main'
import DetailedView from './Pages/DetailedView'
import AddHorseRaceForm from './Pages/AddHorseRaceForm';
import HomePage from './Pages/HomePage';
import LogIn from './Pages/LogIn';
import Register from './Pages/Register';
import NavBar from './component/NavBar';

function App() {
  return (
    <BrowserRouter>
      
    <NavBar/>
      <Routes>
    
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/login" element={<LogIn/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/main" element={<Main/>}/>
        <Route exact path="/addHorseRaceForm" element={<AddHorseRaceForm/>}/>
        <Route exact path='/horseRace/:horseRaceId' element={<DetailedView/>}/>

      </Routes>
    
        


    </BrowserRouter>
  );
}

export default App;