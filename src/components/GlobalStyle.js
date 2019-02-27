import normalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html, body {
    height: 100%;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-size: 16px;
    font-size: 1.6rem;
    font-family: 'Roboto Mono', monospace;
    word-break: break-word;
    // white-space: pre-line;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Rubik', sans-serif;
    margin: 0.5em 0;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  iframe {
    margin: 0 auto;
    display: block;
    max-width: 100%;
    width: 100%;

    &.youtube {
      height: 20rem;

      @media (min-width: 550px) {
        height: 34rem;
      }
    }

  }

  blockquote {
    margin-left: 1em;
    margin-right: 1em;

    @media (min-width: 520px) {
      margin-left: 2em;
      margin-right: 2em;
    }
  }

  figure {
    margin: 0;
  }

  ul {
    // list-style: none;
    padding: 0;
    list-style: square;
  }

  a {
    text-decoration: none;
    color: blue;
    border-bottom: 2px solid transparent;

    &:hover {
      color: #999;
      border-color: #999;
    }

    &.anchor {
      border: none;
    }
  }


  p {
    line-height: 1.5em;
    font-size: 1.8rem;
  }

  twitterwidget {
    margin: 0 auto;
  }

  .sidebar {
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 520px) {
      width: calc(50% + 1em);
      clear: both;
      float: right;
      padding-left: 1em;
    }

    &.left {
      float: left;
      padding-left: 0;
      padding-right: 1em;
    }

    img {
      width: 100%;
    }
  }

  .blog-full,
  .blog-inset {
    margin-left: auto;
    margin-right: auto;
    width: 100%;

    img {
      width: 100%;
    }
  }

  .blog-inset {
    @media (min-width: 520px) {
      margin-top: 2em;
      margin-bottom: 2em;
      width: 80%;
    }
  }

  .blog-section {
    font-size: 1.8rem;

    &:not(:first-child) {
      margin-top: 2em;
    }

    h1, h2, h3, h4, h5, h6 {
      margin-bottom: 0.5em;

      & + p {
        margin-top: 0.5em;
      }
    }

    ul {
      margin-left: 1.5em;

      @media (min-width: 520px) {
        margin-left: 2.5em;
      }
    }

    li {
      margin: 0.5em 0;
      line-height: 1.5em;

      p {
        margin: 0;
      }
    }
  }

  :not(pre) > code[class*="language-"], pre[class*="language-"] {
    font-size: 0.9em;
  }

  .gatsby-highlight-code-line {
    background-color: #feb;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #f99;
  }

  .gatsby-resp-image-wrapper {
    @media (min-width: 520px) {
      margin-top: 2em;
      margin-bottom: 2em;
      width: 80%;
    }
  }
`;

export default GlobalStyle;
