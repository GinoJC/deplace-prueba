import React from "react";
import Search from "./Search";
import Filter from "./Filter";
import { HeaderContainer } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Search/>
      <Filter/>
    </HeaderContainer>
  );
};

export default Header;
