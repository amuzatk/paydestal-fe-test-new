import { StyledButton, StyledContainerFluid, StyledContainerFluidHero, StyledDiv, StyledFlex, StyledFlexItem, StyledHeroSection } from '@/__style/ui-block.style'
import Image from 'next/image'
import React from 'react'
import { styled } from 'styled-components'
import InstagramIcon from '../../public/assets/icons/InstagramSvg.svg'
import InstagramIconMobile from '../../public/assets/icons/InstagramIconMobile.png'
import TwitterIcon from '../../public/assets/icons/TwitterSvg.svg'
import FacebookIcon from '../../public/assets/icons/facebookSvg.svg'
import LocationIcon from '../../public/assets/icons/locationIcon.png'
import EmailIcon from '../../public/assets/icons/emailIcon.png'
import TelephoneIcon from '../../public/assets/icons/telephoneIcon.png'
import { ParagraphText } from '@/__style/global.style'
import FooterWebLogo from '../../public/assets/images/logoFooterWeb.png'
import FooterMobileLogo from '../../public/assets/icons/web_mobile_footer_logo.png'
import ReadyToStart from './ReadyToStart'


const FooterComponent = () => {
  return (
    <StyledBackground>
      <StyledGetStarted>
      <ReadyToStart />
      </StyledGetStarted>

      <StyledWrapper>
    <StyledMainContainer
    >
    <StyledFirst
    className='web'

    >
<Image src={FooterWebLogo} width={304.49} height={70} alt='WebFooterLogo' className='webFooterLogo' />
<Image src={FooterMobileLogo} width={298.93} height={95} alt='FooterWebLogo' className='mobileFooterLogo' />
<StyledParagrah
>
A modern, technology payment processing and settlement built for you and your business.
</StyledParagrah>
<StyledSocials
// g='15px'
>
<Image src={InstagramIcon} width={40} height={40} alt='InstagramIcon' className='socials' />
<Image src={TwitterIcon} width={40} height={40} alt='TwitterIcon' className='socials' />
<Image src={FacebookIcon} width={40} height={40} alt='FacebookIcon' className='socials' />

  </StyledSocials> 
        </StyledFirst>

<StyledSecond
className='web'
>

<StyledPHeading
// fsize='24px'
// fw='600'
// lh='30.24px'
// textAlign='left'
color=' #1B442A'
>
Company
</StyledPHeading>

<StyledParagrah
// fsize='20px'
// fw='400'
// lh='25.2px'
// textAlign='left'
// color='#202020'
>

About Us
</StyledParagrah>

<StyledParagrah
// fsize='20px'
// fw='400'
// lh='25.2px'
// textAlign='left'
// color='#202020'
>

Developer
</StyledParagrah>

<StyledParagrah
// fsize='20px'
// fw='400'
// lh='25.2px'
// textAlign='left'
// color='#202020'
>

FAQ
</StyledParagrah>
</StyledSecond>


<StyledThird
className='web'
>

<StyledPHeading
color=' #1B442A'
>
Legal
</StyledPHeading>

<StyledParagrah
>

Support Policy 
</StyledParagrah>

<StyledParagrah
>

Privacy Policy 
</StyledParagrah>

<StyledParagrah
>

Terms & Conditions
</StyledParagrah>

</StyledThird>
<StyledFourth
className='web'
>
<StyledPHeading
color=' #1B442A'
>
Our Office
</StyledPHeading>

<StyledParagrah
style={{
  display:"flex",
  flexDirection:"row",
  justifyContent:"center",
  alignItems:"center",
  gap:"10px",
  // width:"100%"
}}
>
<Image src={LocationIcon} width={20} height={20} alt='LocationIcon'  />
 6 Alhaji Bakinson Street, Ikeja, Lagos Nigeria
</StyledParagrah>


<StyledParagrah
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
</StyledParagrah>

<StyledParagrah
// fsize='20px'
// fw='400'
// lh='25.2px'
// textAlign='left'
// color='#202020'
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
</StyledParagrah>

</StyledFourth>

    </StyledMainContainer>

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
    </StyledWrapper>
    </StyledBackground>
  )
}

export default FooterComponent
const StyledBackground = styled.section`
/* border: 1px solid yellow; */
position: relative;
background-image: url('/assets/images/footerBackground.png');
background-position: center;
  /* background-size: cover; */
  background-repeat: no-repeat;
  min-height: 570.04px;
  /* min-height: 670.04px; */

  @media only screen and (min-width: 1728px){
  background-size: contain;
  }

  @media only screen and (min-width:992px) and (max-width:1727px){
/* border: 1px solid red; */
background-size: contain;
/* background-size: cover; */

  }
  @media only screen and (min-width:769px) and (max-width:991px){
/* border: 1px solid red; */
background-size: contain;
/* background-size: cover; */

  }
  @media only screen and (max-width: 768px) {
    background-image: none;
  }
`;
const StyledWrapper = styled.div`
/* border: 2px solid green; */
`;

