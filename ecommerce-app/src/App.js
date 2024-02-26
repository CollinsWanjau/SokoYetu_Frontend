// Importing necessary modules from React and react-router-dom
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

// Importing custom components
import Layout from './components/Layout';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import OurStore from './Pages/OurStore';

// Defining the main App component
function App() {
return (
  <>
  {/* Wrapping the entire application in BrowserRouter */}
  <BrowserRouter>
  <Routes>
    {/* Defining the main layout */}
    <Route path='/' element={<Layout />}>
      {/* Route for Home page */}
      <Route index element={<Home />}/>
      {/* Route for about page */}
      <Route path='about' element={<About />}/>
      {/* Route for contact page */}
      <Route path='contact' element={<Contact />}/>
      <Route path='store' element={<OurStore />}/>
    </Route>
  </Routes>
  </BrowserRouter>
  </>
);
}

// Exporting the App component as the default export
export default App;
