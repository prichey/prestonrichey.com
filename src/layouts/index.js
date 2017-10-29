import React from 'react';
import styled from 'styled-components';

import { Helmet } from 'react-helmet';

import Nav from './../components/Nav';

import baseStyles from './../utils/base-styles';

const Main = styled.main`
  max-width: 60rem;
  padding: 1rem;
  margin: 0 auto;
`;

const Title = styled.h1`text-transform: lowercase;`;

export default class Template extends React.Component {
  render() {
    baseStyles();

    return (
      <Main>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Mono|Rubik"
            rel="stylesheet"
          />
          <title>prichey.net</title>
        </Helmet>

        <Title>Preston Richey</Title>
        <Nav />

        {this.props.children()}

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Main>
    );
  }
}
