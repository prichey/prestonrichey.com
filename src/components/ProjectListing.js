import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const DateSpan = styled.span`
  color: #999;
  margin-left: 0.5em;
`;

const StyledProjectListing = styled.ul`list-style: none;`;
const StyledProjectItem = styled.li`
  font-size: 1.8rem;
  // text-decoration: none;
  margin-bottom: 0.5em;
`;
const StyledProjectLink = styled(Link)``;

class ProjectListing extends React.Component {
  render() {
    const projectLinks = this.props.projects.map(project => {
      return (
        <StyledProjectItem key={project.node.fields.slug}>
          <StyledProjectLink to={project.node.fields.slug}>
            {project.node.frontmatter.title}
          </StyledProjectLink>
          <DateSpan>({project.node.frontmatter.date})</DateSpan>
        </StyledProjectItem>
      );
    });

    return <StyledProjectListing>{projectLinks}</StyledProjectListing>;
  }
}

export default ProjectListing;
