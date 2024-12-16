import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Success from './Pages/Success';
import './App.css'
import About from './components/About';
const App = () => {
  return (
    <>
      <Router>
        <Routes>
         <Route path='/' element={<Home/>}></Route>
          <Route path='/success' element={<Success/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Toaster/>
      </Router>
    </>
  )
}

export default App