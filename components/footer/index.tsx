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

        {/* <div
        style={{
          position:"relative",
          left:"100px",
          bottom:"50px"
        }}
        >
          <h1>TESTIGNG TESTIGNGTESTIGNGTESTIGNGTESTIGNG</h1>
          <h1>TESTIGNG TESTIGNGTESTIGNGTESTIGNGTESTIGNG</h1>
          <h1>TESTIGNG TESTIGNGTESTIGNGTESTIGNGTESTIGNG</h1>
          <h1>TESTIGNG TESTIGNGTESTIGNGTESTIGNGTESTIGNG</h1>
          <h1>TESTIGNG TESTIGNGTESTIGNGTESTIGNGTESTIGNG</h1>
          <h1>TESTIGNG TESTIGNGTESTIGNGTESTIGNGTESTIGNG</h1>

        </div> */}


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

{/* <StyledMobileFooter
className='mobileFooter'
>
<StyledSecond
// className='web'
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
</StyledSecond>

<StyledSecond
// className='web'
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
</StyledSecond>
</StyledMobileFooter> */}

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
{/* </StyledMobileFooter> */}

    </StyledMainContainer>
    </StyledWrapper>
    </StyledBackground>
  )
}

export default FooterComponent
const StyledGetStarted = styled(StyledDiv)`
/* position: absolute; */

position: relative;

@media only screen and (min-width: 1728px){
  left: 208px;
bottom: 100px;
  }
`;
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

  @media only screen and (max-width: 991px) {
    background-image: none;
  }
`;
const StyledWrapper = styled.div`
/* border: 2px solid green; */
`;
const StyledMainContainer = styled(StyledContainerFluid)`
/* border: 1px solid blue; */
position: relative;
/* top: 290px; */
/* max-height: 702.24px; */
max-height: 195px;
/* max-width: 1428px; */
display: flex;
flex-direction: row;
  flex-wrap: wrap;
justify-content: space-between;


  /* position: relative; */

@media only screen and (min-width: 1728px) {
  top: 22px;
}
@media only screen and (min-width:992px) and (max-width:1727px){
/* border: 1px solid green; */
top: 373px;
left: 0px;
/* justify-content: space-evenly; */
  }

@media only screen and (max-width: 1200px) {
padding: 0 14px;
}
@media only screen and (max-width:768px){
  padding: 0 24px;
  .web{
      display: none;
    }
}

@media only screen and (min-width:769px){
  /* padding: 0 24px; */
.mobile{
display: none;
}
}
`;

// const StyledMobileFooter = styled(StyledFlex)`
// flex-direction: row;
// justify-content: center;
// align-items: center;
// gap:60px;
// border: 1px solid red;
// `;

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
