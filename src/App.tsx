import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
