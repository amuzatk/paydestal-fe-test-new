// import { StyledButton, StyledFlex, StyledFlexItem, StyledHeroSection } from '@/__style/ui-block.style'
// import Image from 'next/image'
// import React from 'react'
// import { styled } from 'styled-components'
// // import HeroImage from '../../../public/assets/images/HeroImage.webp'
// import HeroImage from '../../public/assets/images/HeroImage.webp'
// // import RightArrow from '../../../public/assets/icons/RightArrow.png'
// import RightArrow from '../../public/assets/icons/RightArrow.png'
// import { HeadingText, ParagraphText } from '@/__style/global.style'

// const FooterComponent = () => {
//   return (
//     <StyledMainContainer>
//       <StyledWrapper
//       fDirection='row'
//       justify='center'
//       align='center'
//       >
//         <StyledLeft
//         grow
//         mWidth='731px'
//         >
//         <StyledHeading
//     fsize='61px'
//      fw='800'
//      lh='88.2px'
//      align='left'
//      color='#1B442A'

//      >
//      The future of <StyledSpan>Payment </StyledSpan> Processing and Settlement 
//      </StyledHeading>

//      <StyledParagraph
//      fw='400'
//      fsize='17px'
//      lh='25.2px'
//      textAlign='left'
//     color='#202020'
//      >
//      Revolutionizing financial transactions with a comprehensive suite of services 
// ensuring seamless and secure payment solutions for diverse needs
//      </StyledParagraph>

//      <StyledGetStartedCont2>
// <StyledGetStartedBtn>
//   Get Started
// </StyledGetStartedBtn>
// <Image 
// src={RightArrow} 
// width={7} 
// height={14} 
// alt='RightArrow'
// blurDataURL="/assets/icons/RightArrow.png"
//  />
// </StyledGetStartedCont2>
//         </StyledLeft>
//         <StyledRight
//         grow
//         >
//       <Image 
//       src={HeroImage} 
//       width={588} 
//       height={565.96} 
//       alt='HeroImage'
//       blurDataURL="/assets/images/HeroImage.webp"
//         />
//         </StyledRight>
//       </StyledWrapper>
//     </StyledMainContainer>
//   )
// }

// export default FooterComponent

// const StyledMainContainer = styled(StyledHeroSection)`
// max-height: 724.83px;
// `;

// const StyledWrapper = styled(StyledFlex)`
// @media only screen and (max-width:991px){
//   flex-wrap: wrap;
// }
// `;

// const StyledSpan = styled.span`
// color: #F4B23E;
// `;

// const StyledLeft = styled(StyledFlexItem)`
// display: flex;
// flex-direction: column;
// justify-content: flex-start;
// align-items: flex-start;
// /* border: 1px solid red; */
// @media only screen and (max-width:768px){
//   justify-content: center;
//   align-items: center;
// }

// @media only screen and (min-width:1367px){
//  min-width: 750px;
// }
// `;

// const StyledHeading = styled(HeadingText)`
// @media only screen and (min-width:1367px){
// font-size: 70px;
// }
// @media only screen and (max-width:991px){
//   text-align: center;
// }
// @media only screen and (max-width:768px){
// font-size: 34px;
// line-height: 42.84px;
// }
// `;

// const StyledParagraph = styled(ParagraphText)`
// @media only screen and (min-width:1367px){
//     font-size: 20px;
// }
// @media only screen and (max-width:991px){
//   text-align: center;
// }
// @media only screen and (max-width:768px){
//   text-align: center;
// font-size: 16px;
// line-height: 24px;
// }
// `;

// const StyledRight = styled(StyledFlexItem)`
// min-width: 588px;
// height: 565.96;

// img{
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// }
// @media only screen and (max-width:991px){
//   max-width: 731px;
// }
// @media only screen and (max-width: 768px){
//   display: none;
// }
// `;

// const StyledGetStartedCont2 = styled.button`
// width: 189px;
// max-height: 60px;
// padding: 16px 30px;
// column-gap: 11px;
// border-radius: 100px;
// opacity: 0px;
// background-color: #1B442A;
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// border: none;
// margin-top: 49.65px;
// @media only screen and (max-width:991px){
// /* width: 189px; */
//   width: 100%;
// }
// @media only screen and (max-width:768px){
// width: 189px;
// height: 56px;
// padding: 14px 30px;
// }
// `;

// const StyledGetStartedBtn = styled(StyledButton)`
// max-height: 20px;
// opacity: 0px;
// color: #FFFFFF;
// font-size: 16px;
// font-weight: 400;
// line-height: 20.16px;
// text-align: left;
// `;


import { StyledButton, StyledFlex, StyledFlexItem, StyledHeroSection } from '@/__style/ui-block.style'
import Image from 'next/image'
import React from 'react'
import { styled } from 'styled-components'
import PossibityImage from '../../public/assets/images/PossibilityImage.webp'
import PossibilityIcon from '../../public/assets/icons/check.png'
import PossibilityI from '../../public/assets/svg/background2.svg'
import { HeadingText, ParagraphText } from '@/__style/global.style'
import PossibilityItemized from '../possibilities/PossibilityItemized'
// import PossibilityItemized from './PossibilityItemized'

const FooterComponent = () => {
  return (
    <StyledBackground>
    <StyledMainContainer>




      {/* <StyledWrapper
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
      </StyledWrapper> */}



    </StyledMainContainer>
    </StyledBackground>
  )
}

export default FooterComponent

const StyledBackground = styled.div`
position: relative;
/* background-image: url('/assets/images/PossibilityBackground.webp'); */
background-image: url('/assets/images/footerBackground.png');
  /* background-size: cover; */
  background-size: contain;
  background-repeat: no-repeat;
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

