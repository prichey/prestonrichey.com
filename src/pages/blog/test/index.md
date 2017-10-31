---
title: "Test Blog Post"
date: "2017-10-31"
---

hi from test blog post

This is some beautiful code:

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```

You can also add line highlighting. It adds a span around lines of
code with a special class `.gatsby-highlight-code-line` that you can
target with styles. See this readme for more info.

In the following code snippit, lines 1 and 4 through 6 will get
the line highlighting. The line range parsing is done with
https://www.npmjs.com/package/parse-numeric-range.

```javascript{1,4-6}
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```
