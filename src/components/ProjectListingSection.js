import React from 'react';
import styled from 'styled-components';
import ProjectListing from './ProjectListing';

const StyledListingSection = styled.section`margin-bottom: 2em;`;
const StyledSectionHeading = styled.h2`margin-bottom: 0;`;

class ProjectListingSection extends React.Component {
  render() {
    if (this.props.projects.length > 0) {
      return (
        <StyledListingSection>
          <StyledSectionHeading>{this.props.sectionTitle}</StyledSectionHeading>
          <ProjectListing projects={this.props.projects} />
        </StyledListingSection>
      );
    } else {
      return '';
    }
  }
}

export default ProjectListingSection;
