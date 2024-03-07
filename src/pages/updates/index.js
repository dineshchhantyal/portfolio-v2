import React, { useEffect, useRef } from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Layout } from '@components';
import { IconZap } from '@components/icons';
import styled from 'styled-components';
import { theme, mixins, media, Main } from '@styles';
const { colors, fontSizes, fonts } = theme;
import { FormattedIcon } from '@components/icons';


import sr from '@utils/sr';
import { srConfig } from '@config';

const StyledMainContainer = styled(Main)``;

const StyledTableContainer = styled.div`
  margin: 100px -20px;
  ${media.tablet`
    margin: 100px -10px;
  `};
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  .hide-on-mobile {
    ${media.tablet`
      display: none;
    `};
  }

  tbody tr {
    transition: ${theme.transition};

    &:hover,
    &:focus {
      background-color: ${colors.lightNavy};
    }
  }
  th,
  td {
    cursor: default;
    line-height: 1.5;
    padding: 10px 20px;
    vertical-align: baseline;

    ${media.tablet`
      padding: 10px;
    `};
  }
  th {
    text-align: left;
  }
  td {

    &.completed {
      width: 10%;
      ${media.tablet`
        font-size: ${fontSizes.sm};
      `};
    }
    &.title {
      padding-top: 15px;
      color: ${colors.lightestSlate};
      font-size: ${fontSizes.xl};
      font-weight: 700;
    }
    &.description {
      width: 70%;
      padding-top: 15px;
      font-size: ${fontSizes.lg};
    }

    &.links {
      span {
        display: flex;
        align-items: start;
        a {
          ${mixins.flexCenter};
        }
        a + a {
          margin-left: 10px;
        }
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;

const StyledFolder = styled.span`
  color: ${colors.green};
  svg {
    width: 21px;
    height: 21px;
  }
`;


const ChangesPage = ({ location, data }) => {

  const updates = data.allMarkdownRemark.edges;


  const revealTitle = useRef(null);
  const revealTable = useRef(null);
  const revealUpdates = useRef([]);


  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealTable.current, srConfig());
    revealUpdates.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 10)));
  }, []);

  return (
    <Layout location={location}>
      <Helmet>
        <title>Updates | Dinesh Chhantyal</title>
        <link rel="canonical" href="https://dineshchhantyal.com.np/updates" />
      </Helmet>

      <StyledMainContainer>
        <header ref={revealTitle}>
          <h1 className="big-title">Updates</h1>
          <p className="subtitle">
            What's new?
            <StyledFolder>
              <IconZap />
            </StyledFolder>
          </p>
        </header>

        <StyledTableContainer ref={revealTable}>
          <StyledTable>
            <thead>
              <tr>
                <th>Completed</th>
                <th>Title</th>
                <th className="hide-on-mobile">Description</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {updates.length > 0 &&
                updates?.map(({ node }, i) => {
                  const { github, external, title, completed } = node.frontmatter;
                  return (
                    <tr key={i} ref={el => (revealUpdates.current[i] = el)}>
                      <td className="overline completed">{
                        completed ? <span
                          aria-label='Completed'
                          alt='Completed'
                        >✅</span> : <span
                          aria-label='Not Completed'
                          alt='Not Completed'
                        >❌</span>
                      }</td>

                      <td className="title">{title}</td>

                      <td className="description hide-on-mobile">
                        {node.html ? <span
                          dangerouslySetInnerHTML={{ __html: node.html }}
                        ></span> : <span>—</span>}
                      </td>

                      <td className="links">
                        <span>
                          {external && (
                            <a
                              href={external}
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                              aria-label="External Link">
                              <FormattedIcon name="External" />
                            </a>
                          )}
                          {github && (
                            <a
                              href={github}
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                              aria-label="GitHub Link">
                              <FormattedIcon name="GitHub" />
                            </a>
                          )}
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </StyledTable>
        </StyledTableContainer>
      </StyledMainContainer>
    </Layout >
  );
}

export default ChangesPage;

ChangesPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/updates/" } }
      sort: { fields: [frontmatter___completed,frontmatter___date], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            date
            title
            github
            external
            completed
          }
          html
        }
      }
    }
  }
`;