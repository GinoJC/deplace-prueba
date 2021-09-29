import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Search from './Search';
import Filter from './Filter';
import { HeaderContainer, BackButton } from './styles';

const Header: React.FC = () => {
  const { pathname } = useRouter();
  const backButton = pathname.includes('character') ? true : false;

  return (
    <HeaderContainer>
      {backButton ? (
        <Link passHref href="/">
          <BackButton>{'< Back'}</BackButton>
        </Link>
      ) : (
        <>
          <Search/>
          <Filter/>
        </>
      )}
      
    </HeaderContainer>
  );
};

export default Header;
