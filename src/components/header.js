import React from 'react';
import styled from 'styled-components';

import akuruConLogo from '../assets/images/akurucon_logo.svg';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
`;

const Logo = styled.img`
  width: 204px;
`;

const Seperator = styled.div`
  padding: 0 17px 0 7px;
`;

const SeperatorLine = styled.div`
  width: 35px;
  height: 3px;
  background-color: #111;
`;

const HeaderContentContainer = styled.div``;

const HeaderContent = styled.span`
  display: block;
  font-family: Noto Sans SemCond ExtBd;
  font-weight: 800;
`;

const Header = () => (
  <HeaderContainer>
    <LogoContainer>
      <Logo src={akuruConLogo} alt="AkuruCon Logo" />

      <Seperator>
        <SeperatorLine />
      </Seperator>

      <HeaderContentContainer>
        <HeaderContent>29th - 31st AUG</HeaderContent>
        <HeaderContent>in Colombo, Sri Lanka</HeaderContent>
      </HeaderContentContainer>
    </LogoContainer>
  </HeaderContainer>
);

export default Header;
