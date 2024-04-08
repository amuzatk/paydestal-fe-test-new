import { StyledFlex, StyledFlexItem } from '@/__style/ui-block.style';
import React from 'react'
import styled from 'styled-components';
import ShieldIcon from '../../../public/assets/icons/shieldIcon.png'
import LockIcon from '../../../public/assets/icons/lock.fille.png'
import ArrowClockwiseIcon from '../../../public/assets/icons/arrow-clockwise.png'


import Image from 'next/image';

const SearchBar = () => {
  return (
    <StyledContainer>
       <StyledShield>
        <Image src={ShieldIcon} width={12.98} height={15.78} alt='Shield half filled' />
      </StyledShield>

      <StyledSearch>
        <input type="text" placeholder='paydestal.com' />
        <Image src={LockIcon} width={7.83} height={11.43} alt='Shield half filled' className='lock' />
        <Image src={ArrowClockwiseIcon} width={11.2} height={13.67} alt='Arrow Clockwise Icon' className='arrow' />
      </StyledSearch>
    </StyledContainer>
  )
}

export default SearchBar
const StyledContainer = styled(StyledFlex)`
flex-direction: row;
justify-content: flex-start;
align-items: center;


@media only screen and (min-width:1728px){ 
  column-gap: 15.76px;
}

@media only screen and (min-width:1200px) and (max-width:1727px){
column-gap: 14px;
}
`;
const StyledShield = styled(StyledFlexItem)``;

const StyledSearch = styled(StyledFlexItem)`
border: 1px solid #00000040;
position: relative;


input{
border-radius: 8px;
font-size: 14px;
font-weight: 400;
line-height: 17.64px;
text-align: center;
color: #999999;
border: none;
}

.lock, .arrow{
  position: absolute;
}

@media only screen and (min-width:1728px){
width: 704px;
height: 28px;
border-radius: 8px;

input{
  width: 700px;
height: 26px;
}

.lock{
  left: 290px;
  top: 8px;
}

.arrow{
  right: 3px;
  top: 8px;
}
}




@media only screen and (min-width:1200px) and (max-width:1727px){
  width: 604px;
height: 26px;
border-radius: 8px;


input{
  width: 600px;
height: 24px;
}


.lock{
  left: 241px;
  top: 6px;
}

.arrow{
  right: 3px;
  top: 6px;
}
}
`;