import React from 'react';
import Link from 'gatsby-link';

import styled from 'styled-components';

const activeClassName = 'active';

const StyledNav = styled.nav`
  margin-bottom: 2em;
`;

const StyledList = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap:
  justify-content: space-between;

  @media (min-width: 520px) {
    display: block;
  }
`;

const ListElement = styled.li`
  font-size: 1.6rem;
  display: inline-block;
  margin-right: 1.5rem;

  @media (min-width: 520px) {
    font-size: 1.8rem;
    margin-right: 2rem;
  }

  @media (min-width: 520px) {
    font-size: 2.4rem;
  }

  &:after {
    content: ' ';
    display: inline-block;
    white-space: pre;
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

  &.${activeClassName} {
    font-weight: bold;
  }
`;

class Nav extends React.Component {
  render() {
    return (
      <StyledNav>
        <StyledList>
          <ListElement>
            <NavItem to="/blog/" activeClassName={activeClassName}>
              /blog
            </NavItem>
          </ListElement>
          <ListElement>
            <NavItem to="/projects/" activeClassName={activeClassName}>
              /projects
            </NavItem>
          </ListElement>
          {/* <ListElement>
            <NavItem to="/about/" activeClassName={activeClassName}>
              /about
            </NavItem>
          </ListElement> */}
        </StyledList>
      </StyledNav>
    );
  }
}

export default Nav;
