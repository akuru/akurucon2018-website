import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Header from './components/header';
import MainMenu from './components/mainMenu';
import Hero from './components/hero';
import Footer from './components/footer';

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

const ContentWrapper = styled.div`
  max-width: 920px;
  margin: auto;
  padding: 0px 38px;
`;

class App extends PureComponent {
  componentDidMount() {
    // Get the navbar
    const navbar = document.getElementById('navbar');

    // Get the offset position of the navbar
    const sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position.
    // Remove "sticky" when you leave the scroll position
    const stickNavbar = () => {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    };

    // When the user scrolls the page, execute stickNavbar
    window.onscroll = () => {
      stickNavbar();
    };

    stickNavbar();
  }

  render() {
    return (
      <AppContent className="App">
        <div>
          <Header />

          <MainMenu />

          <Hero />
        </div>

        <Content>
          <ContentWrapper>
            <Home />

            <Footer />
          </ContentWrapper>
        </Content>
      </AppContent>
    );
  }
}

export default App;
