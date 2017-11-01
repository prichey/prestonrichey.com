import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import 'prismjs/themes/prism-solarizedlight.css';

import Nav from './../components/Nav';
import Favicon from './../components/Favicon';

import baseStyles from './../utils/base-styles';

const Main = styled.main`
  max-width: 80rem;
  padding: 2rem;
  margin: 0 auto;
`;

const TitleLink = styled(Link)`
  text-transform: lowercase;
  color: #000;
  text-decoration: none;
  border: none;

  &:hover {
    color: #0000ff;
  }
`;

export default class Template extends React.Component {
  render() {
    baseStyles();

    return (
      <Main>
        <Favicon />

        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Rubik:700"
            rel="stylesheet"
          />
          <title>prichey.net</title>
        </Helmet>

        <h1>
          <TitleLink to="/">Preston Richey</TitleLink>
        </h1>

        <Nav />

        {this.props.children()}
      </Main>
    );
  }
}
