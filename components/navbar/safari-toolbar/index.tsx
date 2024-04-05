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
border: 1px solid  #EEEEEE;
padding: 0 20px;

@media only screen and (min-width:1728px){  
height: 51.63px;
}

@media only screen and (min-width:1201px) and (max-width:1727px){
height: 35.63px;
}

@media only screen and (max-width:1200px){  
display: none;
}
`;
const StyledLeft = styled(StyledDiv)`
flex: auto;
`;
const StyledMiddle = styled(StyledDiv)`
flex: auto;
`;
const StyledRight = styled(StyledDiv)`
flex: auto;
`;