// Defining media queries for positioning adjustment
const mediaQueries = {
  largeDesktop1: `@media (min-width: 1728px) and (max-width: 1800px)`,
  largeDesktop2: `@media (min-width: 1801px) and (max-width: 1900px)`,
  largeDesktop3: `@media (min-width: 1901px) and (max-width: 2000px)`,
  largeDesktop4: `@media (min-width: 2001px) and (max-width: 2100px)`,
  largeDesktop5: `@media (min-width: 2101px) and (max-width: 2200px)`,
  largeDesktop6: `@media (min-width: 2201px) and (max-width: 2300px)`,
  largeDesktop7: `@media (min-width: 2301px) and (max-width: 2400px)`,
  largeDesktop8: `@media (min-width: 2401px) and (max-width: 2500px)`,
  largeDesktop9: `@media (min-width: 2501px)`,


  desktop1: `@media (min-width: 992px) and (max-width: 1100px)`,
  desktop2: `@media (min-width: 1001px) and (max-width: 1200px)`,
  desktop3: `@media (min-width: 1201px) and (max-width: 1300px)`,
  desktop4: `@media (min-width: 1301px) and (max-width: 1400px)`,
  desktop5: `@media (min-width: 1401px) and (max-width: 1500px)`,
  desktop6: `@media (min-width: 1501px) and (max-width: 1600px)`,
  desktop7: `@media (min-width: 1601px) and (max-width: 1700px)`,
  desktop8: `@media (min-width: 1701px) and (max-width: 1727px)`,

  tablet1: `@media (min-width: 901px) and (max-width: 991px)`,
  tablet2: `@media (min-width: 801px) and (max-width: 900px)`,
  tablet3: `@media (min-width: 769px) and (max-width: 800px)`,
  tablet4: `@media (min-width: 701px) and (max-width: 768px)`,
  tablet5: `@media (min-width: 601px) and (max-width: 700px)`,
  tablet6: `@media (min-width: 501px) and (max-width: 600px)`,
  tablet7: `@media (min-width: 401px) and (max-width: 500px)`,
  tablet8: `@media (min-width: 301px) and (max-width: 400px)`,
};

const StyledGetStarted = styled(StyledDiv)`
  position: absolute;
  ${mediaQueries.largeDesktop1} {
    left: 208px;
    bottom: 300px;
  }
  ${mediaQueries.largeDesktop2} {
    left: 265px;
    bottom: 300px;
  }
  ${mediaQueries.largeDesktop3} {
    left: 310px;
    bottom: 300px;
  }
  ${mediaQueries.largeDesktop4} {
    left: 367px;
    bottom: 300px;
  }
  ${mediaQueries.largeDesktop5} {
    left: 410px;
    bottom: 300px;
  }
  ${mediaQueries.largeDesktop6} {
    left: 470px;
    bottom: 300px;
  } ${mediaQueries.largeDesktop7} {
    left: 540px;
    bottom: 300px;
  } ${mediaQueries.largeDesktop8} {
    left: 610px;
    bottom: 300px;
  } ${mediaQueries.largeDesktop9} {
    left: 680px;
    bottom: 300px;
  }

  ${mediaQueries.desktop8} {
    left: 400px;
    bottom: 350px;
  }
  ${mediaQueries.desktop7} {
    left: 370px;
    bottom: 350px;
  }
  ${mediaQueries.desktop6} {
    left: 400px;
    bottom: 350px;
  }
  ${mediaQueries.desktop5} {
    left: 320px;
    bottom: 350px;
  }
  ${mediaQueries.desktop4} {
    left: 300px;
    bottom: 350px;
  }
  ${mediaQueries.desktop3} {
    left: 250px;
    bottom: 350px;
  }
  ${mediaQueries.desktop2} {
    left: 180px;
    bottom: 350px;
  }
  ${mediaQueries.desktop1} {
    left: 150px;
    bottom: 350px;
  }
  ${mediaQueries.tablet1} {
    left: 180px;
    bottom: 350px;
  }
  ${mediaQueries.tablet2} {
    left: 130px;
    bottom: 350px;
  }
  ${mediaQueries.tablet3} {
    left: 110px;
    bottom: 350px;
  }
  ${mediaQueries.tablet4} {
    left: 150px;
    bottom: 350px;
  }
  ${mediaQueries.tablet5} {
    left: 75px;
    bottom: 350px;
  }
  ${mediaQueries.tablet6} {
    left: 35px;
    bottom: 350px;
  }
`;

