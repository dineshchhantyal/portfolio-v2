import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Layout } from '@components';
import { IconZap } from '@components/icons';
import styled from 'styled-components';
import { theme, mixins, media, Main } from '@styles';
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

const StyledFolder = styled.span`
  color: ${colors.green};
  svg {
    width: 21px;
    height: 21px;
  }
`;

const ChangesPage = () => {
    return (
        <Layout location={location}>
            <Helmet>
                <title>Updates | Dinesh Chhantyal</title>
                <link rel="canonical" href="https://dineshchhantyal.com.np/updates" />
            </Helmet>

            <StyledMainContainer>
                <header>
                    <h1 className="big-title">Updates</h1>
                    <p className="subtitle">
                        What's new?
                        <StyledFolder>
                            <IconZap />
                        </StyledFolder>
                    </p>
                </header>


            </StyledMainContainer>
        </Layout>
    );
}

export default ChangesPage;