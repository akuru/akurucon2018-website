import React from 'react';
import styled from 'styled-components';

const FooterText = styled.p`
  text-align: left;
  font-size: 0.7rem;
  margin-bottom: 18px;
  color: #928d8d;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: #928d8d;
`;

const Footer = () => (
  <footer>
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
  </footer>
);

export default Footer;
