import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import './App.css';
import Film from './cinema/Films';
import Navigation from './cinema/Navigation';
import Footer from './cinema/Footer';

// const React = require('react');
// const { useState } = require('react');
// const { Routes, Route } = require('react-router-dom');
// require('./App.css');
// const Film = require('./cinema/Films');
// const Navigation = require('./cinema/Navigation');
// const Footer = require('./cinema/Footer');

import Detail from './cinema/Detail';
import Contact from './cinema/Contact';
import News from './cinema/News';
import About from './cinema/About';

// const Detail = require('./cinema/Detail');
// const Contact = require('./cinema/Contact');
// const News = require('./cinema/News');
// const About = require('./cinema/About');


function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
        <Navigation setDarkMode={setDarkMode} darkMode={darkMode} />
        <Routes>
          <Route path='/' element={<Film/>}></Route>
          <Route path='/detail/:id' element={<Detail/>}></Route>
          <Route path='/news' element={<News/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}
export default App;

// module.exports = App;