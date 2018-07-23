import React from 'react';
import styled from 'styled-components';

import typoLogo from '../assets/images/typo_logo.svg';
import mooniakLogo from '../assets/images/mooniak_logo.svg';
import embassyLogo from '../assets/images/embassy_logo.svg';
import aodLogo from '../assets/images/aod_logo.svg';
import leafyLogo from '../assets/images/leafycode_logo.svg';
import rasLogo from '../assets/images/ras_logo.jpg';

const FooterWrapper = styled.footer`
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

const FooterContainer = styled.div`
  margin: auto;
  padding: 0px 38px;
  position: relative;
  z-index: 10;
  margin-bottom: -18px;
  margin-top: -33px;

  @media screen and (max-width: 800px) {
    &:last-of-type {
      width: 100%;
      padding: 0px;
    }
  }
`;

const FooterText = styled.p`
  text-align: left;
  font-size: 0.64rem;
  padding-bottom: 23px;
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
  min-height: 51px;
`;

const FooterContent = styled.div`
  margin-top: -43px;

  @media screen and (max-width: 800px) {
    grid-column-start: 1;
    grid-column-end: 5;
  }
`;

const FooterContentText = styled.p`
  font-size: 0.64rem;
  margin: 6px 0px;
  line-height: 1rem;

  &.footer-text1 {
    font-family: Noto Sans Sinhala UI SemiCondensed, Noto Sans SemiCondensed;
    font-weight: 500;
  }

  &.footer-text2 {
    font-family: Noto Sans Tamil UI SemiCondensed, Noto Sans SemiCondensed;
    font-weight: 500;
  }

  &.footer-text3 {
    font-family: Noto Sans SemiCondensed;
    font-weight: 500;
  }

  @media screen and (max-width: 680px) {
    line-height: 1rem;
  }
`;

const FooterSponsorContainer = styled.div``;

const FooterSponorLogo = styled.img`
  width: 67px;
  height: 67px;
  margin: auto;
  display: block;
  margin-bottom: 13px;
`;

const FooterSponsorText = styled.span`
  font-family: Noto Sans SemiCondensed;
  font-weight: 500;
  font-size: 0.64rem;
  line-height: 0.7rem;
  display: block;
  text-align: center;
`;

const FooterSponsorWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  margin: 67px 0 19px 0;
  max-width: 460px;

  @media screen and (max-width: 800px) {
    max-width: none;
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
            AOD එකමුතුවෙන්, ශ්‍රී ලංකා රාජකීය ආසියාතික සංගමයේ සහයෝගයෙන්,
          </FooterContentText>

          <FooterContentText className="footer-text2">
            அகுரு குழுமம், மூனியக், AOD அத்தோடு நெதர்லாந்து தூதரகலாயத்துடன் இணைந்தும் தேசிய
            சுவடிகள் கூட்டுத்தாபனத்தின் ஒத்துழைப்புடன் ஏற்பாடு செய்யப்பட்டுள்ளது.
          </FooterContentText>

          <FooterContentText className="footer-text3">
          Organised by Akuru Collective and Mooniak in collaboration with AOD and with the support from The Embassy of The Kingdom of the Netherlands in Sri Lanka. 
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

    <FooterContainer>
      <FooterSponsorWrapper>
      <FooterSponsorContainer>
          <FooterSponorLogo src={rasLogo} alt="Royal Asiatic Society of Sri Lanka" />
          <FooterSponsorText>Location partner</FooterSponsorText>
        </FooterSponsorContainer>
        <FooterSponsorContainer>
          <FooterSponorLogo src={leafyLogo} alt="LeafyCode" />
          <FooterSponsorText>Technology partner</FooterSponsorText>
        </FooterSponsorContainer>


      </FooterSponsorWrapper>
    </FooterContainer>
  </FooterWrapper>
);

export default Footer;
