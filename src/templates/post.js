import React from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Layout } from '@components';
import styled from 'styled-components';
import { Main, theme } from '@styles';
import config from '@config';

const { colors } = theme;

const StyledPostContainer = styled(Main)`
  max-width: 1000px;
`;
const StyledPostHeader = styled.header`
  margin-bottom: 50px;
  .tag {
    margin-right: 10px;
  }
`;
const StyledPostContent = styled.div`
  margin-bottom: 100px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 2em 0 1em;
  }

  p {
    margin: 1em 0;
    line-height: 1.5;
    color: ${colors.lightSlate};
  }
`;

const PostTemplate = ({ data, location, ...all }) => {
  if (!data.markdownRemark) {
    return <div>Error: Post not found</div>;
  }
  const { frontmatter, html } = data.markdownRemark;
  const { title, description, date, tags, slug, hero } = frontmatter;
  return (
    <Layout location={location}>
      <Helmet>
        <title>{title} | Dinesh Chhantyal</title>
        <link rel="canonical" href={config.siteUrl + "/blogs"} />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={config.siteUrl + "/blogs" + slug} />
        <meta property="og:description" content={frontmatter.description} />{hero &&
          <meta property="og:image" content={config.siteUrl + "/thumbnail/" + hero} />}
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })} />
        <meta property="article:tag" content={tags.join(", ")} />
      </Helmet>

      <StyledPostContainer>
        <span className="breadcrumb">
          <span className="arrow">&larr;</span>
          <Link to="/blogs">All memories</Link>
        </span>

        <StyledPostHeader>
          <h1 className="medium-title">{title}</h1>
          <p className="subtitle">
            <time>
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>&nbsp;&mdash;&nbsp;</span>
            {tags &&
              tags.length > 0 &&
              tags.map((tag, i) => (
                <Link key={i} to={`/blogs/tags/${kebabCase(tag)}/`} className="tag">
                  #{tag}
                </Link>
              ))}
          </p>
        </StyledPostHeader>

        <StyledPostContent dangerouslySetInnerHTML={{ __html: html }} />
      </StyledPostContainer>
    </Layout>
  );
};

export default PostTemplate;

PostTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

export const pageQuery =
  graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter : { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date
        slug
        tags
        hero
      }
    }
  }
`;
