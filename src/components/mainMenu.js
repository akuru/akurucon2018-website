import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

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

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const MainMenuItem = styled.li`
  margin: 0 50px;

  @media screen and (min-width: 801px) {
    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 800px) {
    text-align: center;
    margin: auto;
    padding: 12px 41px;
  }
`;

const MainMenuContainerItemLink = styled(Link)`
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

const MainMenu = ({ location }) => (
  <MainMenuContainer id="navbar">
    <MainMenuItemList>
      <MainMenuItem>
        <MainMenuContainerItemLink
          to="/"
          className={location.pathname === '/' ? 'menu-active' : ''}
        >
          ABOUT
        </MainMenuContainerItemLink>
      </MainMenuItem>

      <MainMenuItem>
        <MainMenuContainerItemLink
          to="/schedule"
          className={location.pathname === '/schedule' ? 'menu-active' : ''}
        >
          SCHEDULE
        </MainMenuContainerItemLink>
      </MainMenuItem>

      <MainMenuItem>
        <MainMenuContainerItemLink to="/">VENUE</MainMenuContainerItemLink>
      </MainMenuItem>

      <MainMenuItem>
        <MainMenuContainerItemLink to="/">WORKSHOPS</MainMenuContainerItemLink>
      </MainMenuItem>
    </MainMenuItemList>
  </MainMenuContainer>
);

export default withRouter(MainMenu);
