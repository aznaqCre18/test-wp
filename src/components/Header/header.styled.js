import styled from 'styled-components';
import { Link } from "gatsby";

export const HeaderContainer = styled.div`
  height: 80px;
  background-color: transparent;
  z-index: 100;
  display: flex;
  position: relative;
  align-items: center;
  padding: 0.5rem calc((100vw - 768px) / 2.5);

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const HeaderLogo = styled(Link)``;

export const LogoImage = styled.img`
  width: 65px;
  cursor: pointer;
  user-select: none;
`;
