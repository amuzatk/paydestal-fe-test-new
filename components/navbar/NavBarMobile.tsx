// import {
//     StyledButton,
//     StyledDiv,
//     StyledFlex,
//     StyledLink,
//     StyledUnderline,
//   } from '@/components/__style/ui-block.style';
//   import Link from 'next/link';
//   import { useRouter } from 'next/router';
//   import { useState } from 'react';
//   import styled from 'styled-components';
//   import { MobileMenu } from '../../../constants/svgs';
//   import {
//     MAIN_NAV_1_LINKS,
//     MAIN_NAV_2_LINKS,
//     NAV_TOP_2_LINKS,
//   } from '../../../navigations';
//   import Logo from '../Logo';
  
//   const NavbarMobile = () => {
//     const [isMenuActive, setIsMenuActive] = useState(false);
//     const { route } = useRouter();
//     const toggleMenu = () => setIsMenuActive(!isMenuActive);
//     const isShopper = route === '/shoppers/my-order';
//     return (
//       <>
//         <StyledHeader>
//           <StyledDiv>
//             <Logo />
//           </StyledDiv>
//           <StyledBtn onClick={toggleMenu} aria-label="toggle menu">
//             <MobileMenu active={isMenuActive} />
//           </StyledBtn>
//         </StyledHeader>
//         {isMenuActive && (
//           <StyledDropMenu isShopper={isShopper}>
//             <StyledDiv>
//               <StyledUnderline
//                 mt="14px"
//                 mb="14px"
//                 border="1px solid var(--border)"
//               />
//               {MAIN_NAV_1_LINKS.map((item, i) => {
//                 return (
//                   <StyledDiv p="14px 0" key={i}>
//                     <Link href={item.LINK} onClick={toggleMenu}>
//                       <StyledLink
//                         fsize="16px"
//                         lh="20px"
//                         fw="600"
//                         color="var(--secondary-text)"
//                         as="span"
//                       >
//                         {item.TITLE}
//                       </StyledLink>
//                     </Link>
//                   </StyledDiv>
//                 );
//               })}
//               <StyledUnderline
//                 mt="14px"
//                 mb="16px"
//                 border="1px solid var(--border)"
//               />
  
//               {/* Login  */}
//               <StyledFlex cg="16px" align="center">
//                 {MAIN_NAV_2_LINKS.map((item, i) => {
//                   const isVendor = route === '/';
//                   if (isVendor && item.TYPE === 1) {
//                     return (
//                       <StyledLinkCon key={i}>
//                         <Link href={item.LINK} onClick={toggleMenu}>
//                           <StyledLinkBtn
//                             fsize="16px"
//                             lh="20px"
//                             fw="600"
//                             color="var(--primary-text)"
//                             type={item.SLUG}
//                             as="span"
//                           >
//                             {item.TITLE}
//                           </StyledLinkBtn>
//                         </Link>
//                       </StyledLinkCon>
//                     );
//                   } else if (!isVendor && item.TYPE === 2) {
//                     return (
//                       <StyledLinkCon key={i}>
//                         <Link href={item.LINK} onClick={toggleMenu}>
//                           <StyledLinkBtn
//                             fsize="16px"
//                             lh="20px"
//                             fw="600"
//                             color="var(--primary-text)"
//                             type={item.SLUG}
//                             as="span"
//                           >
//                             {item.TITLE}
//                           </StyledLinkBtn>
//                         </Link>
//                       </StyledLinkCon>
//                     );
//                   }
//                 })}
//               </StyledFlex>
//               <StyledDiv pt="14px">
//                 {NAV_TOP_2_LINKS.map((item, i) => (
//                   <StyledDiv p="14px 0" key={i}>
//                     <Link href={item.LINK} onClick={toggleMenu}>
//                       <StyledLink
//                         fsize="16px"
//                         lh="20px"
//                         fw="600"
//                         color="var(--secondary-text)"
//                         as="span"
//                       >
//                         {item.TITLE}
//                       </StyledLink>
//                     </Link>
//                   </StyledDiv>
//                 ))}
//               </StyledDiv>
//             </StyledDiv>
//           </StyledDropMenu>
//         )}
//       </>
//     );
//   };
  
//   export default NavbarMobile;
//   const StyledLinkCon = styled.div`
//     flex-grow: 1;
//     text-align: center;
//   `;
//   const StyledLinkBtn = styled(StyledLink)<{ type: string }>`
//     display: block;
//     color: ${({ type }) =>
//       type === 'login' ? 'var(--primary-text)' : 'var(--white)'}!important;
//     background-color: ${({ type }) =>
//       type === 'login' ? 'transparent' : 'var(--primary-text)'};
//     border: 1px solid
//       ${({ type }) =>
//         type === 'login' ? 'var(--border)' : 'var(--primary-text)'};
//     padding: 10px 16px;
//     border-radius: 6px;
//     transition: all 0.3s;
//     &:hover {
//       border: 1px solid var(--primary-text);
//       transition: all 0.3s;
//       background-color: ${({ type }) =>
//         type === 'login' ? 'transparent' : 'var(--btn-hover)'};
//       color: var(--primary-text) !important;
//     }
//   `;
//   const StyledHeader = styled.header`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     column-gap: 30px;
//     padding: 24px 0;
//   `;
  
//   const StyledBtn = styled(StyledButton)`
//     background: var(--white) !important;
//     border: 1px solid var(--border) !important;
//     box-shadow: 0px 1px 2px var(--shadow_2) !important;
//     border-radius: 6px !important;
//     padding: 8px !important;
//     display: flex !important;
//     align-items: center !important;
//     justify-content: center !important;
//   `;
  
//   const StyledDropMenu = styled.div<{ isShopper: boolean }>`
//     background-color: ${({ isShopper }) =>
//       isShopper ? 'var(--btn-hover)' : 'var(--white)'};
//     padding-bottom: 30px;
//     height: calc(100vh - 86px);
//     overflow-y: scroll;
//     /* Hide scrollbar for Chrome, Safari and Opera */
//     &::-webkit-scrollbar {
//       display: none;
//     }
//     /* Hide scrollbar for IE, Edge and Firefox */
//     -ms-overflow-style: none; /* IE and Edge */
//     scrollbar-width: none; /* Firefox */
//   `;
  

import React from 'react'

const NavBarMobile = () => {
  return (
    <div>
      <h1>
        Mobile Navbar
      </h1>
    </div>
  )
}

export default NavBarMobile
