import CollectionIcon from '../../public/assets/svg/collection.svg';
import CardProcessingIcon from '../../public/assets/svg/Card-processing.svg';
import BankTransferIcon from '../../public/assets/svg/bank-transfer.svg';
import PayoutIcon from '../../public/assets/svg/payout.svg';
import RemittanceIcon from '../../public/assets/svg/remittance.svg';
import UssdIcon from '../../public/assets/svg/ussd.svg';
import { StyledFlex, StyledFlexItem } from '@/__style/ui-block.style';
import Image from 'next/image';
import styled from 'styled-components';

 const IconComponent = () => {
  const icons = [
    { icon: CollectionIcon, title: "Pay-in Collections " },
    { icon: RemittanceIcon, title: "International Remittance" },
    { icon: PayoutIcon, title: "Pay-Out Transfers " },
    { icon: UssdIcon, title: "USSD Payments" },
    { icon: BankTransferIcon, title: "Bank Transfer Payments " },
    { icon: CardProcessingIcon, title: "Card Processing" },
  ];

  return (
    <>
      {icons.map((item, i) => (
        <StyledContainer 
          fDirection='row'
          justify='start'
          align='center'
          g='30px'
          key={i}
        >
          <StyledItem1
          p='5px'
          >
            <Image src={item.icon} 
            width={40} 
            height={41}
            alt={item.title}
             />
          </StyledItem1>
          <StyledItem 
          color='#FFFFFF'
        textAlign='left'
          >
            {item.title}
          </StyledItem>
        </StyledContainer>
      ))}
    </>
  );
}
export default IconComponent
const StyledContainer = styled(StyledFlex)`
`;

const StyledItem1 = styled(StyledFlexItem)`
            width: 40px;
            height: 41px;

            img{
              width: 100%;
              height: 100%;
              object-fit: contain;
            }

            @media only screen and (min-width:1728px){
              width: 40px;
            height: 41px;
}

  @media only screen and (min-width:1199px) and (max-width:1727px){
width: 37px;
height: 37px;
}

@media only screen and (min-width:992px) and (max-width:1198px){
width: 33px;
height: 33px;
}

@media only screen and (min-width:769px) and (max-width:991px){
width: 30px;
height: 30px;
}

@media only screen and (max-width:768px){
width: 30px;
height: 30px;
}
`;
const StyledItem= styled(StyledFlexItem)`
        font-weight: 400;
        line-height: 30.24px;

        @media only screen and (min-width:1728px){
font-size: 24px;
}

@media only screen and (min-width:1199px) and (max-width:1727px){
font-size: 20px;
}

        @media only screen and (min-width:992px) and (max-width:1198px){
font-size: 16px;
}

@media only screen and (max-width:768px){
font-size: 24px;
}

@media only screen and (max-width:500px){
font-size: 19px;
}
`;