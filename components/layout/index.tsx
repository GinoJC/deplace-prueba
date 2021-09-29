import React from 'react';
import Header from './Header';
import { GlobalContainer, ChildrenContainer, LayoutContainer } from './styles';

const Layout: React.FC = ({children}) => {
  return (
    <GlobalContainer>
      <LayoutContainer>
        <Header/>
        <ChildrenContainer>
          {children}
        </ChildrenContainer>
      </LayoutContainer>
    </GlobalContainer>
  );
};

export default Layout;
