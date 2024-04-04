import { StyledDiv, StyledFlex } from '@/__style/ui-block.style';
import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import ControlIcon from '../../../public/assets/icons/Controls.png'
import SidebarToggleIcon from '../../../public/assets/icons/Sidebar-Toggle.png'
import ChevronLeftIcon from '../../../public/assets/icons/chevron-left.png'
import ChevronRightIcon from '../../../public/assets/icons/chevron-right.png'


const ToggleComponent = () => {
  return (
    <StyledContainer>
      <StyledControl>
        <Image src={ControlIcon} width={52} height={12} alt='Control Icon' />
      </StyledControl>
      <StyledToggle>
        <Image src={SidebarToggleIcon} width={38.21} height={18} alt='Sidebar Toggle Icon' />
      </StyledToggle>
      <StyledChevron>
        <Image src={ChevronLeftIcon} width={7.64} height={13.56} alt='ChevronLeft Icon' />
        <Image src={ChevronRightIcon} width={7.64} height={13.56} alt='ChevronRight Icon' />
      </StyledChevron>
    </StyledContainer>
  )
}

export default ToggleComponent
const StyledContainer = styled(StyledFlex)`
/* border: 1px solid red; */
flex-direction: row;
justify-content: flex-start;

column-gap: 27px;
align-items: center;
`;

const StyledControl = styled(StyledDiv)`
img{
    width: 100%;
    height: 100%;
}
/* border: 1px solid blue; */
`;

const StyledToggle = styled(StyledDiv)`
img{
    width: 100%;
    height: 100%;
}
/* border: 1px solid green; */
`;

const StyledChevron = styled(StyledFlex)`
flex-direction: row;
justify-content: center;
align-items: center;
column-gap: 28.34px;
/* border: 1px solid yellow; */
`;