import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <div className="App-content">
        <div className="App-left">
          <Navbar />
        </div>
        <div className="App-right">
          <About />
          <Projects />
          <Contact />
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
