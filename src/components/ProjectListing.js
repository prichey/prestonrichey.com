import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

// const DateSpan = styled.span`
//   color: #999;
//   margin-left: 0.5em;
// `;

const StyledProjectListing = styled.ul`
  list-style: none;
  margin-top: 0.5em;
`;

const StyledProjectItem = styled.li`
  font-size: 1.8rem;
  // text-decoration: none;
  margin-bottom: 0.5em;
  line-height: 1.5em;
  // display: inline-block;
  // width: 33.3%;
  // padding-right: 1em;
  // display: flex;
  // flex-wrap: nowrap;
  // justify-content: space-between;
`;

const StyledLinkWrap = styled.span`
  display: block;

  @media (min-width: 550px) {
    display: inline;
  }
`;

const StyledProjectLink = styled(Link)`
  // display: inline-block;
  // flex-grow: 0;
`;

const StyledLedeSpan = styled.span`
  // display: inline-block;
  // flex-grow: 1;
  // display: block;
`;

const ProjectListing = ({ projects }) => {
  const projectLinks = projects.map(project => {
    return (
      <StyledProjectItem key={project.node.fields.slug}>
        <StyledLinkWrap>
          <StyledProjectLink to={project.node.fields.slug}>
            {project.node.frontmatter.title}
          </StyledProjectLink>
          {': '}
        </StyledLinkWrap>
        {project.node.frontmatter.lede && (
          <StyledLedeSpan>{project.node.frontmatter.lede}</StyledLedeSpan>
        )}
      </StyledProjectItem>
    );
  });

  return <StyledProjectListing>{projectLinks}</StyledProjectListing>;
};

export default ProjectListing;
