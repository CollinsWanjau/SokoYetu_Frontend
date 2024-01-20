import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';

function App() {
return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
    </Route>
  </Routes>
  </BrowserRouter>
  </>
);
}

export default App;
