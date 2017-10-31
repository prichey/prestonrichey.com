import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

class ProjectListing extends React.Component {
  render() {
    return (
      <div>
        <h2>Projects</h2>
        <p>Links are hardcoded :(</p>
        <ul>
          <li>
            <Link to="/projects/test">Test</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default ProjectListing;
