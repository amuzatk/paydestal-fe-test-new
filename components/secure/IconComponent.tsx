// import CollectionIcon from '../../../public/assets/svg/collection.svg';
import CollectionIcon from '../../public/assets/svg/collection.svg';
import CardProcessingIcon from '../../public/assets/svg/Card-processing.svg';
import BankTransferIcon from '../../public/assets/svg/bank-transfer.svg';
import PayoutIcon from '../../public/assets/svg/payout.svg';
import RemittanceIcon from '../../public/assets/svg/remittance.svg';
import UssdIcon from '../../public/assets/svg/ussd.svg';
import { StyledFlex, StyledFlexItem } from '@/__style/ui-block.style';
import Image from 'next/image';

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
        <StyledFlex 
          fDirection='row'
          justify='start'
          align='center'
          g='30px'
          key={i}
        >
          <StyledFlexItem
          p='5px'
          >
            <Image src={item.icon} 
            // width={40} 
            // height={41}
            width={35} 
            height={36} 
            alt={item.title}
             />
          </StyledFlexItem>
          <StyledFlexItem 
          color='#FFFFFF'
        //   fsize='24px'
          fsize='18px'
        // fw='400'
        // lh='30.24px'
        textAlign='left'
          >
            {item.title}
          </StyledFlexItem>
        </StyledFlex>
      ))}
    </>
  );
}
export default IconComponent