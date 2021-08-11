import React from 'react';

import { BenefitContainer, BenefitH1, BenefitWrapper, BenefitList, BenefitIcon, BenefitTitle, BenefitDescription } from './Benefit.styled';
import { benefitList } from '../../constant/benefit';
import { titleSection } from '../../constant/titleSections';

const Benefit = () => {
  return (
    <BenefitContainer>
      <BenefitH1>{titleSection.benefitTitle}</BenefitH1>
      <BenefitWrapper>
        {
          benefitList.map((item, idx) => {
            return (
              <BenefitList key={idx}>
                <BenefitIcon src={item.icon} alt={item.title} />
                <BenefitTitle>{item.title}</BenefitTitle>
                <BenefitDescription>{item.desc}</BenefitDescription>
              </BenefitList>
            )
          })
        }
      </BenefitWrapper>
    </BenefitContainer>
  )
}

export default Benefit;
