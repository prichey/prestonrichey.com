import React from 'react';

import ProjectListing from './../components/ProjectListing';

class ProjectsPage extends React.Component {
  render() {
    const projects = this.props.data.allMarkdownRemark.edges;

    return <ProjectListing projects={projects} />;
  }
}

export default ProjectsPage;

export const query = graphql`
  query ProjectsPageQuery {
    allMarkdownRemark(
      filter: { fields: { type: { eq: "project" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
