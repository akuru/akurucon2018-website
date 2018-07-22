import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';
import { withRouter } from 'react-router-dom';
import AnimateHeight from 'react-animate-height';

import heroBg from '../assets/images/hero_bg.jpg';

const HeroContainer = styled.div`
  overflow: hidden;
  background: url(${heroBg}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  padding: 60px 10px;
`;

const HeroContent = styled.div`
  color: #fce1c9;
  text-align: center;
  line-height: 0.35rem;

  @media screen and (max-width: 680px) {
    line-height: 1.4rem;
  }
`;

const HeroText1 = styled.p`
  font-family: Galle;
`;

const HeroText2 = styled.p`
  font-family: Noto Sans Tamil;
  font-weight: 100;
`;

const HeroText3 = styled.p`
  font-family: Noto Sans;
  font-weight: 100;
`;

const HeroText4 = styled.p`
  font-family: Galle;
  font-size: 1.4rem;
  margin-top: 33px;
  margin-bottom: 40px;
`;

const HeroText5 = styled.p`
  font-family: Galle;
  font-size: 1.5rem;
`;

const HeroText6 = styled.p`
  font-family: Noto Sans Tamil UI;
  font-size: 1.5rem;
  font-weight: 100;
`;

const HeroText7 = styled.p`
  font-family: Noto Sans;
  font-weight: 100;
  font-size: 1.5rem;
`;

const HeroButton = styled.a`
  text-decoration: none;
  color: #351544;
  background-color: #fbe0c8;
  padding: 10px 60px;
  border-radius: 10px;
  display: inline-block;
  margin-top: 33px;
  transition: all 0.5s;
  line-height: 1.5rem;

  &:hover {
    color: #fff;
    background-color: #351544;
  }

  .english-register {
    font-family: Noto Sans SemiCondensed;
    font-weight: bold;
  }

  .sinhala-register {
    font-family: Noto Sans Sinhala UI SemiCondensed;
    font-weight: 800;
  }

  .tamil-register {
    font-family: Noto Sans Tamil UI SemiCondensed;
    font-weight: bold;
  }
`;

class Hero extends PureComponent {
  constructor(props) {
    super(props);
    const { location } = props;

    this.state = {
      heroHeight: location.pathname === '/' ? 'auto' : 0
    };
  }

  componentWillReceiveProps(nextProps) {
    const { location } = nextProps;

    if (location.pathname === '/') {
      this.setState({
        heroHeight: 'auto'
      });
    } else {
      this.setState({
        heroHeight: 0
      });
    }
  }

  render() {
    const { heroHeight } = this.state;

    return (
      <div>
        <AnimateHeight
          duration={500}
          height={heroHeight} // see props documentation bellow
        >
          <HeroContainer className="hero">
            <HeroContent>
              <HeroText1>අක්ෂර-රූපකරණය සහ අක්ෂර රටා නිර්මාණකරනය පිළිබඳ පළමු සමුළුව</HeroText1>
              <HeroText2>எழுத்தழகியல் மற்றும் எழுத்துருவியல் பற்றிய மாநாடு, கொழும்பு</HeroText2>
              <HeroText3>Typography conference in Colombo</HeroText3>

              <HeroText4>෴</HeroText4>

              <HeroText5>ලන්දේසි මුද්‍රණ හා අක්ෂර-රූපකරණය තේමාවෙන්…</HeroText5>
              <HeroText6>ஒல்லாந்தர் அச்சுக்கலை பற்றிய கருப்பொருளில்..</HeroText6>
              <HeroText7>Celebrating typography of the Dutch Press in Ceylon…</HeroText7>

              <Parallax className="custom-class" offsetYMax={50} offsetYMin={-50} slowerScrollRate>
                <HeroButton href="https://takas.lk/akurucon.html" target="_blank">
                  <span className="english-register">Register Today!</span> <br />
                  <span className="sinhala-register">දැන්ම ලියාපදිංචි වන්න!</span> <br />
                  <span className="tamil-register">இப்போது பதிவு செய்க!</span> <br />
                </HeroButton>
              </Parallax>
            </HeroContent>
          </HeroContainer>
        </AnimateHeight>
      </div>
    );
  }
}

export default withRouter(Hero);
