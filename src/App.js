import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Jsxfile/Navbar'
import { Footer } from './Jsxfile/Footer'
import { Signin } from './Jsxfile/Signin'
import { Homepage } from './Jsxfile/Homepage'
import { Developer } from './Jsxfile/Developer'
import { Signup } from './Jsxfile/Signup' 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/home' element={<Homepage/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>  {/* Updated route */}
          <Route path='/developer' element={<Developer/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;