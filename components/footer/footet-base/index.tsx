import { ParagraphText } from '@/__style/global.style'
import { StyledDiv } from '@/__style/ui-block.style'
import React from 'react'
import styled from 'styled-components'

const FooterBase = () => {
  return (
    <StyledContainer>
      <StyledP
      fw='500'
      fsize='14px'
      lh='17.64'
      textAlign='center'
      color='#202020'
      >
      © Copyright 2024. All rights reserved.
      </StyledP>
    </StyledContainer>
  )
}

export default FooterBase
const StyledContainer = styled(StyledDiv)`
/* border: 1px solid green; */
/* width:1728px; */
width: 100%;
height: 113.87px;
padding: 48px 0px;

@media only screen and (max-width:768px){
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
`;

const StyledP = styled(ParagraphText)`
`;