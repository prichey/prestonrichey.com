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
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Rubik', sans-serif;
    }

    *, *:before, *:after {
      box-sizing: inherit;
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
      // line-height: 1.5em;
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
  `;
};
