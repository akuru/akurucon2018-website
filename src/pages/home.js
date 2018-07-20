import React from 'react';
import styled from 'styled-components';

const IntroContent = styled.div`
  text-align: center;
  padding: 10px;
  line-height: 0.45rem;
  padding: 32px 10px;
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

const Home = () => (
  <div>
    <IntroContent>
      <IntroText1>සියලු ඉදිරිපත්කිරීම් සිංහල, දෙමල සහ ඉංග්‍රීසි බසින්…</IntroText1>
      <IntroText2>அனைத்து வெளியீடுகளும் சிங்களம், தமிழ் மற்றும் ஆங்கில மொழிகளில்...</IntroText2>
      <IntroText3>All presentations in Sinhala, Tamil and English</IntroText3>
    </IntroContent>
  </div>
);

export default Home;
