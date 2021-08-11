import React from 'react';
import { Logo } from '../../assets';
import { FooterContainer, ImageLogo } from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-logo">
        <ImageLogo src={Logo} alt="logo-odigo" />
      </div>
    </FooterContainer>
  )
}

export default Footer
