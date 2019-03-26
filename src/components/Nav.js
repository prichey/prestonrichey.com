import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';

const activeClassName = 'active';

const StyledNav = styled.nav`
  margin-bottom: 1em;

  @media (min-width: 520px) {
    margin-bottom: 2em;
  }
`;

const StyledList = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 0;

  @media (min-width: 520px) {
    display: block;
  }
`;

const ListElement = styled.li`
  display: inline-block;
  padding: 0.5em;
  text-align: center;
  font-size: 1.8rem;

  @media (min-width: 300px) {
    font-size: 2.2rem;
    padding-right: 0;
    padding-left: 0;
  }

  @media (min-width: 350px) {
    font-size: 2.2rem;
  }

  @media (min-width: 520px) {
    padding: 0;
    margin-right: 2rem;
    font-size: 2.4rem;
  }

  &:after {
    content: ' ';
    display: none;
    white-space: pre;

    @media (min-width: 520px) {
      display: inline-block;
    }
  }
`;

const NavItem = styled(Link).attrs({
  activeClassName
})`
  color: black;
  border: none;

  &:hover {
    color: blue;
  }

  &:before {
    content: '/';
    display: none;

    @media (min-width: 520px) {
      display: inline;
    }
  }

  &.${activeClassName} {
    font-weight: bold;
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <StyledList>
        <ListElement>
          <NavItem to="/blog/" activeClassName={activeClassName}>
            blog
          </NavItem>
        </ListElement>
        <ListElement>
          <NavItem to="/projects/" activeClassName={activeClassName}>
            projects
          </NavItem>
        </ListElement>
        <ListElement>
          <NavItem to="/about/" activeClassName={activeClassName}>
            about
          </NavItem>
        </ListElement>
      </StyledList>
    </StyledNav>
  );
};

export default Nav;
