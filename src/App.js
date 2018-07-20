import React from 'react';
import './App.css';

import Header from './components/header';
import MainMenu from './components/mainMenu';
import Hero from './components/hero';

const App = () => (
  <div className="App">
    <Header />

    <MainMenu />

    <Hero />
  </div>
);

export default App;
