import * as React from "react";

import { HeaderContainer, HeaderLogo, LogoImage } from './header.styled';
import { Logo } from "../../assets";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo to="/" >
        <LogoImage src={Logo} alt="odigo-logo" />
      </HeaderLogo>
    </HeaderContainer>
  )
}

export default Header;
