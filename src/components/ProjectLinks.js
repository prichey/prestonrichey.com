import React from 'react';
import styled from 'styled-components';

const StyledProjectLinksList = styled.ul`
  list-style: none;
  font-size: 1.8rem;
`;

const StyledProjectLink = styled.li`
  display: inline;
  line-height: 1.5em;

  &:after {
    content: ' | ';
  }

  &:last-child {
    &:after {
      content: '';
    }
  }
`;

class ProjectLinks extends React.Component {
  render() {
    if (!!this.props.link || !!this.props.repo) {
      return (
        <StyledProjectLinksList>
          {this.props.link && (
            <StyledProjectLink>
              <a href={this.props.link} target="_blank">
                {this.props.link.length > 40 ? 'Link' : this.props.link}
              </a>
            </StyledProjectLink>
          )}

          {this.props.date && (
            <StyledProjectLink>{this.props.date}</StyledProjectLink>
          )}

          {this.props.lang && (
            <StyledProjectLink>{this.props.lang}</StyledProjectLink>
          )}

          {this.props.repo && (
            <StyledProjectLink>
              <a href={this.props.repo} target="_blank">
                Repo
              </a>
            </StyledProjectLink>
          )}
        </StyledProjectLinksList>
      );
    } else {
      return null;
    }
  }
}

export default ProjectLinks;
