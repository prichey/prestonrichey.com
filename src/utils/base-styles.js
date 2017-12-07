import normalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

export default () => {
  injectGlobal`
    ${normalize}

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

    ul {
      // list-style: none;
      padding: 0;
    }

    a {
      text-decoration: none;
      color: blue;
      border-bottom: 2px solid transparent;

      &:hover {
        color: #999;
        border-color: #999;
      }
    }

    p {
      line-height: 1.5em;
      font-size: 1.8rem;
    }

    twitterwidget {
      margin: 0 auto;
    }

    .blog-inset {
      margin-left: auto;
      margin-right: auto;
      width: 100%;

      img {
        width: 100%;
      }

      @media (min-width: 520px) {
        margin-top: 2em;
        margin-bottom: 2em;
        width: 80%;
      }
    }

    .blog-section {
      &:not(:first-child) {
        margin-top: 2em;
      }

      h1, h2, h3, h4, h5, h6 {
        margin-bottom: 0.5em;

        & + p {
          margin-top: 0.5em;
        }
      }

      ${'' /* .section-anchor {
        &:before {
          content: '#';
          position: absolute;
          left: -2rem;
        }
      } */}
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
};
