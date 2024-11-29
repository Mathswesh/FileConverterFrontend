import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Jsxfile/Navbar'
import { Footer } from './Jsxfile/Footer'
import { Signin } from './Jsxfile/Signin'
import { Homepage } from './Jsxfile/Homepage'
import { Developer } from './Jsxfile/Developer'
import { Signup } from './Jsxfile/Signup' 
import { PrivacyAndPolicy } from './Jsxfile/PrivacyAndPolicy';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/home' element={<Homepage/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path='/developer' element={<Developer/>}/>
          <Route path="/privacyandpolicy" element={<PrivacyAndPolicy />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;