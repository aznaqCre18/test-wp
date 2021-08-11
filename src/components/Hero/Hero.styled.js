import styled from 'styled-components';

export const HeroContainer = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110vh;
  margin-top: -80px;
  padding: 0 calc((100vw - 768px) / 2.5);
  position: relative;
  color: #fff;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.4);
  }

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HeroImg = styled.img`
  z-index: 5;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const HeroContent = styled.div`
  z-index: 3;
`;

export const HeroItems = styled.div`
  margin-top: -180px;

  @media screen and (max-width: 1024px) {
    margin-top: 0;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;

export const HeroH1 = styled.h1`
  font-family: 'Poppins Light';
  width: 60%;
  margin-bottom: 12px;
  font-size: clamp(1.5rem, 5vw, 1.8rem);

  @media screen and (max-width: 768px) {
    width: 100%;
    font-family: "Poppins Medium"
  }

  @keyframes example {
    0% {
      opacity: 0;
      transform: translateX(-200px);
    };
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  animation: example .8s ease-in-out;
`;
export const HeroP = styled.p`
  width: 70%;
  font-size: clamp(.6rem, 4vw, 1rem);

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @keyframes exampleP {
    0% {
      opacity: 0;
      transform: translateX(-200px);
    };
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  animation: exampleP .8s ease-in-out;
`;