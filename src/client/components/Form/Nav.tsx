import styled from '@emotion/styled';
import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

import { StyledCard } from 'client/components/Form/Card';
import Heading from 'client/components/Form/Heading';
import colors from 'client/styles/colors';

const Header = styled(StyledCard)`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  align-items: center;
  width: min(95vw, 96rem);
`;

const Nav = (props: { children?: ReactNode }) => {
  const location = useLocation();
  const appBasePath = import.meta.env.PUBLIC_APP_BASE || '/seo';
  const isZh = (new URLSearchParams(location.search).get('lang') || document.documentElement.lang).startsWith('zh');

  return (
    <Header as="header">
      <Heading color={colors.primary} size="large">
        <span aria-hidden="true">✦</span>
        <a href={`${appBasePath}${location.search}`} target="_self">
          {isZh ? 'SEO 检测' : 'SEO Check'}
        </a>
      </Heading>
      {props.children && props.children}
    </Header>
  );
};

export default Nav;
