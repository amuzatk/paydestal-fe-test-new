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


import { StyledButton, StyledDiv, StyledFlex, StyledFlexItem, StyledHeroSection } from '@/__style/ui-block.style'
import Image from 'next/image'
import React from 'react'
import { styled } from 'styled-components'
import PossibityImage from '../../public/assets/images/PossibilityImage.webp'
import PossibilityIcon from '../../public/assets/icons/check.png'
import PossibilityI from '../../public/assets/svg/background2.svg'
import InstagramIcon from '../../public/assets/icons/InstagramSvg.svg'
import TwitterIcon from '../../public/assets/icons/TwitterSvg.svg'
import FacebookIcon from '../../public/assets/icons/facebookSvg.svg'
import LocationIcon from '../../public/assets/icons/locationIcon.png'
import EmailIcon from '../../public/assets/icons/emailIcon.png'
import TelephoneIcon from '../../public/assets/icons/telephoneIcon.png'


import { HeadingText, ParagraphText } from '@/__style/global.style'
import PossibilityItemized from '../possibilities/PossibilityItemized'
// import PossibilityItemized from './PossibilityItemized'
// import FooterWebLogo from '../../../public/assets/images/logoFooterWeb.png'
import FooterWebLogo from '../../public/assets/images/logoFooterWeb.png'
import ReadyToStart from './ReadyToStart'


const FooterComponent = () => {
  return (
    <StyledBackground>
      <StyledGetStarted>
      <ReadyToStart />
      </StyledGetStarted>
    <StyledMainContainer>


    <StyledFirst>
<Image src={FooterWebLogo} width={304.49} height={70} alt='FooterWebLogo'  />
<ParagraphText
>
A modern, technology payment processing and settlement built for you and your business.
</ParagraphText>
<StyledFlex
g='15px'
>
<Image src={InstagramIcon} width={40} height={40} alt='InstagramIcon'  />
<Image src={TwitterIcon} width={40} height={40} alt='TwitterIcon'  />
<Image src={FacebookIcon} width={40} height={40} alt='FacebookIcon'  />

  </StyledFlex> 
        </StyledFirst>

<StyledSecond>

<ParagraphText
fsize='24px'
fw='600'
lh='30.24px'
textAlign='left'
color=' #1B442A'
>
Company
</ParagraphText>

<ParagraphText
fsize='20px'
fw='400'
lh='25.2px'
textAlign='left'
color='#202020'
>

About Us
</ParagraphText>

<ParagraphText
fsize='20px'
fw='400'
lh='25.2px'
textAlign='left'
color='#202020'
>

Developer
</ParagraphText>

<ParagraphText
fsize='20px'
fw='400'
lh='25.2px'
textAlign='left'
color='#202020'
>

FAQ
</ParagraphText>
</StyledSecond>


<StyledThird>

<ParagraphText
fsize='24px'
fw='600'
lh='30.24px'
textAlign='left'
color=' #1B442A'
>
Legal
</ParagraphText>

<ParagraphText
fsize='20px'
fw='400'
lh='25.2px'
textAlign='left'
color='#202020'
>

Support Policy 
</ParagraphText>

<ParagraphText
fsize='20px'
fw='400'
lh='25.2px'
textAlign='left'
color='#202020'
>

Privacy Policy 
</ParagraphText>

<ParagraphText
fsize='20px'
fw='400'
lh='25.2px'
textAlign='left'
color='#202020'
>

Terms & Conditions
</ParagraphText>

</StyledThird>
<StyledFourth>
<ParagraphText
fsize='24px'
fw='600'
lh='30.24px'
textAlign='left'
color=' #1B442A'
>
Our Office
</ParagraphText>

<ParagraphText
fsize='20px'
fw='400'
lh='25.2px'
textAlign='left'
color='#202020'
style={{
  display:"flex",
  flexDirection:"row",
  justifyContent:"center",
  alignItems:"center",
  gap:"10px"
}}
>
<Image src={LocationIcon} width={20} height={20} alt='LocationIcon'  />
 6 Alhaji Bakinson Street, Ikeja, Lagos Nigeria
</ParagraphText>


<ParagraphText
fsize='20px'
fw='400'
lh='25.2px'
textAlign='left'
color='#202020'
style={{
  display:"flex",
  flexDirection:"row",
  justifyContent:"center",
  alignItems:"center",
  gap:"10px"
}}
>
<Image src={EmailIcon} width={20} height={20} alt='EmailIcon'  />
 support@paydestal.com
</ParagraphText>

<ParagraphText
fsize='20px'
fw='400'
lh='25.2px'
textAlign='left'
color='#202020'
style={{
  display:"flex",
  flexDirection:"row",
  justifyContent:"center",
  alignItems:"center",
  gap:"10px"
}}
>
<Image src={TelephoneIcon} width={20} height={20} alt='TelephoneIcon'  />
 +234 80 9990 0045
</ParagraphText>

</StyledFourth>
    </StyledMainContainer>
    </StyledBackground>
  )
}

export default FooterComponent
const StyledGetStarted = styled(StyledDiv)`
/* border: 1px solid red; */
position: absolute;
left: 155px;
/* bottom: 0px; */
top: 2055px;
`;
const StyledBackground = styled.div`
/* position: relative; */
/* background-image: url('/assets/images/PossibilityBackground.webp'); */
background-image: url('/assets/images/footerBackground.png');
  /* background-size: cover; */
  background-size: contain;
  background-repeat: no-repeat;
  // Image: solutions-business-bgg;
/* background-image: url("solutions-business-bgg.png"); */

  @media only screen and (max-width: 991px) {
    background-image: none;
  }
`;
const StyledMainContainer = styled.div`
position: relative;
/* bottom: 130px; */
/* left: 70px; */
top: 290px;
/* min-height: 702.24px; */
min-height: 502.24px;
max-width: 1428px;
display: flex;
flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 70px;
`;

const StyledFirst = styled(StyledDiv)`
/* border: 1px solid red; */
flex-basis: 30%;
max-width: 436px;
height: 195px;
display: flex;
flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* flex-grow: 1; */
  gap: 15px;

`;
const StyledSecond = styled(StyledDiv)`
/* border: 1px solid green; */
flex-basis: 20%;
max-width: 137px;
height: 195px;
display: flex;
flex-direction: column;
justify-content: flex-start;
  align-items: flex-start;
  /* flex-grow: 1; */


`;
const StyledThird = styled(StyledDiv)`
/* border: 1px solid yellow; */
flex-basis: 20%;
max-width: 187px;
height: 195px;
display: flex;
flex-direction: column;
justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;

`;
const StyledFourth = styled(StyledDiv)`
/* border: 1px solid red; */
flex-basis: 30%;
max-width: 444px;
height: 195px;
flex-grow: 1;

display: flex;
flex-direction: column;
justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
`;
