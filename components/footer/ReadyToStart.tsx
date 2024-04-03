// import { HeadingText, ParagraphText } from '@/__style/global.style'
// import { StyledButton, StyledFlex } from '@/__style/ui-block.style'
// import RightArrow from '../../public/assets/icons/getStartedArrow.png'
// import React from 'react'
// import styled from 'styled-components'
// import Image from 'next/image'

// const ReadyToStart = () => {
//   return (
//     <StyledContainer>
//       <StyledHeading
//       fsize='64px'
//       fw='800'
//       // lh='80.64px'
//       align='left'
//       color=' #FFFFFF'
//       >
//       Ready to get started?
//       </StyledHeading>

//       <StyledP
//       fsize='24px'
//       fw='400'
//       lh='30.24px'
//       textAlign='center'
//       color='#FFFFFF'
//       >
//       It only takes a few minutes to register your FREE  account.
//       </StyledP>

//       <StyledGetStartedCont2>
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
//     </StyledContainer>
//   )
// }

// export default ReadyToStart
// const StyledContainer = styled(StyledFlex)`
// flex-direction: column;
// width: 1030px;
// /* max-width: 1299px; */
// height: 300.24px;
// background-color: #1B442A;
// box-shadow: 0px 16px 29.799999237060547px 3px #00000040;
// justify-content: center;
// align-items: center;
// border-radius:69px;
// padding: 0 0 30px 0;
// `;
// const StyledP = styled(ParagraphText)`
// margin-bottom: 50px;
// `;
// const StyledHeading = styled(HeadingText)`
// /* margin-top: -6px */
// `;

// const StyledGetStartedCont2 = styled.button`
// width: 275px;
// max-height: 60px;
// padding: 16px 55px;
// column-gap: 10px;
// border-radius: 100px;
// opacity: 0px;
// background-color: #F4B23E;

// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// border: none;
// /* margin-top: 49.65px; */




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
// /* max-height: 20px; */
// opacity: 0px;
// color: #1B442A;
// font-size: 21px;
// font-weight: 400;
// line-height: 26.46px;
// text-align: left;
// `;


import { HeadingText, ParagraphText } from '@/__style/global.style'
import { StyledButton, StyledFlex } from '@/__style/ui-block.style'
import RightArrow from '../../public/assets/icons/getStartedArrow.png'
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const ReadyToStart = () => {
  return (
    <StyledContainer>
      <StyledHeading
      fsize='64px'
      fw='800'
      // lh='80.64px'
      align='left'
      color=' #FFFFFF'
      >
      Ready to get started?
      </StyledHeading>

      <StyledP
      fsize='24px'
      fw='400'
      lh='30.24px'
      textAlign='center'
      color='#FFFFFF'
      >
      It only takes a few minutes to register your FREE  account.
      </StyledP>

      <StyledGetStartedCont2>
<StyledGetStartedBtn>
  Get Started
</StyledGetStartedBtn>
<Image 
src={RightArrow} 
width={7} 
height={14} 
alt='RightArrow'
blurDataURL="/assets/icons/RightArrow.png"
 />

</StyledGetStartedCont2>
    </StyledContainer>
  )
}

export default ReadyToStart
const StyledContainer = styled(StyledFlex)`
flex-direction: column;
/* width: 1030px; */
/* max-width: 1299px; */
/* height: 300.24px; */
background-color: #1B442A;
box-shadow: 0px 16px 29.799999237060547px 3px #00000040;
justify-content: center;
align-items: center;
border-radius:69px;
/* padding: 0 0 30px 0; */


@media only screen and (min-width:1728px){
/* width: 1030px; */
/* height: 300.24px; */
padding: 0 0 30px 0;

width: 1299px;
height: 387.24px;
/* top: 55px;
left: 214.5px;
gap: 0px;
opacity: 0px; */

}
`;


const StyledP = styled(ParagraphText)`
margin-bottom: 50px;
`;
const StyledHeading = styled(HeadingText)`
/* margin-top: -6px */
`;

const StyledGetStartedCont2 = styled.button`
width: 275px;
max-height: 60px;
padding: 16px 55px;
column-gap: 10px;
border-radius: 100px;
opacity: 0px;
background-color: #F4B23E;

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
border: none;
/* margin-top: 49.65px; */




@media only screen and (max-width:991px){
/* width: 189px; */
  width: 100%;
}
@media only screen and (max-width:768px){
width: 189px;
height: 56px;
padding: 14px 30px;
}
`;

const StyledGetStartedBtn = styled(StyledButton)`
/* max-height: 20px; */
opacity: 0px;
color: #1B442A;
font-size: 21px;
font-weight: 400;
line-height: 26.46px;
text-align: left;
`;