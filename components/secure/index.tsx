import { StyledButton, StyledContainer, StyledFlex, StyledFlexItem, StyledHeroSection, StyledLink } from '@/__style/ui-block.style'
import Image from 'next/image'
import React from 'react'
import { styled } from 'styled-components'
import SecureLeft from '../../public/assets/images/secureSectionImage.webp'
import SecureLeftMobile from '../../public/assets/images/SecureMobile.webp'
import { HeadingText, ParagraphText } from '@/__style/global.style'
import IconComponent from './IconComponent'

const SecureSection = () => {
  return (
    <StyledMainContainer>
      <StyledWrapper
      fDirection='row'
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
// grow
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
    // fsize='18px'
    // lh='20.46px'
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
    fw='800'
    // fsize='40px'
    // lh='50.44px'
     textAlign='left'
     color='#FFFFFF'
     >
     Simple. Transparent. Secure 
     </StyledSubHeading>

     <StyledParagraph
     fw='400'
     >
    All your business financial needs covered with a full range of our  services
     </StyledParagraph>
     <StyledParagraph
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
margin-bottom: 170px;
/* border: 1px solid red; */
max-height: 824.12px;

@media only screen and (min-width: 769px) and (max-width: 820px) {
 /* border:5px solid red; */
 margin-top: 650px;

}

@media only screen and (min-width: 821px) and (max-width: 991px) {
 /* border:5px solid red; */
 margin-top: 800px;
}

@media only screen and (max-width: 768px){
 /* border:5px solid red; */
 margin-top: -180px;
}
`;

const StyledWrapper = styled(StyledFlex)`
/* border: 1px solid yellow; */
justify-content: space-between;
align-items: center;
flex-direction: row;

@media only screen and (min-width: 769px) and (max-width: 991px) {
 flex-direction: column-reverse;
}

@media only screen and (max-width:991px){
  //flex-wrap:wrap-reverse ;
  /* border: 1px solid red; */
  flex-wrap: wrap;
margin-top: 250px;
gap: 70px;
/* width: 100%; */
}

@media only screen and (max-width:768px){
  /* display: column; */
  /* flex-direction: row-reverse; */
  justify-content: center;
  /* flex-direction: column-reverse; */

  /* flex-wrap: wrap-reverse; */
}
`;

const StyledLeft = styled(StyledFlexItem)`
/* width={682.43} 
height={500.48}  */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 682.43px;
height: 500.48px;
/* flex-grow: ; */

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media only screen and (min-width:992px) and (max-width:1727px){
  /* border: 1px solid green; */
  max-width: 500.43px;
height: 350.48px;
}
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
background-color: #1B442A;
/* border-top-left-radius: 338px; */
/* border-bottom-left-radius: 338px; */
/* padding: 60px 70px 60px 200px; */
box-shadow: 0px 16px 29.799999237060547px 0px #00000040;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
/* max-height: 665.25px; */
/* max-width: 1387px; */


@media only screen and (min-width:1728px){
border-top-left-radius: 338px;
border-bottom-left-radius: 338px;
padding: 60px 70px 60px 200px;
max-height: 665.25px;
max-width: 1387px;

}


@media only screen and (min-width:992px) and (max-width:1727px){
  padding: 50px 60px 50px 150px;
max-width: 1000px;
height: 365.25px;
border-top-left-radius: 330px;
border-bottom-left-radius: 330px;
}

/* @media only screen and (max-width:991px){
  padding: 30px 0px 30px 300px;
margin: auto;
} */

@media only screen and (min-width:769px) and (max-width:991px){
  /* border: 1px solid red; */

  padding: 50px 60px 50px 150px;
min-width: 725px;
height: 365.25px;
border-top-left-radius: 330px;
border-bottom-left-radius: 330px;
  /* padding: 50px 60px 50px 150px; */
/* max-width: 1000px; */
/* height: 365.25px; */
}


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
  //  fw='800'
    //  fsize='44px'
    //  lh='55.44px'
    font-size: 44px;
    line-height: 55.44px;

    @media only screen and (min-width:992px) and (max-width:1198px){
font-size: 30px;
line-height: 30px;
}
    @media only screen and (min-width:1199px) and (max-width:1727px){
font-size: 35px;
line-height: 40px;
}
@media only screen and (max-width:768px){
font-size: 25px;
font-weight: 800;
line-height: 31.5px;
text-align: left;
}
`;

const StyledServices = styled(ParagraphText)`
 //  fsize='21px'
    //  lh='26.46px'
    font-size: 21px;
    line-height: 26.46px;

    @media only screen and (min-width:992px) and (max-width:1198px){
font-size: 16px;
line-height: 18px;
}
    @media only screen and (min-width:1199px) and (max-width:1727px){
font-size: 18px;
line-height: 20px;
}
/* @media only screen and (min-width:1367px){
} */
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
    font-size: 20px;
    line-height: 25.2px;
    text-align: left;
    color: #FFFFFF;
    max-width: 550px;

  @media only screen and (min-width:992px) and (max-width:1727px){
font-size: 17px;
line-height: 18px;
max-width: 470px;
}

@media only screen and (min-width:769px) and (max-width:991px){
  text-align: left;

}

@media only screen and (max-width:768px){
font-size: 16px;
font-weight: 400;
line-height: 20.16px;
text-align: left;
}
`;


