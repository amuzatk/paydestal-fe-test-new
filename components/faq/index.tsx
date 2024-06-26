import { StyledFaqSection, StyledFlex, StyledFlexItem } from '@/__style/ui-block.style'
import React from 'react'
import { styled } from 'styled-components'
import { HeadingText, ParagraphText } from '@/__style/global.style'
import FaqCollapse2 from './Collapse2'

const Faq = () => {
  return (
    <>
    <StyledMainContainer>
      <StyledWrapper
      fDirection='column'
      justify='center'
      align='center'
      >
        <StyledTop
        grow
        >

<StyledP
     fw='600'
     >
     If you have a question, we have an answer
     </StyledP>
        <StyledHeading
     align='center'
    //  color='#1B442A'
    // color='red'
    color="var(--primary-text)"
     >
    Frequently Asked Questions
     </StyledHeading>

     <StyledParagraph
     fw='400'
     fsize='24px'
     lh='30.22px'
     textAlign='left'
    color='#202020'
    mb='49px'

     >
     Get answers to all questions you have and boost your knowledge on our services.
     </StyledParagraph>
        </StyledTop>
        <StyledBottom
        >
      <FaqCollapse2 />
        </StyledBottom>
      </StyledWrapper>
    </StyledMainContainer>
</>
  )
}

export default Faq

const StyledMainContainer = styled(StyledFaqSection)`
max-height: 895.61px;
margin-bottom: 300px;

@media only screen and (min-width:1728px){
margin-top: 100px;
}

@media only screen and (min-width:992px) and (max-width:1727px){
margin-top: 90px;
}

@media only screen and (min-width:769px) and (max-width:991px){
  flex-wrap: wrap;
margin-top: 95px;
}

@media only screen and (max-width:768px){
  margin-top: -70px;
}
`;

const StyledWrapper = styled(StyledFlex)`
`;

const StyledTop = styled(StyledFlexItem)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media only screen and (max-width:768px){
  justify-content: center;
  align-items: center;
  padding: 0 25px;
}
`;

const StyledHeading = styled(HeadingText)`
     font-weight: 800;

@media only screen and (min-width:1728px){
     font-size: 44px;
     line-height: 55.44px;
}

@media only screen and (min-width:992px) and (max-width:1727px){
  font-size: 40px;
     line-height: 51.44px;
}

@media only screen and (min-width:769px) and (max-width:991px){
  text-align: center;
  font-size: 38px;
     line-height: 50.44px;
}

@media only screen and (max-width:768px){
font-size: 25px;
line-height: 31.5px;
}
`;


const StyledP = styled(ParagraphText)`
color: #202020;
text-align: center;

@media only screen and (min-width:1728px){
    font-size: 21px;
    line-height: 26.47px;
}

@media only screen and (min-width:992px) and (max-width:1727px){
  font-size: 20px;
    line-height: 25.47px;
}

@media only screen and (min-width:769px) and (max-width:991px){
  font-size: 18px;
  line-height: 22.47px;
}

@media only screen and (max-width:768px){
font-size: 14px;
font-weight: 600;
line-height: 17.64px;
}
`;

const StyledParagraph = styled(ParagraphText)`

font-weight: 400;
text-align: center;

@media only screen and (min-width:1728px){
font-size: 24px;
line-height: 30.24px;
}

@media only screen and (min-width:992px) and (max-width:1727px){
  font-size: 22px;
     line-height: 28.24px;
}
@media only screen and (min-width:769px) and (max-width:991px){
  font-size: 20px;
  line-height: 26.24px;
}
@media only screen and (max-width:768px){
font-size: 16px;
line-height: 20.16px;
}
`;

const StyledBottom = styled(StyledFlexItem)`


@media only screen and (min-width:1728px){
  max-width: 893px;
}

@media only screen and (min-width:992px) and (max-width:1727px){
  max-width: 800px;
}

@media only screen and (max-width:991px){
  max-width: 731px;
}
@media only screen and (max-width: 768px){
  padding: 0 25px;
}
`;