import React from 'react';
import styled from 'styled-components';

import Header from './components/header';
import MainMenu from './components/mainMenu';
import Hero from './components/hero';

import Home from './pages/home';

import dustBg from './assets/images/dust_bg.png';

const AppContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  background: url(${dustBg});
`;

const App = () => (
  <AppContent className="App">
    <div>
      <Header />

      <MainMenu />

      <Hero />
    </div>

    <Content>
      <Home />
    </Content>
  </AppContent>
);

export default App;
