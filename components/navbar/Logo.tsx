import { StyledFlex } from '@/__style/ui-block.style';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import NavLogo from '../../public/assets/icons/Nav_Logo.png';

const LogoIcon = () => {
  return (
    <Link href={'/'}>
      <StyledLogoFlex align="center">
        <Image
        src={NavLogo}  
                  width={243}
                  height={74.47}
                  alt="Paydestal logo" />
      </StyledLogoFlex>
    </Link>
  );
};
export default LogoIcon;

const StyledLogoFlex = styled(StyledFlex)`
  display: inline-flex;
`;
