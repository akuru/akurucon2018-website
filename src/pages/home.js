import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';

import martin from '../assets/images/martin.jpg';
import typoLogo from '../assets/images/typo_logo.svg';
import mooniakLogo from '../assets/images/mooniak_logo.svg';
import embassyLogo from '../assets/images/embassy_logo.svg';
import aodLogo from '../assets/images/aod_logo.svg';

const IntroContent = styled.div`
  text-align: center;
  padding: 10px;
  line-height: 0.45rem;
  padding: 32px 10px;

  @media screen and (max-width: 779px) {
    line-height: 1.4rem;
  }
`;

const IntroText1 = styled.p`
  font-family: Noto Sans Sinhala UI;
  font-weight: 400;
`;

const IntroText2 = styled.p`
  font-family: Noto Sans Tamil UI;
  font-weight: 500;
`;

const IntroText3 = styled.p`
  font-family: Noto Sans;
  font-weight: 400;
`;

const AboutContent = styled.div``;

const HomeSectionTitle = styled.h2`
  font-family: Noto Sans ExtraCondensed;
  font-weight: bold;
  font-style: italic;

  &.martin-majoor {
    margin-top: 70px;
  }
`;

const HomeSectionText = styled.p`
  margin-bottom: 22px;
`;

const MartinMajoorPhoto = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;

const HomeFooter = styled.div`
  display: flex;
  margin: 67px 0 70px 0;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 67px 0 44px 0;
  }
`;

const HomeFooterLogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;

  &:first-child: {
    padding-left: 0;
  }
`;

const HomeFooterLogo = styled.img`
  width: 100%;
  z-index: 44;
`;

const HomeFooterContent = styled.div`
  margin-top: -43px;

  @media screen and (max-width: 800px) {
    grid-column-start: 1;
    grid-column-end: 5;
  }
`;

const HomeFooterContentText = styled.p`
  font-size: 0.9rem;
  margin: 6px 0px;
  line-height: 1.3rem;

  &.home-footer-text1 {
    font-family: Noto Sans Sinhala UI Condensed;
    font-weight: 500;
  }

  &.home-footer-text2 {
    font-family: Noto Sans Tamil Condensed;
    font-weight: 500;
  }

  &.home-footer-text3 {
    font-family: Noto Sans;
    font-weight: 400;
  }

  @media screen and (max-width: 680px) {
    line-height: 1rem;
  }
`;

const Home = () => (
  <div>
    <Parallax className="custom-class" offsetYMax={20} offsetYMin={0} slowerScrollRate>
      <IntroContent>
        <IntroText1>සියලු ඉදිරිපත්කිරීම් සිංහල, දෙමල සහ ඉංග්‍රීසි බසින්…</IntroText1>
        <IntroText2>அனைத்து வெளியீடுகளும் சிங்களம், தமிழ் மற்றும் ஆங்கில மொழிகளில்...</IntroText2>
        <IntroText3>All presentations in Sinhala, Tamil and English</IntroText3>
      </IntroContent>
    </Parallax>

    <AboutContent>
      <HomeSectionTitle>About AkuruCon</HomeSectionTitle>

      <HomeSectionText>
        akuruCON is an annual conference on typography in Colombo, Sri Lanka. The inaugural
        conference is celebrating the shared typographic heritage of Sri Lanka and the Netherlands.
        The Dutch Press in Ceylon was was one of the first printing enterprises in the region and it
        pioneered early typography of Sinhala and Tamil scripts. This one day conference features a
        series of workshops on typography & calligraphy and an evening of presentations focusing on
        Dutch and Sri Lankan typography.
      </HomeSectionText>
      <HomeSectionText>
        Keynote presentation by Martin Majoor, a Dutch typeface designer.
      </HomeSectionText>

      <HomeSectionTitle className="martin-majoor">Martin Majoor</HomeSectionTitle>

      <MartinMajoorPhoto src={martin} alt="Martin Majoor" />

      <HomeSectionText>
        Martin Majoor, a typeface designer who began his journey in the mid-1980&apos;s, has taught
        typography at the School of Fine Arts in Arnhem and Breda along with workshops conducted
        from Amsterdam, Stuttgart to Warsaw, Vienna, Seoul, Madrid and more.
      </HomeSectionText>
      <HomeSectionText>
        He is well known for a few of his book that awarded him with &apos;The Best Books&apos;
        prize. His take on typography is considered revolutionary and has paved many paths for type
        enthusiasts over the years.
      </HomeSectionText>
    </AboutContent>

    <HomeFooter>
      <HomeFooterLogoContainer>
        <HomeFooterLogo src={typoLogo} alt="Typo" />
      </HomeFooterLogoContainer>

      <HomeFooterLogoContainer>
        <HomeFooterLogo src={mooniakLogo} alt="Mooniak" />
      </HomeFooterLogoContainer>

      <HomeFooterLogoContainer>
        <HomeFooterLogo src={embassyLogo} alt="Embassy" />
      </HomeFooterLogoContainer>

      <HomeFooterLogoContainer>
        <HomeFooterLogo src={aodLogo} alt="AOD" />
      </HomeFooterLogoContainer>
    </HomeFooter>

    <HomeFooter>
      <HomeFooterContent>
        <HomeFooterContentText className="home-footer-text1">
          සංවිධානය: අකුරු සාමූහිකය සහ මූනියැක් විසින්, නෙදර්ලන්ත රාජධානියේ තානාපති කාර්යාලයේ සහ AOD
          Colombo එකමුතුවෙන්, ශ්‍රී ලංකා රාජකීය ආසියාතික සංගමයේ සහයෝගයෙන්,
        </HomeFooterContentText>

        <HomeFooterContentText className="home-footer-text2">
          அகுரு குழுமம், மூனியக், AOD Colombo அத்தோடு நெதர்லாந்து தூதரகலாயத்துடன் இணைந்தும் தேசிய
          சுவடிகள் கூட்டுத்தாபனத்தின் ஒத்துழைப்புடன் ஏற்பாடு செய்யப்பட்டுள்ளது.
        </HomeFooterContentText>

        <HomeFooterContentText className="home-footer-text3">
          Organised by Akuru Collective and Mooniak in collaboration with AOD and the Embassy of the
          Netherlands in Sri Lanka & Maldives and support of the Royal Asiatic Society of Sri Lanka
        </HomeFooterContentText>
      </HomeFooterContent>
    </HomeFooter>
  </div>
);

export default Home;
