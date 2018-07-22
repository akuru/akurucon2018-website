import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';

import martin from '../assets/images/martin.jpg';

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
  </div>
);

export default Home;
