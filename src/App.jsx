import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Container from './components/layouts/Container'
import NavBar from './components/layouts/NavBar'
import Footer from './components/layouts/Footer'
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';


import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass='min_height'>
        <Routes>
          <Route path='/' exact element={ <Home /> } />

          <Route path='/projects' element={ <Projects /> } />

          <Route path='/company' element={ <Company /> } />

          <Route path='/contact' element={ <Contact /> } />

          <Route path='/newproject' element={ <NewProject /> } />

          <Route path='/project/:id' exact element={ <Project /> } />
       </Routes>
      </Container>
      
      <Footer />
    </Router>
  );
}

export default App;
