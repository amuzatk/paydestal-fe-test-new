import { StyledDiv, StyledFlex } from '@/__style/ui-block.style';
import React from 'react'
import styled from 'styled-components';

const SafariToolBar = () => {
  return (
    <StyledContainer>
<StyledLeft>
<p>SAFARA SAFARASAFARASAFARASAFARASAFARASAFARASAF</p>
</StyledLeft>

<StyledMiddle>
<p>SAFARA SAFARASAFARASAFARASAFARASAFARASAFARASAF</p>
</StyledMiddle>

<StyledRight>
<p>SAFARA SAFARASAFARASAFARASAFARASAFARASAFARASAF</p>
</StyledRight>
    </StyledContainer>
  )
}

export default SafariToolBar
const StyledContainer = styled(StyledFlex)`
flex-direction: row;
justify-content: space-between;
align-items: center;
/* width: 1728px; */
border: 1px solid  #EEEEEE;
width: 100%;

@media only screen and (min-width:1728px){  
max-height: 51.63px;
}

@media only screen and (min-width:1200px) and (max-width:1727){
max-height: 41.63px;
}
`;
const StyledLeft = styled(StyledDiv)`
border: 1px solid red;
`;
const StyledMiddle = styled(StyledDiv)`
border: 1px solid green;
`;
const StyledRight = styled(StyledDiv)`
border: 1px solid blue;
`;

