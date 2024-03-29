import { StyledButton, StyledFlex, StyledFlexItem, StyledHeroSection } from '@/__style/ui-block.style'
import Image from 'next/image'
import React from 'react'
import { styled } from 'styled-components'
import HeroImage from '../../../public/assets/images/HeroImage.webp'
import RightArrow from '../../../public/assets/icons/RightArrow.png'
import { HeadingText, ParagraphText } from '@/__style/global.style'
import FaqCollapse from './FaqCollapse'
// import FaqCollapse from './FaqCollapse/FaqCollapse'

const Faq = () => {
  return (
    <>
    <StyledMainContainer>
      <StyledWrapper
      fDirection='column'
      justify='center'
      align='center'
      >
        <StyledLeft
        grow
        // mWidth='731px'
        >

<StyledParagraph
     fw='600'
     fsize='21px'
     lh='26.47px'
     textAlign='center'
    color='#202020'
    // bb='2px solid blue'
    mb='-20px'
     >
     If you have a question, we have an answer
     </StyledParagraph>
        <StyledHeading
    fsize='44px'
     fw='800'
     lh='55.44px'
     align='center'
     color='#1B442A'
    //  mt='-20px'
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
        </StyledLeft>
        <StyledRight
        grow
        >
      {/* <FaqCollapse /> */}
        </StyledRight>
      </StyledWrapper>
    </StyledMainContainer>
      <FaqCollapse />
</>
  )
}

export default Faq

const StyledMainContainer = styled(StyledHeroSection)`
/* border: 1px solid red; */
max-height: 895.61px;
/* max-width: 1728px; */
margin-top: 60px;
`;

const StyledWrapper = styled(StyledFlex)`
@media only screen and (max-width:991px){
  flex-wrap: wrap;
}
`;

const StyledSpan = styled.span`
color: #F4B23E;
`;

const StyledLeft = styled(StyledFlexItem)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* border: 1px solid red; */
@media only screen and (max-width:768px){
  justify-content: center;
  align-items: center;
}

@media only screen and (min-width:1367px){
 min-width: 750px;
}
`;

const StyledHeading = styled(HeadingText)`
@media only screen and (min-width:1367px){
font-size: 70px;
}
@media only screen and (max-width:991px){
  text-align: center;
}
@media only screen and (max-width:768px){
font-size: 34px;
line-height: 42.84px;
}
`;

const StyledParagraph = styled(ParagraphText)`
@media only screen and (min-width:1367px){
    font-size: 20px;
}
@media only screen and (max-width:991px){
  text-align: center;
}
@media only screen and (max-width:768px){
  text-align: center;
font-size: 16px;
line-height: 24px;
}
`;

const StyledRight = styled(StyledFlexItem)`
/* min-width: 588px; */
/* height: 565.96; */

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media only screen and (max-width:991px){
  max-width: 731px;
}
@media only screen and (max-width: 768px){
  /* display: none; */
}
`;

const StyledGetStartedCont2 = styled.button`
width: 189px;
max-height: 60px;
padding: 16px 30px;
column-gap: 11px;
border-radius: 100px;
opacity: 0px;
background-color: #1B442A;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
border: none;
margin-top: 49.65px;
@media only screen and (max-width:991px){
/* width: 189px; */
  width: 100%;
}
@media only screen and (max-width:768px){
width: 189px;
height: 56px;
padding: 14px 30px;
}
`;

const StyledGetStartedBtn = styled(StyledButton)`
max-height: 20px;
opacity: 0px;
color: #FFFFFF;
font-size: 16px;
font-weight: 400;
line-height: 20.16px;
text-align: left;
`;
