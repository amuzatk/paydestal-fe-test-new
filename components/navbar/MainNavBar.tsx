import { StyledFlex, StyledLink } from '@/__style/ui-block.style';
import { NAV_1_LINKS } from '@/navigations';
import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useState } from 'react'
import Logo from './Logo';
import { NAV_2_LINKS } from '@/navigations/links';
import styled from 'styled-components';

const NavBar = () => {
    //Simulating existence of token
    const [token] = useState(false);
    const { route } = useRouter();
  return (
    <StyledHeader>
      <StyledFlex cg="24px" align="center">
        <Logo />
        {NAV_1_LINKS.map((item, i) => {
          const isActive = route === item.LINK;
          return (
            <Link href={item.LINK} key={i}>
              <StyledLink
                fsize="16px"
                lh="20.16px"
                fw="400"
                textAlign='center'
                // activeColor="var(--btn-text-hover)"
                activeColor="#F4B23E"
                isActive={isActive}
                // color="var(--secondary-text)"
                color="#202020"
                as="span"
              >
                {item.TITLE}
              </StyledLink>
            </Link>
          );
        })}
      </StyledFlex>
      {!token ? (
        <StyledFlex cg="6px" align="center">
          {NAV_2_LINKS.map((item, i) => {
            const isVendor = route === '/';
            if (isVendor && item.TYPE === 1) {
              return (
                <Link href={item.LINK} key={i}>
                  <StyledLinkBtn
                    fsize="16px"
                    lh="20px"
                    fw="600"
                    // color="var(--primary-text)"
                    color="red"
                    type={item.SLUG}
                    as="span"
                  >
                    {item.TITLE}
                  </StyledLinkBtn>
                </Link>
              );
            } 
          })}
        </StyledFlex>
      ) : (
        null
        // <div>No token</div>
        )}
    </StyledHeader>
  )
}

export default NavBar

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 30px;
  padding: 20px 0px;
  background-color: white;
  width: 100%;
`;

const StyledLinkBtn = styled(StyledLink) <{ type: string }>`
  color: ${({ type }) =>
    type === 'login' ? '#202020' : 'white'}!important;
  background: ${({ type }) =>
    type === 'login' ? 'transparent' : '#1B442A'};
  border: 1px solid
    ${({ type }) => (type === 'login' ? 'var(--border-6)' : 'var(--border-6)')};
  padding: 12px 25px;
  border-radius:80px;
font-size: 14px;
font-weight: 400;
line-height: 17.64px;
text-align: left;

  transition: all 0.3s;
  &:hover {
    border: 1px solid var(--primary-text);
    transition: all 0.3s;
    background-color: ${({ type }) =>
    type === 'login' ? 'transparent' : '#F4B23E'};
    /* color: var(--primary-text) !important; */
  }
`;












// import { useRouter } from 'next/router';
// import styled from 'styled-components';
// import NavBarMobile from './NavBarMobile';
// import MainNavBar from './MainNavBar';
// import { StyledContainerFluid, StyledDiv } from '@/__style/ui-block.style';

// const Navbar = () => {
//   const { route } = useRouter();
//   const isShopperActive = route.includes('/');
//   return (
//     <StyledSticky isShopperActive={isShopperActive}>
//       <StyledNavContainer>
//         <StyledDiv className="nav__web">
//           <MainNavBar />
//           {/* <StyledUnderline border="1px solid var(--border)" /> */}
//         </StyledDiv>
//         <StyledDiv className="nav__mobile">
//           <NavBarMobile />
//         </StyledDiv>
//       </StyledNavContainer>
//     </StyledSticky>
//   );
// };

// export default Navbar;

// const StyledSticky = styled.div<{ isShopperActive: boolean }>`
//   position: fixed;
//   top: 0;
//   width: 100%;
//   z-index: 2000;
//   /* position: -webkit-sticky; */
//   /* top: 0;
//   z-index: 2000;
//   z-index: 1000; */
//   background-color: ${({ isShopperActive }) =>
//     isShopperActive ? 'var(--btn-hover_2)' : 'var(--background-primary_4)'};
    
// `;

// const StyledNavContainer = styled(StyledContainerFluid)`
//   .nav {
//     &__mobile {
//       display: none;
//     }
//   }
//   @media only screen and (max-width: 900px) {
//     .nav {
//       &__web {
//         display: none;
//       }
//       &__mobile {
//         display: block;
//       }
//     }
//   }
// `;

