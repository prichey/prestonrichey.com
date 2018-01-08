import React from 'react';

import ProjectListingSection from './../components/ProjectListingSection';

class ProjectsPage extends React.Component {
  render() {
    const allProjects = this.props.data.allMarkdownRemark.edges;

    const personalProjects = allProjects.filter(
      project => project.node.fields.projectType === 'personal'
    );
    console.log(personalProjects);

    const professionalProjects = allProjects.filter(
      project => project.node.fields.projectType === 'professional'
    );
    console.log(professionalProjects);

    return (
      <div>
        <h1>Projects</h1>
        {personalProjects.length > 0 && (
          <ProjectListingSection
            projects={personalProjects}
            sectionTitle="Personal"
          />
        )}

        {professionalProjects.length > 0 && (
          <ProjectListingSection
            projects={professionalProjects}
            sectionTitle="Professional"
          />
        )}
      </div>
    );
  }
}

export default ProjectsPage;

export const query = graphql`
  query ProjectsPageQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: { publish: { eq: true } }
        fields: { type: { eq: "project" } }
      }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            lede
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
