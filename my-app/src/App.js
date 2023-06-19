import React from 'react';
import './App.css';
import {Main} from './pages/Main';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Discover } from './pages/Discover';
import { Join } from './pages/Join';



function App() {
  return ( 
    <div className="App">
      <Router>
      <Routes>
              <Route path='/join' element={<Join />} />
              <Route path='/discover' element={<Discover />} />
              <Route path='/' element={<Main />} />        
      </Routes>
    </Router>

    </div>
  );
}


export default App;
