import React from 'react';
import styled from 'styled-components';

import typoLogo from '../assets/images/typo_logo.svg';
import mooniakLogo from '../assets/images/mooniak_logo.svg';
import embassyLogo from '../assets/images/embassy_logo.svg';
import aodLogo from '../assets/images/aod_logo.svg';

const FooterWrapper = styled.footer`
  background-color: #fff;
`;

const FooterContainer = styled.div`
  max-width: 920px;
  margin: auto;
  padding: 0px 38px;
  position: relative;
  z-index: 10;
  margin-bottom: -18px;
  margin-top: -33px;
`;

const FooterText = styled.p`
  text-align: left;
  font-size: 0.7rem;
  margin-bottom: 18px;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: #351544;
`;

const FooterContentContainer = styled.div`
  display: flex;
  margin: 67px 0 19px 0;
  max-width: 460px;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    max-width: none;
  }
`;

const FooterLogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 27px;

  &:last-of-type: {
    margin-right: 0px;
  }
`;

const FooterLogo = styled.img`
  width: 100%;
  z-index: 44;
`;

const FooterContent = styled.div`
  margin-top: -43px;

  @media screen and (max-width: 800px) {
    grid-column-start: 1;
    grid-column-end: 5;
  }
`;

const FooterContentText = styled.p`
  font-size: 0.7rem;
  margin: 6px 0px;
  line-height: 1rem;

  &.footer-text1 {
    font-family: Noto Sans Sinhala UI Condensed;
    font-weight: 500;
  }

  &.footer-text2 {
    font-family: Noto Sans Tamil Condensed;
    font-weight: 500;
  }

  &.footer-text3 {
    font-family: Noto Sans;
    font-weight: 400;
  }

  @media screen and (max-width: 680px) {
    line-height: 1rem;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <FooterContainer>
      <FooterContentContainer>
        <FooterLogoContainer>
          <FooterLogo src={typoLogo} alt="Typo" />
        </FooterLogoContainer>

        <FooterLogoContainer>
          <FooterLogo src={mooniakLogo} alt="Mooniak" />
        </FooterLogoContainer>

        <FooterLogoContainer>
          <FooterLogo src={embassyLogo} alt="Embassy" />
        </FooterLogoContainer>

        <FooterLogoContainer>
          <FooterLogo src={aodLogo} alt="AOD" />
        </FooterLogoContainer>
      </FooterContentContainer>

      <FooterContentContainer>
        <FooterContent>
          <FooterContentText className="footer-text1">
            සංවිධානය: අකුරු සාමූහිකය සහ මූනියැක් විසින්, නෙදර්ලන්ත රාජධානියේ තානාපති කාර්යාලයේ සහ
            AOD Colombo එකමුතුවෙන්, ශ්‍රී ලංකා රාජකීය ආසියාතික සංගමයේ සහයෝගයෙන්,
          </FooterContentText>

          <FooterContentText className="footer-text2">
            அகுரு குழுமம், மூனியக், AOD Colombo அத்தோடு நெதர்லாந்து தூதரகலாயத்துடன் இணைந்தும் தேசிய
            சுவடிகள் கூட்டுத்தாபனத்தின் ஒத்துழைப்புடன் ஏற்பாடு செய்யப்பட்டுள்ளது.
          </FooterContentText>

          <FooterContentText className="footer-text3">
            Organised by Akuru Collective and Mooniak in collaboration with AOD and the Embassy of
            the Netherlands in Sri Lanka & Maldives and support of the Royal Asiatic Society of Sri
            Lanka
          </FooterContentText>
        </FooterContent>
      </FooterContentContainer>

      <FooterText>
        Made with love by&nbsp;
        <FooterLink href="https://leafycode.com/" target="_blank">
          LeafyCode
        </FooterLink>
        &nbsp;&&nbsp;
        <FooterLink href="http://mooniak.com/" target="_blank">
          Mooniak
        </FooterLink>
      </FooterText>
    </FooterContainer>
  </FooterWrapper>
);

export default Footer;
