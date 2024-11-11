import logo from './logo.svg';
import './App.css';
import { Navbar } from './Jsxfile/Navbar'
import { Footer } from './Jsxfile/Footer'
import { Signin } from './Jsxfile/Signin'
import { Homepage } from './Jsxfile/Homepage'
import { Developer } from './Jsxfile/Developer'; 
import { Route , Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/home' element={<Homepage/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path='/developer' element={<Developer/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
