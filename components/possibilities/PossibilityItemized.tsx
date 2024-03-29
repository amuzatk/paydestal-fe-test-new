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
        <StyledFlex 
          fDirection='row'
          justify='start'
          align='center'
          // g='20px'
          g='10px'
        //   m='40px 0'
          key={i}
        >
          <StyledFlexItem
          p='5px'
          >
            <Image src={item.icon} 
            // width={40} 
            // height={40}
            width={30} 
            height={30} 
            alt={item.title}
             />
          </StyledFlexItem>
          <StyledList 
          color='#202020'
          // fsize='24px'
          // fsize='19px'
          fsize='16px'
        textAlign='left'

          >
            {item.title}
          </StyledList>
        </StyledFlex>
      ))}
    </>
  );
}
export default PossibilityItemized
const StyledList = styled(StyledFlexItem)`
font-weight: 400;
line-height: 30.24px;

@media only screen and (max-width:768px){
font-size: 14px;
/* font-weight: 400; */
line-height: 17.64px;
text-align: left;

}
`;