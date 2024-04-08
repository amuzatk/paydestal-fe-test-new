import { StyledButton, StyledContainerFluid, StyledFlex, StyledFlexItem,  } from '@/__style/ui-block.style'
import Image from 'next/image'
import React from 'react'
import { styled } from 'styled-components'
import PaymentSection from '../../public/assets/images/PaymentSectionImage.webp'
import RightArrow from '../../public/assets/icons/RightArrow.png'
import { HeadingText, ParagraphText } from '@/__style/global.style'

const PaymentSolutions = () => {
  return (
    <StyledMainContainer>
      <StyledWrapper
      fDirection='row'
      align='center'
      // cg='126px'
      >
        <StyledLeft
        grow
        >
      <Image 
      src={PaymentSection}  
      width={516} 
      height={436} 
      alt='PaymentSection'
      blurDataURL="/assets/images/PaymentSectionImage.webp"
        />
        </StyledLeft>
         <StyledRight
        grow
        >
        <StyledHeading
     fw='800'
     color='#1B442A'
     >
    Create tailored  payment 
solutions  using our thoroughly 
documented APIs 
     </StyledHeading>

     <StyledParagraph
     fw='400'
    color='#000000'
     >
    The in-depth and clear documentation of our APIs,  enables you to create,
from simple projects to intricate financial products catering lots of customers.
</StyledParagraph>

<StyledP
fw='400'
color='#000000'
>Got any ideas, it's time to create.</StyledP> 

     <StyledGetStartedCont2>
Explore  our  API  
<Image 
src={RightArrow} 
width={7} 
height={14} 
alt='RightArrow'
blurDataURL="/assets/icons/RightArrow.png"
 />
</StyledGetStartedCont2>
        </StyledRight>
        
      </StyledWrapper>
    </StyledMainContainer>
  )
}

export default PaymentSolutions

const StyledMainContainer = styled(StyledContainerFluid)`
max-height: 724.83px;
`;

const StyledWrapper = styled(StyledFlex)`
  justify-content: space-between;

 @media only screen and (min-width:992px) and (max-width:1727px){
  // border: 1px solid green;
column-gap: 100px;
margin-bottom: 120px;
}
@media only screen and (min-width:1728px){
column-gap: 126px;
// border: 1px solid red;
}

@media only screen and (min-width:769px) and (max-width:991px){
  /* border: 1px solid red; */
  flex-wrap: wrap;
  /* margin-top: 700px; */
  gap: 70px;
flex-direction: column-reverse;
}

@media only screen and (min-width:992px) and (max-width:1200px){
  /* border: 1px solid green; */
padding: 0 25px;
}

@media only screen and (max-width:768px){
  /* border: 1px solid yellow; */
padding: 0 25px;
margin-top: 350px;
}

@media only screen and (max-width:500px){
  /* border: 1px solid yellow; */
/* padding: 0 25px; */
margin-top: 300px;
}
`;


const StyledRight = styled(StyledFlexItem)`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;

@media only screen and (min-width:992px) and (max-width:1727px){
  // border: 1px solid green;
// column-gap: 100px;
max-width: 600.43px;
margin-top: -20px;
}

@media only screen and (min-width:1728px){
//  border: 1px solid yellow;
min-width: 784px;
/* max-width: 200px; */
height: 374px;
padding-bottom: 25px;

/* border-radius: 1000px 0px 0px 0px; */
}

@media only screen and (max-width:768px){
/* border: 1px solid red; */
margin-top: -650px;
}

@media only screen and (max-width:991px){
  max-width: 731px;
 /* min-width: 750px; */
}
@media only screen and (min-width:1367px){
 /* min-width: 750px; */
}
`;

const StyledHeading = styled(HeadingText)`
text-align: left;

@media only screen and (min-width:992px) and (max-width:1727px){
  font-size: 40px;
  font-weight: 800;
  line-height: 50.44px;
  // padding: 0 30px;
}

@media only screen and (min-width:1728px){
  /* font-family: Plus Jakarta Sans; */
font-size: 44px;
font-weight: 800;
line-height: 55.44px;
// text-align: left;
padding: 0 30px;
}


/* @media only screen and (min-width:1367px){
// font-size: 70px;
} */
@media only screen and (max-width:991px){
  text-align: center;
}
@media only screen and (max-width:768px){
font-size: 25px;
font-weight: 800;
line-height: 31.5px;
text-align: left;

}
`;

const StyledParagraph = styled(ParagraphText)`
text-align: left;
font-weight: 400;

@media only screen and (min-width:992px) and (max-width:1727px){
  font-size: 16.3px;
  line-height: 24.22px;
}


@media only screen and (min-width:1728px){
font-size: 19.9px;
padding: 0 30px;
line-height: 25.2px;
}


@media only screen and (max-width:991px){
  text-align: center;
}
@media only screen and (max-width:768px){
font-size: 16px;
line-height: 24px;
text-align: left;
}
`;

const StyledP = styled(ParagraphText)`
font-weight: 400;
margin-top: -1px;
text-align: left;

@media only screen and (min-width:1728px){
font-size: 20px;
line-height: 25.2px;
padding-left: 29px;
  }

@media only screen and (min-width:992px) and (max-width:1727px){
  font-size: 16.3px;
  line-height: 24.22px;
}

@media only screen and (max-width:991px){
margin-top: 40px;
}

@media only screen and (max-width:768px){
font-size: 16px;
font-weight: 400;
line-height: 24px;
}
`;

const StyledLeft = styled(StyledFlexItem)`
img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media only screen and (min-width:1728px){
min-width: 516px;
height: 436px;
}


@media only screen and (max-width:991px){
  max-width: 731px;
}
@media only screen and (max-width: 768px){
  display: none;
}
`;

const StyledGetStartedCont2 = styled.button`
width: 218px;
max-height: 60px;
padding: 16px 30px;
column-gap: 11px;
border-radius: 100px;
background-color: #1B442A;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
border: none;


opacity: 0px;
color: #FFFFFF;
font-size: 16px;
font-weight: 400;
line-height: 20.16px;
text-align: left;



@media only screen and (min-width:1728px){
margin-top: 49.65px;
margin-left: 30px;
  }

@media only screen and (min-width:992px) and (max-width:1727px){
margin-top: 20.65px;
margin-left: 0px;
}

@media only screen and (min-width:769px) and (max-width:991px){
  /* border: 1px solid red; */
  width: 100%;
  margin-top: 30px;
}
@media only screen and (max-width:768px){
width: 218px;
height: 56px;
padding: 14px 30px;
margin-top: 49.65px;
}
`;