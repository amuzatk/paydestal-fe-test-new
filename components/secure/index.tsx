import { StyledButton, StyledContainer, StyledFlex, StyledFlexItem, StyledHeroSection, StyledLink } from '@/__style/ui-block.style'
import Image from 'next/image'
import React from 'react'
import { styled } from 'styled-components'
import SecureLeft from '../../public/assets/images/secureSectionImage.webp'
import SecureLeftMobile from '../../public/assets/images/SecureMobile.webp'
import { HeadingText, ParagraphText } from '@/__style/global.style'
// import { SECURE_SECTION_LINKS } from '@/component/navigations/links'
import IconComponent from './IconComponent'

const SecureSection = () => {
  return (
    <StyledMainContainer>
      <StyledWrapper
      fDirection='row'
      // justify='center'
      justify='space-between'
      align='center'
      >

        <StyledLeft
        // grow
        // mWidth='731px'
        >
          <StyledMobileWeb>
<Image 
src={SecureLeft} 
width={682.43} 
height={500.48} 
alt='SecureLeft'
blurDataURL="/assets/images/secureSectionImage.webp"
 />
</StyledMobileWeb>
<StyledMobileImage
grow
// basis='200px'
>
<Image 
src={SecureLeftMobile} 
// width={382} 
// height={254} 
width={782.43} 
height={600.48} 
alt='SecureLeft'
blurDataURL="/assets/images/SecureMobile.webp"
 />
 </StyledMobileImage>
        </StyledLeft>

        <StyledRight
        // grow
        >
          <StyledServices
    //  fw='400'
    //  fsize='21px'
    //  lh='26.46px'
    fw='400'
    fsize='18px'
    lh='20.46px'
     textAlign='left'
    color='#F4B23E'
    mb='-30px'
     >
     Our Services
     </StyledServices>

<StyledSubHeading
    //  fw='800'
    //  fsize='44px'
    //  lh='55.44px'
    fw='700'
    fsize='40px'
    lh='50.44px'
     textAlign='left'
     color='#FFFFFF'
     >
     Simple. Transparent. Secure 
     </StyledSubHeading>

     <StyledParagraph
     fw='400'
    //  fsize='20px'
    fsize='18px'
    //  lh='25.2px'
    lh='22.2px'
     textAlign='left'
     color='#FFFFFF'
    //  p='0 25px'
    // pr='10px'
    mw='490px'
     >
    All your business financial needs covered with a full range of our  services
     </StyledParagraph>
     <StyledParagraph
    //  fw='400'
    //  fsize='20px'
    //  lh='25.2px'
    //  textAlign='left'
    //  color='#FFFFFF'
     >
<IconComponent />
</StyledParagraph>
        </StyledRight>
      </StyledWrapper>
    </StyledMainContainer>
  )
}

export default SecureSection

const StyledMainContainer = styled(StyledContainer)`
margin-top: 70px;
/* border: 1px solid red; */
max-height: 824.12px;
max-width: 1728px;

@media only screen and (min-width: 769px) and (max-width: 991px) {
 /* border:5px solid red; */
 margin-top: 480px;
}
`;

const StyledWrapper = styled(StyledFlex)`

@media only screen and (max-width:991px){
  flex-wrap: wrap;
}

@media only screen and (max-width:768px){
  justify-content: center;
}
`;

const StyledLeft = styled(StyledFlexItem)`
/* width={682.43} 
height={500.48}  */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 550.43px;
height: 500.48px;

`;
const StyledMobileWeb = styled.div`
img{
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
}
@media only screen and (max-width:768px){
  display: none;
}
`;
const StyledMobileImage = styled(StyledFlexItem)`
max-width: 600px;
margin-top: -30px;
img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}
@media only screen and (max-width:568px){
  margin-top: -140px;
}
@media only screen and (min-width:769px){
  display: none;
}

`;

const StyledRight = styled(StyledFlexItem)`

/* background-color: lightblue; */
background-color: #1B442A;
border-top-left-radius: 338px;
/* border-top-left-radius: 500px; */
border-bottom-left-radius: 338px;
/* padding: 60px 60px 60px 100px; */
padding: 50px 60px 50px 130px;
/* filter: drop-shadow(0px 16px 29.8px rgba(0,0,0,.25)); */
box-shadow: 0px 16px 29.799999237060547px 0px #00000040;
/* min-width: 682.43px; */
/* min-width: 782.43px; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
/* min-height: 365.25px; */
/* border: 1px solid red; */
max-height: 665.25px;



@media only screen and (max-width:768px){
  /* border: 1px solid red; */
  border-top-left-radius: 0;
border-bottom-left-radius: 0;
padding: 80px 60px 80px 24px;
/* padding: 0; */
  /* display: none; */
  /* text-align: center;

padding: 30px 15px ;
/* padding: 0; */
width: 100%;
/* margin-top: 25px; */

}
@media only screen and (max-width:568px){
  margin-top: -110px;
}
`;

const StyledSubHeading = styled(ParagraphText)`
@media only screen and (max-width:768px){
font-size: 25px;
font-weight: 800;
line-height: 31.5px;
text-align: left;
}
`;

const StyledServices = styled(ParagraphText)`
@media only screen and (min-width:1367px){
    font-size: 20px;
}
@media only screen and (max-width:991px){
  text-align: center;
}
@media only screen and (max-width:768px){
font-size: 16px;
font-weight: 600;
line-height: 20.16px;
text-align: left;
padding-bottom:10px;
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
font-weight: 400;
line-height: 20.16px;
text-align: left;

}
`;


