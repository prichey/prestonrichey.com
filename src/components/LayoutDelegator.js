import React from 'react';

import Post from './Post';
import Project from './Project';
import Layout from './Layout';

const LayoutDelegator = props => {
  console.log('LayoutDelegator', { props });

  try {
    switch (props.pageContext.frontmatter.type) {
      case 'post':
        return <Post {...props} />;
      case 'project':
        return <Project {...props} />;
      default:
        return <Layout {...props} />;
    }
  } catch (e) {
    // console.log(e);
    return <Layout {...props} />;
  }
};

export default LayoutDelegator;
