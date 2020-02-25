import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './Navbar/Navbar';
import { Footer } from './Footer/Footer';
import { Routing } from './Routing';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
