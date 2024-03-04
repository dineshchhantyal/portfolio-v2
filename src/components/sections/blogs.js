import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import sr from '@utils/sr';
import { srConfig } from '@config';
import kebabCase from 'lodash/kebabCase';
import { IconZap } from '@components/icons';
import styled from 'styled-components';
import { theme, mixins, media, Main, Heading } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledMainContainer = styled(Main)`
  & > header {
    text-align: center;
    margin-bottom: 100px;

    a {
      &:hover,
      &:focus {
        cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>⚡</text></svg>")
            20 0,
          auto;
      }
    }
  }

  footer {
    ${mixins.flexBetween};
    margin-top: 20px;
    width: 100%;
  }
`;

const StyledGrid = styled.div`
  margin-top: 50px;

  .posts {
    display: flex;
    flex-direction: column;
    ${media.tablet`flex-direction: row;`};
    flex-wrap: wrap;
    gap: 15px;
  }
`;

const StyledPostInner = styled.div`
  ${mixins.boxShadow};
  ${mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 2rem 1.75rem;
  height: 100%;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  background-color: ${colors.lightNavy}; /* Adjust contrast as needed */

  header,
  a {
    width: 100%;
  }
`;

const StyledPost = styled.div`
  transition: ${theme.transition};
  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
    ${StyledPostInner} {
      transform: translateY(-5px);
    }
  }
`;

const StyledPostHeader = styled.div`
  ${mixins.flexBetween};
  margin-bottom: 30px;
`;

const StyledCategoryIcon = styled.div`
  /* Use a more representative icon or consider alternative visual elements */
  color: ${colors.green};
  svg {
    width: 40px;
    height: 40px;
  }
`;

const StyledPostName = styled.h5`
  margin: 0 0 10px;
  font-size: ${fontSizes.xxl};
  color: ${colors.lightestSlate}; /* Adjust contrast as needed */
  font-weight: bold; /* Make title bold */
`;

const StyledPostDescription = styled.div`
  font-size: 17px;
  color: ${colors.lightSlate}; /* Adjust contrast as needed */
  line-height: 1.5; /* Improve readability */
`;

const StyledDate = styled.span`
  text-transform: uppercase;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xs};
  color: ${colors.lightSlate}; /* Adjust contrast as needed */
  display: flex;
  align-items: center; /* Align date and icon horizontally */
`;

const StyledCalendarIcon = styled.span`
  margin-right: 5px; /* Add spacing between icon and date */
  font-size: 14px; /* Adjust icon size as needed */
  /* Use a calendar icon from your icon library */
`;

const StyledTags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin
  0;
  list-style: none;

  li {
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.xs};
    color: ${colors.green};
    line-height: 1.75;
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
    a {
      ${mixins.inlineLink};
    }
  }
`;

const ShowAll = styled(Link)`
    ${mixins.bigButton};
    margin-top: 50px;
    width: 100%;
    text-align: center;
`;


const Blogs = ({ data }) => {
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);
  return (
    <StyledMainContainer
      id="blogs"
      ref={revealContainer}
    >
      <Heading>
        Blogs &amp; Tutorials
      </Heading>

      <StyledGrid>
        <div className="posts">
          {data.length > 0 &&
            data.map(({ node }, i) => {
              const { frontmatter } = node;
              const { title, description, slug, date, tags } = frontmatter;
              const d = new Date(date);

              return (
                <StyledPost key={i} tabIndex="0">
                  <StyledPostInner>
                    <header>
                      <Link to={slug}>
                        <StyledPostHeader>
                          <StyledCategoryIcon>
                            {/* Use a more representative icon or consider alternative visual elements */}
                            <IconZap />
                          </StyledCategoryIcon>
                        </StyledPostHeader>
                        <StyledPostName>{title}</StyledPostName>
                        <StyledPostDescription>{description}</StyledPostDescription>
                      </Link>
                    </header>
                    <footer>
                      <StyledDate>
                        <StyledCalendarIcon>&#128197;</StyledCalendarIcon> {`${d.toLocaleDateString()}`}
                      </StyledDate>
                      <StyledTags>
                        {tags.slice(0, 3).map((tag, i) => (
                          <li key={i}>
                            <Link to={`/ blogs / tags / ${kebabCase(tag)} /`}>#{tag}</Link >
                          </li >
                        ))}
                      </StyledTags >
                    </footer >
                  </StyledPostInner >
                </StyledPost >
              );
            })}
        </div >
      </StyledGrid >
      {/* read all */}
      <ShowAll to="/blogs" >
        <span>Read all</span>
      </ShowAll >
    </StyledMainContainer >
  );
};

export default Blogs;
