import { StyledButton, StyledContainerFluid, StyledContainerFluidHero, StyledDiv, StyledFlex, StyledFlexItem, StyledHeroSection } from '@/__style/ui-block.style'
import Image from 'next/image'
import React from 'react'
import { styled } from 'styled-components'
import InstagramIcon from '../../public/assets/icons/InstagramSvg.svg'
import TwitterIcon from '../../public/assets/icons/TwitterSvg.svg'
import FacebookIcon from '../../public/assets/icons/facebookSvg.svg'
import LocationIcon from '../../public/assets/icons/locationIcon.png'
import EmailIcon from '../../public/assets/icons/emailIcon.png'
import TelephoneIcon from '../../public/assets/icons/telephoneIcon.png'
import { ParagraphText } from '@/__style/global.style'
import FooterWebLogo from '../../public/assets/images/logoFooterWeb.png'
import ReadyToStart from './ReadyToStart'


const FooterComponent = () => {
  return (
    <StyledBackground>
      {/* <StyledGetStarted>
      <ReadyToStart />
      </StyledGetStarted> */}
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
position: absolute;
left: 155px;
top: 2055px;
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
  top: 392px;
}
@media only screen and (min-width:992px) and (max-width:1727px){
/* border: 1px solid green; */
top: 333px;
left: 9px;

  }
/* @media only screen and (min-width: 992px) and (max-width: 1727px) {
  bottom: 90px;
left: 42px;
} */

/* @media only screen and (max-width: 768px) {
left: 0px;
} */
`;

const StyledFirst = styled(StyledDiv)`
/* border: 1px solid red; */
flex-basis: 30%;
/* max-width: 436px; */
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
/* max-width: 137px; */
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
  flex-grow: 1;
`;
