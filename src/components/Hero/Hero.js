import React from 'react';

import { HeroContainer, HeroBg, HeroImg, HeroContent, HeroItems, HeroH1, HeroP } from './Hero.styled';
import { ImageHero } from '../../assets';
import { heroContent } from '../../constant/hero';

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <HeroImg src={ImageHero} alt="hero-img" />
        </HeroBg>
        <HeroContent>
          <HeroItems>
              <HeroH1>{heroContent.heroTitle}</HeroH1>
              <HeroP>{heroContent.heroText}</HeroP>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    </>
  )
}

export default Hero;
