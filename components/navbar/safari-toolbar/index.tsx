import { StyledDiv, StyledFlex } from '@/__style/ui-block.style';
import React from 'react'
import styled from 'styled-components';
import ToggleComponent from './ToggleComponent';
import SearchBar from './SearchBar';
import ArrowUp from './ArrowUp';

const SafariToolBar = () => {
  return (
    <StyledContainer>
<StyledLeft>
<ToggleComponent />

</StyledLeft>

<StyledMiddle>
<SearchBar />

</StyledMiddle>

<StyledRight>
<ArrowUp />
</StyledRight>

    </StyledContainer>
  )
}

export default SafariToolBar
const StyledContainer = styled(StyledFlex)`
flex-direction: row;
justify-content: center;
align-items: center;
/* column-gap: 60px; */
/* flex: 1; */
/* width: 1628px; */
border: 1px solid  #EEEEEE;
padding: 0 20px;

@media only screen and (min-width:1728px){  
/* max-height: 51.63px; */
height: 51.63px;
}

@media only screen and (min-width:1200px) and (max-width:1727){
max-height: 41.63px;
}
`;
const StyledLeft = styled(StyledDiv)`
flex: auto;
/* border: 1px solid red; */
`;
const StyledMiddle = styled(StyledDiv)`
flex: auto;
/* border: 1px solid green; */
`;
const StyledRight = styled(StyledDiv)`
flex: auto;
/* border: 1px solid blue; */
`;

