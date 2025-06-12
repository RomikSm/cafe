import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Contact from './components/Contact/Contact';
import Calculator from './components/Calculator/Calculator';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="page-content">
        <About />
        <Menu />
        <Contact />
        <Calculator />
      </div>
    </div>
  );
}

export default App;
