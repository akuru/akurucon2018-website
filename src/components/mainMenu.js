import React from 'react';
import styled from 'styled-components';

const MainMenuContainer = styled.nav`
  background-color: #d89c31;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 1.5px 3px rgba(0, 0, 0, 0.2);
  z-index: 99;
  position: relative;
`;

const MainMenuItemList = styled.ul`
  list-style: none;
  display: flex;
  margin: 12px 0;
  padding: 0;
`;

const MainMenuItem = styled.li`
  margin: 0 50px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const MainMenuContainerItemLink = styled.a`
  font-family: Noto Sans ExtraCondensed;
  font-weight: bold;
  font-style: italic;
  text-decoration: none;
  color: #fff;
  padding: 5px 18px;
  transition: all 0.5s;
  border-radius: 11px;

  &:hover {
    color: #351544;
    background-color: #fce1c9;
  }
`;

const MainMenu = () => (
  <MainMenuContainer id="navbar">
    <MainMenuItemList>
      <MainMenuItem>
        <MainMenuContainerItemLink href="/">ABOUT</MainMenuContainerItemLink>
      </MainMenuItem>

      <MainMenuItem>
        <MainMenuContainerItemLink href="/">SCHEDULE</MainMenuContainerItemLink>
      </MainMenuItem>

      <MainMenuItem>
        <MainMenuContainerItemLink href="/">VENUE</MainMenuContainerItemLink>
      </MainMenuItem>

      <MainMenuItem>
        <MainMenuContainerItemLink href="/">WORKSHOPS</MainMenuContainerItemLink>
      </MainMenuItem>
    </MainMenuItemList>
  </MainMenuContainer>
);

export default MainMenu;
