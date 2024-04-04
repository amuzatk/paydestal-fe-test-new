import { StyledFlex } from '@/__style/ui-block.style';
import React from 'react'
import styled from 'styled-components';
import ArrowUpIcon from '../../../public/assets/icons/square.and.arrow.up.png'
import PlusIcon from '../../../public/assets/icons/plus-Safari.png'
import GridIcon from '../../../public/assets/icons/square-Grid.png'

import Image from 'next/image';

const ArrowUp = () => {
  return (
       <StyledArrowUp>
      <Image src={ArrowUpIcon} width={13.87} height={17.63} alt='Shield half filled' className='arrowUp' />
      <Image src={PlusIcon} width={12.89} height={12.89} alt='Shield half filled' className='plus' />
      <Image src={GridIcon} width={14.38} height={14.38} alt='Shield half filled' className='grid' />
      </StyledArrowUp>
  )
}

export default ArrowUp
const StyledArrowUp = styled(StyledFlex)`
justify-content:flex-end;
align-items: center;

@media only screen and (min-width:1728px){ 
column-gap: 23.36px;
/* max-height: 51.63px; */
/* height: 51.63px; */
}

@media only screen and (min-width:1200px) and (max-width:1727px){
column-gap: 22.36px;
/* max-height: 41.63px; */
}
`;