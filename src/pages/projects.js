import React from 'react';

import ProjectListingSection from './../components/ProjectListingSection';

class ProjectsPage extends React.Component {
  render() {
    const allProjects = this.props.data.allMarkdownRemark.edges;

    const personalProjects = allProjects.filter(
      project => project.node.fields.projectType === 'personal'
    );

    const professionalProjects = allProjects.filter(
      project => project.node.fields.projectType === 'professional'
    );

    return (
      <div>
        <ProjectListingSection
          projects={personalProjects}
          sectionTitle="Personal"
        />

        <ProjectListingSection
          projects={professionalProjects}
          sectionTitle="Professional"
        />
      </div>
    );
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
            projectType
          }
        }
      }
    }
  }
`;
