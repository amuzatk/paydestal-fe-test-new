import { ParagraphText } from '@/__style/global.style';
import { StyledContainerFluid, StyledDiv, StyledFlex } from '@/__style/ui-block.style';
import React from 'react'
import Image from 'next/image'
import styled from 'styled-components';
import InstagramIconMobile from '../../public/assets/icons/InstagramIconMobile.png'
import TwitterIcon from '../../public/assets/icons/TwitterSvg.svg'
import FacebookIcon from '../../public/assets/icons/facebookSvg.svg'
import FooterMobileLogo from '../../public/assets/icons/web_mobile_footer_logo.png'

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
>
<Image src={InstagramIconMobile} width={50} height={50} alt='InstagramIcon' className='socials' />
<Image src={TwitterIcon} width={50} height={50} alt='TwitterIcon' className='socials' />
<Image src={FacebookIcon} width={50} height={50} alt='FacebookIcon' className='socials' />

  </StyledSocials> 
        
        </StyledFirstMobile>

        <StyledFlex
        cg='40px'
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
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;

@media only screen and (min-width: 769px) {
display: none;
}

@media only screen and (max-width:768px){
left: 0px;
  padding: 0 24px;
}
`;
const StyledFirstMobile = styled(StyledDiv)`
margin-right: 35px;
padding-bottom: 120px;
border-bottom: 1px solid #EEEEEE;
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
padding-right: 23px;
font-size: 20px;
line-height: 25.2px;
}
`;

const StyledSecondMobile = styled(StyledDiv)`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
`;

const StyledParagrah = styled(ParagraphText)`
font-weight: 400;
text-align: left;
color: #000000;

@media only screen and (min-width:769px){
    display: none;
  }

  @media only screen and (max-width:768px){
font-size: 20px;
line-height: 25.2px;
}
`;

const StyledPHeading = styled(ParagraphText)`
font-weight: 600;
text-align: left;

@media only screen and (min-width:769px){
    display: none;
  }
`;

const StyledSocials = styled(StyledFlex)`
img{
  width: 100%;
  height: 100%;
}
  @media only screen and (min-width:769px) {
    display: none;
  gap: 10px;
  }

  @media only screen and (max-width:768px){
  gap: 12.5px;

.socials{
width: 50px;
height: 50px;
}
  }
`;