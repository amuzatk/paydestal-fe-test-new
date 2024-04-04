import { ParagraphText } from '@/__style/global.style';
import { StyledContainerFluid, StyledDiv, StyledFlex } from '@/__style/ui-block.style';
import React from 'react'
import Image from 'next/image'
import styled from 'styled-components';
import InstagramIcon from '../../public/assets/icons/InstagramSvg.svg'
import InstagramIconMobile from '../../public/assets/icons/InstagramIconMobile.png'
import TwitterIcon from '../../public/assets/icons/TwitterSvg.svg'
import FacebookIcon from '../../public/assets/icons/facebookSvg.svg'
import LocationIcon from '../../public/assets/icons/locationIcon.png'
import EmailIcon from '../../public/assets/icons/emailIcon.png'
import TelephoneIcon from '../../public/assets/icons/telephoneIcon.png'
import FooterWebLogo from '../../public/assets/images/logoFooterWeb.png'
// import FooterMobileLogo from '../../public/assets/icons/web_mobile_footer_logo.png'
import FooterMobileLogo from '../../public/assets/icons/web_mobile_footer_logo.png'
import ReadyToStart from './ReadyToStart'


const MobileFooter = () => {
  return (
       <StyledMainContainer>

    <StyledFirstMobile
    className='mobile'
    >
<Image src={FooterMobileLogo} width={298.93} height={95} alt='FooterWebLogo'  />
<StyledParagrahMobile
>
A modern, technology payment processing and settlement built for you and your business.
</StyledParagrahMobile>
<StyledSocials
// g='15px'
>
<Image src={InstagramIconMobile} width={50} height={50} alt='InstagramIcon' className='socials' />
<Image src={TwitterIcon} width={50} height={50} alt='TwitterIcon' className='socials' />
<Image src={FacebookIcon} width={50} height={50} alt='FacebookIcon' className='socials' />

  </StyledSocials> 
        
        </StyledFirstMobile>

        <StyledFlex
        cg='40px'
        // bt='1px solid #EEEEEE'
        p='30px 0'
        >

<StyledSecondMobile
    className='mobile'
>

<StyledPHeading
color=' #1B442A'
>
Company
</StyledPHeading>

<StyledParagrah
>

About Us
</StyledParagrah>

<StyledParagrah
>

Why Paydestal
</StyledParagrah>

<StyledParagrah
>

Awards
</StyledParagrah>
<StyledParagrah
>

Careers
</StyledParagrah>
</StyledSecondMobile>

<StyledSecondMobile
    className='mobile'
>

<StyledPHeading
color=' #1B442A'
>
Useful Links
</StyledPHeading>

<StyledParagrah
>

Services
</StyledParagrah>

<StyledParagrah
>

Contact Us
</StyledParagrah>

<StyledParagrah
>

Developer
</StyledParagrah>
<StyledParagrah
>

FAQ
</StyledParagrah>
</StyledSecondMobile>
</StyledFlex>

    </StyledMainContainer>
  )
}

export default MobileFooter

const StyledMainContainer = styled(StyledContainerFluid)`
margin-top: 200px;
border: 1px solid red;
/* overflow-y: scroll; */
position: relative;
max-height: 195px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;

/* @media only screen and (min-width: 1728px) {
  top: 394px;
} */
/* @media only screen and (min-width:992px) and (max-width:1727px){
top: 373px;
left: 0px;
  } */

  /* @media only screen and (min-width:769px) and (max-width:991px){
top: 337px;
left: 0px;
  } */




@media only screen and (min-width: 769px) {
/* padding: 0 14px; */
display: none;
}



@media only screen and (max-width:768px){
  /* top: 300px; */
left: 0px;
  padding: 0 24px;


  /* .web{
      display: none;
    } */
}

@media only screen and (max-width:500px){
  /* top: 460px; */
/* left: 0px; */


  /* padding: 0 24px;
  .web{
      display: none;
    } */
}

/* @media only screen and (min-width:769px){
.mobile{
display: none;
}
} */
`;


const StyledFirstMobile = styled(StyledDiv)`
/* border: 1px solid red; */
margin-right: 35px;
/* width: 100%; */
padding-bottom: 120px;
border-bottom: 1px solid #EEEEEE;
/* margin-bottom: 140px; */
display: flex;
flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
height: 195px;
gap: 25px;

`;

const StyledParagrahMobile = styled(ParagraphText)`
font-weight: 400;
text-align: left;
color: #000000;

  @media only screen and (max-width:768px){
  /* border: 1px solid red; */
  padding-right: 23px;
font-size: 20px;
line-height: 25.2px;
}
`;


const StyledSecondMobile = styled(StyledDiv)`
/* border: 1px solid green; */
/* flex-basis: 25%; */
/* height: 195px; */
display: flex;
flex-direction: column;
justify-content: flex-start;
  align-items: flex-start;

`;

const StyledParagrah = styled(ParagraphText)`
font-weight: 400;
text-align: left;
color: #000000;

/* @media only screen and (min-width:1728px){
font-size: 16px;
line-height: 20.16px;
} */

@media only screen and (min-width:769px){
    display: none;
  /* font-size: 15px;
line-height: 19.16px; */
  }

  @media only screen and (max-width:768px){
font-size: 20px;
line-height: 25.2px;
}
`;

const StyledPHeading = styled(ParagraphText)`
/* border: 1px solid red; */
font-weight: 600;
text-align: left;

  /* @media only screen and (min-width:1728px){
    line-height: 30.24px;
    font-size: 24px;
} */

@media only screen and (min-width:769px){
    display: none;
  /* line-height: 28.24px;
    font-size: 23px; */
  }
`;

const StyledSocials = styled(StyledFlex)`
/* border: 1px solid red; */
img{
  width: 100%;
  height: 100%;
  /* object-fit: contain; */
}
/* @media only screen and (min-width:1728px){
  gap: 15px;

.socials{
width: 40.29px;
height: 40px;
}
} */

/* @media only screen and (min-width:992px) and (max-width:1727px){
  gap: 13px;

.socials{
width: 38.29px;
height: 38px;
}
  } */

  @media only screen and (min-width:769px) {
    display: none;
  gap: 10px;

/* .socials{
width: 38.29px;
height: 38px;
} */
  }

  @media only screen and (max-width:768px){
  gap: 12.5px;

.socials{
width: 50px;
height: 50px;
}
  }
`;