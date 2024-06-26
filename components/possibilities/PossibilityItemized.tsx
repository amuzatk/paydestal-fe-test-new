import PossibilityIcon from '../../public/assets/icons/possibilityIcon2.png';
import { StyledFlex, StyledFlexItem } from '@/__style/ui-block.style';
import Image from 'next/image';
import styled from 'styled-components';

 const PossibilityItemized = () => {
  const icons = [
    { icon: PossibilityIcon, title: "Effortless  electronic payments  " },
    { icon: PossibilityIcon, title: "Swiftly move funds between accounts" },
    { icon: PossibilityIcon, title: "Simplify your payments with USSD service " },
    { icon: PossibilityIcon, title: "Cross-border settlement service" },
    { icon: PossibilityIcon, title: "Transactions to external accounts  or beneficiaries " },
  ];

  return (
    <>
      {icons.map((item, i) => (
        <StyledWrapper 
          fDirection='row'
          justify='start'
          align='center'
          g='9px'
          key={i}
        >
          <StyledIcon
          p='16px 0'
          >
            <Image src={item.icon} 
            width={40} 
            height={40}
            alt={item.title}
             />
          </StyledIcon>
          <StyledList 
          color='#202020'
          fsize='24px'
        textAlign='left'

          >
            {item.title}
          </StyledList>
        </StyledWrapper>
      ))}
    </>
  );
}
export default PossibilityItemized
const StyledWrapper = styled(StyledFlex)`

@media only screen and (min-width: 1728px) {
  padding: 0;
}

@media only screen and (min-width: 992px) and (max-width: 1727px) {
  padding: 0;
}
`;

const StyledList = styled(StyledFlexItem)`
font-weight: 400;

@media only screen and (min-width: 1728px) {
  line-height: 30.24px;
}

@media only screen and (min-width: 992px) and (max-width: 1727px) {
  line-height: 20.24px;
  font-size: 18px;
}

@media only screen and (max-width:768px){
font-size: 14px;
line-height: 17.64px;
text-align: left;

}
`;

const StyledIcon = styled(StyledFlexItem)`

img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@media only screen and (min-width: 1728px) {
width: 46px;
height: 46px;
}

@media only screen and (min-width: 992px) and (max-width: 1727px) {
  width: 40px;
height: 40px;
padding: 8px 0;
}

@media only screen and (min-width: 769px) and (max-width: 991px) {
  width: 35px;
height: 35px;
padding: 7px 0;
}

@media only screen and (max-width: 768px) {
  max-width: 26px;
max-height: 26px;
padding: 5px 0;
}
`;