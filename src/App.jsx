import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Ticket from './Nav/Ticket';
import Schedule from './Nav/Schedule';
import Setting from './Nav/Setting';
import About from './Nav/About';

const App = () => {
  return (
    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/ticket" element={<Ticket/>} />
      <Route path="/Schedule" element={<Schedule/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Setting" element={<Setting/>} />
    </Routes>
  );
};

export default App;
