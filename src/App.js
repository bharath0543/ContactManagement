import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VerticalNavigation from './VerticalNavigation';
import ContactPage from './ContactPage';
import ChartPage from './ChartPage';



const App = () => {
  return (
    <div>
    <Router>
      <div>
        <VerticalNavigation />
        <Routes>
          <Route path="/" element={<ContactPage/>} ></Route>
          <Route path="/chart" element={<ChartPage/>} ></Route>
        </Routes>
      </div>
    </Router>
    
    </div>
  );
};

export default App;