const StyledMainContainer = styled(StyledContainerFluid)`
/* border: 1px solid red; */
position: relative;
max-height: 195px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;

@media only screen and (min-width: 1728px) {
  top: 394px;
}
@media only screen and (min-width:992px) and (max-width:1727px){
/* border: 1px solid green; */
top: 373px;
left: 0px;
/* justify-content: space-evenly; */
  }

  @media only screen and (min-width:769px) and (max-width:991px){
/* border: 1px solid green; */
top: 337px;
left: 0px;
/* justify-content: space-evenly; */
  }

@media only screen and (max-width: 1200px) {
padding: 0 14px;
}
@media only screen and (max-width:768px){
  top: 300px;
left: 0px;


  padding: 0 24px;
  .web{
      display: none;
    }
}

@media only screen and (max-width:500px){
  top: 460px;
/* left: 0px; */


  /* padding: 0 24px;
  .web{
      display: none;
    } */
}

@media only screen and (min-width:769px){
  /* padding: 0 24px; */
.mobile{
display: none;
}
}
`;


const StyledFirst = styled(StyledDiv)`
/* border: 1px solid red; */
flex-basis: 30%;
/* height: 195px; */
display: flex;
flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* gap: 15px; */

  img{
  width: 100%;
  height: 100%;
}

  @media only screen and (min-width:1728px){
height: 195px;
gap: 15px;

.webFooterLogo{
/* border: 5px solid red; */
width: 304.49px;
height: 70px;
}
}

@media only screen and (min-width:769px) and (max-width:1727px){
gap: 13px;

.webFooterLogo{
/* border: 1px solid red; */
width: 294.49px;
height: 60px;
}
  }

  /* @media only screen and (min-width:769px) and (max-width:991px){
gap: 10px;

.webFooterLogo{
width: 294.49px;
height: 60px;
}
  } */

  @media only screen and (max-width:768px){
    .mobileFooterLogo{
      display: inline-block;
      /* border: 1px solid red; */
    }
    .webFooterLogo{
      display: none;
    }
  }

  @media only screen and (min-width:769px){
    .mobileFooterLogo{
      display: none;
    }
    .webFooterLogo{
      display: inline-block;
    }
  }
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

const StyledParagrah = styled(ParagraphText)`
font-weight: 400;
text-align: left;
color: #000000;

@media only screen and (min-width:1728px){
font-size: 16px;
line-height: 20.16px;
}

@media only screen and (min-width:992px) and (max-width:1727px){
  font-size: 15px;
line-height: 19.16px;
  }

  @media only screen and (max-width:768px){
  /* border: 1px solid red; */
  /* padding-right: 23px; */
font-size: 20px;
line-height: 25.2px;
}
`;

const StyledPHeading = styled(ParagraphText)`
/* border: 1px solid red; */
font-weight: 600;
text-align: left;

  @media only screen and (min-width:1728px){
    line-height: 30.24px;
    font-size: 24px;
}

@media only screen and (min-width:992px) and (max-width:1727px){
  line-height: 28.24px;
    font-size: 23px;
  }
`;


const StyledSocials = styled(StyledFlex)`
/* border: 1px solid red; */
img{
  width: 100%;
  height: 100%;
  /* object-fit: contain; */
}
@media only screen and (min-width:1728px){
  gap: 15px;

.socials{
width: 40.29px;
height: 40px;
}
}

@media only screen and (min-width:992px) and (max-width:1727px){
  gap: 13px;

.socials{
width: 38.29px;
height: 38px;
}
  }

  @media only screen and (min-width:769px) and (max-width:991px){
  gap: 10px;

.socials{
width: 38.29px;
height: 38px;
}
  }

  @media only screen and (max-width:768px){
  gap: 12.5px;

.socials{
width: 50px;
height: 50px;
}
  }
`;



const StyledSecond = styled(StyledDiv)`
/* border: 1px solid green; */
flex-basis: 20%;
/* height: 195px; */
display: flex;
flex-direction: column;
justify-content: flex-start;
  align-items: flex-start;

  @media only screen and (min-width:1728px){
height: 195px;
/* gap: 15px; */
}

@media only screen and (min-width:992px) and (max-width:1727px){
flex-basis: 15%;
padding-left: 55px;
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
const StyledThird = styled(StyledDiv)`
/* border: 1px solid yellow; */
flex-basis: 20%;
/* max-width: 187px; */
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
  /* flex-grow: 1; */
`;
