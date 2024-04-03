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
      // fsize='64px'
      fw='800'
      // // lh='80.64px'
      // align='left'
      color=' #FFFFFF'
      >
      Ready to get started?
      </StyledHeading>

      <StyledP
      // fsize='24px'
      // fw='400'
      // lh='30.24px'
      // textAlign='center'
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
/* padding: 0 0 30px 0; */


@media only screen and (min-width:1728px){
/* width: 1030px; */
/* height: 300.24px; */
padding: 0 0 30px 0;
border-radius:69px;
width: 1299px;
height: 387.24px;
}

@media only screen and (min-width:1301px) and (max-width:1727px){
/* width: 1030px; */
/* height: 300.24px; */
padding: 0 0 28px 0;
border-radius:65px;
width: 800px;
height: 280px;
}

@media only screen and (min-width:1101px) and (max-width:1300px){
/* width: 1030px; */
/* height: 300.24px; */
padding: 0 0 46px 0;
border-radius:60px;
width: 730px;
height: 230px;
}

@media only screen and (min-width:992px) and (max-width:1100px){
/* width: 1030px; */
/* height: 300.24px; */
padding: 0 0 36px 0;
border-radius:56px;
width: 700px;
height: 210px;
}

@media only screen and (min-width:769px) and (max-width:991px){
padding: 0 0 25px 0;
border-radius:54px;
width: 600px;
height: 200px;
}

@media only screen and (max-width:768px){
padding: 0 0 25px 0;
border-radius:54px;
/* width: 550px; */
width: 100%;
height: 200px;
}
`;


const StyledP = styled(ParagraphText)`
/* margin-bottom: 50px; */
text-align: center;
font-weight: 400;

@media only screen and (min-width: 1728px) {
margin-bottom: 50px;
font-size: 24px;
line-height: 30.24px;
}

@media only screen and (min-width:1301px) and (max-width:1727px){
  margin-bottom: 58px;
font-size: 23px;
line-height: 29.24px;
}

@media only screen and (min-width:1101px) and (max-width:1300px){

  margin-bottom: 56px;
font-size: 22px;
line-height: 28.24px;
}

@media only screen and (min-width:992px) and (max-width:1100px){
  margin-bottom: 54px;
font-size: 21px;
line-height: 24.24px;
}

@media only screen and (min-width:769px) and (max-width:991px){
  margin-bottom: 40px;
font-size: 20px;
line-height: 26.24px;
}

@media only screen and (max-width: 768px) {
font-size: 16px;
line-height: 20.16px;
}

`;
const StyledHeading = styled(HeadingText)`
text-align: left;

@media only screen and (min-width: 1728px) {
font-size: 64px;
line-height: 80.64px;
}

@media only screen and (min-width:1301px) and (max-width:1727px){
  font-size: 60px;
line-height: 78.64px;
}

@media only screen and (min-width:1101px) and (max-width:1300px){
font-size: 58px;
line-height: 76.64px;
}

@media only screen and (min-width:992px) and (max-width:1100px){
  font-size: 56px;
line-height: 70.64px;
}

@media only screen and (min-width:769px) and (max-width:991px){
font-size: 52px;
line-height: 65.44px;
}

@media only screen and (max-width: 768px) {
font-size: 44px;
line-height: 55.44px;
}
`;

const StyledGetStartedCont2 = styled.button`
/* width: 275px;
max-height: 60px; */
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

@media only screen and (min-width: 1728px) {
width: 275px;
max-height: 60px;
padding: 16px 55px;
}


/* @media only screen and (min-width:992px) and (max-width:1727px){
  width: 270px;
max-height: 58px;
} */

@media only screen and (min-width:1301px) and (max-width:1727px){
  width: 268px;
max-height: 58px;
padding: 14px 45px;

}

@media only screen and (min-width:1101px) and (max-width:1300px){
  /* border: 1px solid red; */
  width: 260px;
max-height: 56px;
padding: 12px 40px;

}

@media only screen and (min-width:992px) and (max-width:1100px){
  width: 250px;
max-height: 50px;
padding: 10px 30px;
}

@media only screen and (max-width:991px){
width: 240px;
  /* width: 100%; */
  max-height: 60px;
  padding: 10px 0;
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