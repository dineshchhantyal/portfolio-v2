import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedIcon } from '@components/icons';
import { socialMedia } from '@config';
import styled from 'styled-components';
import { theme, mixins, media } from '@styles';
import config from '../config';
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  text-align: center;
  height: auto;
  min-height: 70px;
`;
const StyledSocial = styled.div`
  color: ${colors.lightSlate};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
  ${media.tablet`display: block;`};
`;
const StyledSocialList = styled.ul`
  ${mixins.flexBetween};
  padding: 0;
  margin: 0;
  list-style: none;
`;
const StyledSocialLink = styled.a`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const StyledMetadata = styled.div`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xs};
  line-height: 1;
`;
const StyledGitHubLink = styled.a`
  color: ${colors.lightSlate};
  padding: 10px;
`;

const StyledLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
  `;

const StyledLink = styled.a`
padding: 4px 0px 10px 0px;

    & > span {
  color: ${colors.lightSlate};
}
`;

const StyledGitHubInfo = styled.div`
margin - top: 10px;

  & > span {
  display: inline - flex;
  align - items: center;
  margin: 0 7px;
}
  svg {
  display: inline - block;
  height: 15px;
  width: auto;
  margin - right: 5px;
}
`;

const links = [{
  name: '🔄 Updates',
  url: config.siteUrl + '/updates'
}, {
  name: '📝 Blogs',
  url: config.siteUrl + '/blogs'
}]

const Footer = () => {
  const [githubInfo, setGitHubInfo] = useState({
    stars: 10,
    forks: 18,
  });

  // useEffect(() => {
  //   if (process.env.NODE_ENV !== 'production') {
  //     return;
  //   }
  //   fetch('https://api.github.com/repos/dineshchhantyal/v4')
  //     .then(response => response.json())
  //     .then(json => {
  //       const { stargazers_count, forks_count } = json;
  //       setGitHubInfo({
  //         stars: stargazers_count,
  //         forks: forks_count,
  //       });
  //     })
  //     .catch(e => console.error(e));
  // }, []);

  return (
    <StyledContainer>
      <StyledSocial>
        <StyledSocialList>
          {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <StyledSocialLink
                  href={url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={name}>
                  <FormattedIcon name={name} />
                </StyledSocialLink>
              </li>
            ))}
        </StyledSocialList>
      </StyledSocial>
      <StyledMetadata tabindex="-1">
        <StyledGitHubLink
          href="https://github.com/dineshchhantyal"
          target="_blank"
          rel="nofollow noopener noreferrer">
          <div>
            <span>&copy; {new Date().getFullYear()} Dinesh Chhantyal</span>
          </div>
          {/* {githubInfo.stars && githubInfo.forks && (
              <StyledGitHubInfo>
                <span>
                  <FormattedIcon name="O" />
                  <span>{githubInfo.stars.toLocaleString()}</span>
                </span>
                <span>
                  <FormattedIcon name="Fork" />
                  <span>{githubInfo.forks.toLocaleString()}</span>
                </span>
              </StyledGitHubInfo>
            )} */}
        </StyledGitHubLink>
        <StyledLinks>
          {/* updates page link */}
          {
            links.map((link, i) =>
              <StyledLink
                href={link.url}
                className='underline'
                key={i}
              >
                <div>
                  <span>{link.name}</span>
                  {
                    i !== links.length - 1 && <span> - </span>
                  }
                </div>

              </StyledLink>
            )}
        </StyledLinks>
      </StyledMetadata>
    </StyledContainer>
  );
};

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
