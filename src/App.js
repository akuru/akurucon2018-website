import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

import Header from './components/header';
import MainMenu from './components/mainMenu';
import Hero from './components/hero';
import Footer from './components/footer';

import Home from './pages/home';

import dustBg from './assets/images/dust_bg.png';
import kundaliya from './assets/images/kundaliya.svg';

const AppContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  background: url(${dustBg});
  position: relative;
`;

const ContentWrapper = styled.div`
  max-width: 920px;
  margin: auto;
  padding: 0px 38px;
  position: relative;
  z-index: 10;
`;

const KundaliyaParallax = styled(Parallax)`
  position: absolute;
  z-index: 50;
`;

const KundaliyaParallax1 = KundaliyaParallax.extend`
  top: 25%;
  width: 190px;
  left: 15%;
`;

const KundaliyaParallax2 = KundaliyaParallax.extend`
  top: 50%;
  width: 190px;
  right: 15%;
`;

const KundaliyaParallax3 = KundaliyaParallax.extend`
  top: 75%;
  width: 190px;
  left: 20%;
`;

const Kundaliya = styled.img`
  opacity: 0.4;
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
          <ParallaxProvider>
            <ContentWrapper>
              <Home />

              <Footer />
            </ContentWrapper>

            <KundaliyaParallax1
              offsetXMin="30%"
              offsetXMax="-60%"
              offsetYMin="-180"
              slowerScrollRate
              tag="figure"
            >
              <Kundaliya src={kundaliya} alt="Kundaliya" />
            </KundaliyaParallax1>

            <KundaliyaParallax2
              offsetXMin="-60%"
              offsetXMax="30%"
              offsetYMin="-180"
              slowerScrollRate
              tag="figure"
            >
              <Kundaliya src={kundaliya} alt="Kundaliya" />
            </KundaliyaParallax2>

            <KundaliyaParallax3
              offsetXMin="30%"
              offsetXMax="-60%"
              offsetYMin="-180"
              slowerScrollRate
              tag="figure"
            >
              <Kundaliya src={kundaliya} alt="Kundaliya" />
            </KundaliyaParallax3>
          </ParallaxProvider>
        </Content>
      </AppContent>
    );
  }
}

export default App;
