import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
// import Dimensions from 'react-dimensions';

// import 'prismjs/themes/prism-solarizedlight.css';
import 'prismjs/themes/prism.css';

import Nav from './../components/Nav';
import Favicon from './../components/Favicon';

import GlobalStyle from './GlobalStyle';

const Main = styled.main`
  max-width: 83rem;
  padding: 1em 1em 2em;
  margin: 0 auto;

  @media (min-width: 350px) {
    padding: 1em 1.5em 4em;
  }

  @media (min-width: 520px) {
    padding: 2rem 2em 6rem;
  }
`;

const StyledHeader = styled.header``;

const StyledTitle = styled.h1`
  // margin-bottom: 2rem;
  margin: 0.3em 0;

  @media (min-width: 350px) {
    margin: 0.5em 0 0.2em;
  }

  @media (min-width: 520px) {
    margin: 0.667em 0;
  }
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

class Template extends React.Component {
  render() {
    console.log('Layout', { props: this.props });

    return (
      <Main>
        <GlobalStyle />
        <Favicon />

        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Rubik:700"
            rel="stylesheet"
          />
          <title>Preston Richey</title>
          <meta property="og:title" content="Preston Richey" />
          <meta property="og:description" content="Personal Website" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://prestonrichey.com" />
          <meta
            property="og:image"
            content="https://prestonrichey.com/social-meta.png"
          />
          <meta
            property="og:image:secure_url"
            content="https://prestonrichey.com/social-meta.png"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Preston Richey" />
          <meta name="twitter:description" content="Personal Website" />
          <meta
            name="twitter:image"
            content="https://prestonrichey.com/social-meta.png"
          />
          <meta name="twitter:creator" content="@prestonrichey" />
        </Helmet>

        <StyledHeader>
          <StyledTitle>
            <TitleLink to="/">Preston Richey</TitleLink>
          </StyledTitle>

          <Nav />
        </StyledHeader>

        {this.props.children}
      </Main>
    );
  }
}
export default Template;
