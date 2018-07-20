import React from 'react';
import styled from 'styled-components';

import heroBg from '../assets/images/hero_bg.jpg';

const HeroContainer = styled.div`
  overflow: hidden;
  background: url(${heroBg}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  padding: 40px 10px;
`;

const HeroContent = styled.div`
  color: #fce1c9;
  text-align: center;
  line-height: 0.35rem;
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
  font-family: Noto Sans ExtraCondensed;
  font-weight: bold;
  font-style: italic;
  text-decoration: none;
  color: #351544;
  background-color: #fbe0c8;
  padding: 14px 22px;
  border-radius: 10px;
  display: inline-block;
  margin-top: 33px;
  transition: all 0.5s;

  &:hover {
    color: #fff;
    background-color: #351544;
  }
`;

const Hero = () => (
  <HeroContainer className="hero">
    <HeroContent>
      <HeroText1>අක්ෂර-රූපකරණය සහ අක්ෂර රටා නිර්මාණකරනය පිළිබඳ පළමු සමුළුව</HeroText1>
      <HeroText2>எழுத்தழகியல் மற்றும் எழுத்துருவியல் பற்றிய மாநாடு, கொழும்பு</HeroText2>
      <HeroText3>Typography conference in Colombo</HeroText3>

      <HeroText4>෴</HeroText4>

      <HeroText5>ලන්දේසි මුද්‍රණ හා අක්ෂර-රූපකරණය තේමාවෙන්…</HeroText5>
      <HeroText6>ஒல்லாந்தர் அச்சுக்கலை பற்றிய கருப்பொருளில்..</HeroText6>
      <HeroText7>Celebrating typography of the Dutch Press in Ceylon…</HeroText7>

      <HeroButton href="#" target="_blank">
        REGISTER TODAY
      </HeroButton>
    </HeroContent>
  </HeroContainer>
);

export default Hero;