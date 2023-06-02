import React from 'react';
import {
  HeaderContent,
  HeaderControls,
  HeaderLogo,
  HeaderNav,
  HeaderNavItem,
  HeaderNavLink,
  HeaderNavList, HeaderSearch,
  HeaderWrapper,
} from '@hoc/Header/style';
import { useTranslation } from 'react-i18next';

export const Header: React.FC = () => {
  const { t } = useTranslation();
	
  return (
    <HeaderWrapper>
      <HeaderContent>
        <HeaderLogo>
          <img src='./assets/img/logo.svg' alt='Yum Yum Logo'/>
        </HeaderLogo>
        <HeaderNav>
          <HeaderNavList>
            <HeaderNavItem>
              <HeaderNavLink to='/'>
                {t('main')}
              </HeaderNavLink>
            </HeaderNavItem>
            <HeaderNavItem>
              <HeaderNavLink to='/recipes'>
                {t('recipes')}
              </HeaderNavLink>
            </HeaderNavItem>
          </HeaderNavList>
        </HeaderNav>
        <HeaderControls>
          <HeaderSearch className='icon-search'/>
        </HeaderControls>
      </HeaderContent>
    </HeaderWrapper>
  );
};
