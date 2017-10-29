import React from 'react';
import styled from 'styled-components';

const Projects = styled.div`color: green;`;

class ProjectListing extends React.Component {
  render() {
    return (
      <Projects>
        <h1>Projects</h1>
      </Projects>
    );
  }
}

export default ProjectListing;
