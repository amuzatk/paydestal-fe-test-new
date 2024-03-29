import { StyledFlex, StyledLink } from '@/__style/ui-block.style';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import NavLogo from '../../public/assets/icons/Nav_Logo.png'

const Logo = ({ white }: { white?: boolean }) => {
  return (
    <Link href={'/'}>
      <StyledLogoFlex align="center" cg="9.07px">
        <Image
        src={NavLogo}  
                  width={243}
                  height={74.47}
                  alt="Vendor stack logo"  />
      </StyledLogoFlex>
    </Link>
  );
};
export default Logo;

const StyledLogoFlex = styled(StyledFlex)`
  display: inline-flex;
`;
const StyledText = styled(StyledLink)<{ white: boolean }>`
  background: ${({ white }) =>
    !white && '-webkit-linear-gradient(#4568dc, #b06ab3);'};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: ${({ white }) => !white && 'transparent'};
`;
