import {  StyledContainer, StyledDiv, StyledFlex, StyledFlexItem } from '@/__style/ui-block.style'
import Image from 'next/image'
import React from 'react'
import { styled } from 'styled-components'
import SecureLeft from '../../public/assets/images/secureSectionImage.webp'
import SecureLeftMobile from '../../public/assets/images/SecureMobile.webp'
import { ParagraphText } from '@/__style/global.style'
import IconComponent from './IconComponent'

const SecureSection = () => {
  return (
    <StyledMainContainer>
      <StyledWrapper
      fDirection='row'
      >

        <StyledLeft >
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
>
<Image 
src={SecureLeftMobile} 
width={782.43} 
height={600.48} 
alt='SecureLeft'
blurDataURL="/assets/images/SecureMobile.webp"
 />
 </StyledMobileImage>
        </StyledLeft>

        <StyledRight>
          <StyledServices
    fw='400'
     textAlign='left'
    color='#F4B23E'
    mb='-30px'
     >
     Our Services
     </StyledServices>

<StyledSubHeading
    fw='800'
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

<StyledIcon>
<IconComponent />
</StyledIcon>
        </StyledRight>
      </StyledWrapper>
    </StyledMainContainer>
  )
}

export default SecureSection

const StyledMainContainer = styled(StyledContainer)`
margin-top: 70px;
margin-bottom: 170px;
max-height: 824.12px;

@media only screen and (min-width: 769px) and (max-width: 820px) {
 margin-top: 650px;

}

@media only screen and (min-width: 821px) and (max-width: 991px) {
 margin-top: 800px;
}

@media only screen and (max-width: 768px){
 margin-top: -180px;
}
`;

const StyledWrapper = styled(StyledFlex)`
justify-content: space-between;
align-items: center;
flex-direction: row;

@media only screen and (min-width: 769px) and (max-width: 991px) {
 flex-direction: column-reverse;
}

@media only screen and (max-width:991px){
flex-wrap: wrap;
margin-top: 250px;
gap: 70px;
}

@media only screen and (max-width:768px){
  justify-content: center;
  /* border: 1px solid red; */
margin-bottom: 0px;
}
@media only screen and (max-width:500px){
  /* justify-content: center; */
  margin-top: 190px;
  /* border: 1px solid red; */
}
`;

const StyledLeft = styled(StyledFlexItem)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 682.43px;
height: 500.48px;

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
box-shadow: 0px 16px 29.799999237060547px 0px #00000040;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;


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

@media only screen and (min-width:769px) and (max-width:991px){
  padding: 50px 60px 50px 150px;
min-width: 725px;
height: 365.25px;
border-top-left-radius: 330px;
border-bottom-left-radius: 330px;
}


@media only screen and (max-width:768px){
  border-top-left-radius: 0;
border-bottom-left-radius: 0;
padding: 80px 60px 80px 24px;
width: 100%;

}
@media only screen and (max-width:568px){
  margin-top: -110px;
}
`;

const StyledIcon = styled(StyledDiv)`
@media only screen and (min-width:1728px){
padding-top: 32.2px;
}

@media only screen and (min-width:992px) and (max-width:1727px){
  padding-top: 25.2px;
}

@media only screen and (max-width:991px){
  padding-top: 20.2px;
}
`;

const StyledSubHeading = styled(ParagraphText)`
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


