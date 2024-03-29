import { StyledButton, StyledFlex, StyledFlexItem, StyledHeroSection } from '@/__style/ui-block.style'
import Image from 'next/image'
import React from 'react'
import { styled } from 'styled-components'
import PossibityImage from '../../public/assets/images/PossibilityImage.webp'
import PossibilityIcon from '../../public/assets/icons/check.png'
import PossibilityI from '../../public/assets/svg/background2.svg'
import { HeadingText, ParagraphText } from '@/__style/global.style'
import PossibilityItemized from './PossibilityItemized'

const EndlessPossibilities = () => {
  return (
    <StyledBackground>
    <StyledMainContainer>
      <StyledWrapper
      fDirection='row'
      justify='center'
      align='center'
      p='0 50px'
      // g='-20px'
      >
        <StyledLeft
        // grow
        // mWidth='637px'
        >


<Image 
src={PossibilityIcon} 
// width={69} 
// height={68.51} 
width={55} 
height={55.51}
alt='PossibilityIcon'
blurDataURL="/assets/icons/PossibilityIcon.png"
 />

<StyledParagraph
     fw='600'
     fsize='21px'
     lh='26.46px'
     textAlign='left'
    color='#202020'
    mb='-30px'
    // mt='-0px'
     >
     Why Choose Us
     </StyledParagraph>

        <StyledHeading
    // fsize='44px'
    //  fw='800'
    //  lh='55.44px'
    // fsize='40px'
     fw='800'
     lh='50.44px'
     align='left'
     color='#1B442A'
     mb='15px'

     >


      Discover <StyledSpan>Endless Possibilities  </StyledSpan> 
with Paydestal
     </StyledHeading>

     <PossibilityItemized />

        </StyledLeft>
        <StyledRight
        grow
        >

      <Image 
      src={PossibityImage} 
      width={708} 
      height={702.98} 
      // width={808} 
      // height={802.98} 
      alt='PossibityImage'
      blurDataURL="/assets/images/PossibilityImage.webp"
        />
        </StyledRight>
      </StyledWrapper>
    </StyledMainContainer>
    </StyledBackground>
  )
}

export default EndlessPossibilities

const StyledBackground = styled.div`
position: relative;
/* background-image: url('/assets/images/PossibilityBackground.webp'); */
background-image: url('/assets/svg/background2.svg');
  /* background-size: cover; */
  background-size: contain;
  // Image: solutions-business-bgg;
/* background-image: url("solutions-business-bgg.png"); */

  /* background-position: center; */

  /* &:before {
    content: '';
    position: absolute;
    top: 100%; 
    left: 0;
    width: 100%;
    height: 200px;
    background-image: inherit;
    background-size: cover;
    background-position: center;
  } */

  @media only screen and (max-width: 991px) {
    background-image: none;
  }
`;
const StyledMainContainer = styled(StyledHeroSection)`
position: relative;
bottom: 130px;
left: 70px;
/* top: 0px; */
max-height: 724.83px;


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
justify-content: flex-start;
align-items: flex-start;
/* min-width: 637px; */
/* max-height: 626.94px; */
max-height: 526.94px;
/* padding: 20px 0; */

/* @media only screen and (max-width:768px){
  justify-content: flex-start;
  align-items: flex-start;
} */
@media only screen and (max-width:991px){
  justify-content: flex-start;
  align-items: flex-start;
  /* text-align: center; */
  margin-top: 320px;
  
}

@media only screen and (max-width:568px) and (min-width:332px) {
  margin-top: 250px;
}
@media only screen and (min-width:1367px){
 min-width: 750px;
}
`;

const StyledHeading = styled(HeadingText)`
/* font-size: 40px; */
font-size: 30px;
/* @media only screen and (min-width:1367px){
font-size: 70px;
} */
@media only screen and (max-width:991px){
  text-align: left;

}
@media only screen and (max-width:768px){
/* font-size: 34px; */
/* line-height: 42.84px; */

/* font-family: Plus Jakarta Sans; */
font-size: 25px;
/* font-weight: 800; */
line-height: 31.5px;
text-align: left;
margin-bottom: 40px;
/* margin-top: 10px; */
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
font-size: 16px;
font-size: 16px;
line-height: 20.16px;
text-align: left;
margin-bottom: 0;
}
`;

const StyledRight = styled(StyledFlexItem)`
min-width: 588px;
height: 565.96;

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media only screen and (max-width:991px){
  max-width: 731px;
}
@media only screen and (max-width: 768px){
  display: none;
}
`;

