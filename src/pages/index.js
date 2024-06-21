import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout, Hero, About, Jobs, Featured, Projects, Contact, Blogs } from '@components';
import styled from 'styled-components';
import { Main } from '@styles';

const StyledMainContainer = styled(Main)`
  counter-reset: section;
`;

const IndexPage = ({ location, data }) => {
  // console.log creative message saying hello to developer
  console.log(
    `
    _   _      _ _         ____                 _
   | | | | ___| | | ___   |  _ \\  _____   _____| | ___  _ __   ___ _ __
   | |_| |/ _ \\ | |/ _ \\  | | | |/ _ \\ \\ / / _ \\ |/ _ \\| '_ \\ / _ \\ '__|
   |  _  |  __/ | | (_) | | |_| |  __/\\ V /  __/ | (_) | |_) |  __/ |
   |_| |_|\\___|_|_|\\___/  |____/ \\___| \\_/ \\___|_|\\___/| .__/ \\___|_|
                                                       |_|

    Hi there! 👋

    I see you are curious. I don't think you will find anything interesting here. But if you do, let me know. I would love to hear from you.

    Happy Coding! 🚀

    `
  );




  return (
    < Layout location={location} >
      <StyledMainContainer className="fillHeight">
        <Hero data={data.hero.edges} />
        <About data={data.about.edges} />
        <Jobs data={data.jobs.edges} />
        <Featured data={data.featured.edges} />
        <Blogs data={data.blogs.edges} />
        <Projects data={data.projects.edges} />
        <Contact data={data.contact.edges} />
      </StyledMainContainer>
    </Layout >
  );
}

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            title
            name
            subtitle
            buttonText
          }
          html
        }
      }
    }
    about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            skills
          }
          html
        }
      }
    }
    jobs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/jobs/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            company
            range
            url
          }
          html
        }
      }
    }
    featured: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/featured/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            cover {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            tech
            github
            external
          }
          html
        }
      }
    }
    projects: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/projects/" }
        frontmatter: { showInProjects: { ne: false } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            tech
            github
            external
          }
          html
        }
      }
    }
    contact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contact/" } }) {
      edges {
        node {
          frontmatter {
            title
            buttonText
          }
          html
        }
      }
    }

    blogs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" }, frontmatter: { draft: { ne: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            slug
            date
            tags
            draft
          }
          html
        }
      }
    }
  }
`;
