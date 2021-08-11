import styled from 'styled-components';

export const BenefitContainer = styled.div`
  width: 95%;
  background-color: #fff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  margin: auto;
  margin-top: -200px;
  margin-bottom: 100px;
  position: relative;
  z-index: 4;
  padding: 5vw 70px;
`;

export const BenefitH1 = styled.h1`
  font-size: clamp(1.3rem, 5vw, 1.8rem);
  font-family: 'Poppins Light';
  margin-bottom: 60px;
  color: #102746;

    @media screen and (max-width: 1024px) {
      text-align: center;
  }
`;

export const BenefitWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
      flex-direction: column;
      text-align: center;
  }
`;

export const BenefitList = styled.div`
  @media screen and (max-width: 768px) {
      margin-bottom: 32px;
      width: 100%;
  }
`;

export const BenefitIcon = styled.img`
  margin-bottom: 20px;
  width: 50px;
`;

export const BenefitTitle = styled.p`
  margin-bottom: 12px;
  font-family: 'Poppins Medium'
`;

export const BenefitDescription = styled.p`
  font-size: clamp(12px, 2vw, 14px);
  width: 92%;
  @media screen and (max-width: 768px) {
      width: 100%;
  }
`;