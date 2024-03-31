import React, { useEffect, useState } from "react";
import { MenuOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import Image from "next/image";
import Logo from '../../public/assets/icons/Nav_Logo.png';
import MobileLogo from '../../public/assets/icons/PaydestalMobileLogo.png';
import Link from "next/link";
import styled from "styled-components";
import LogoIcon from "./Logo";
import { StyledContainerFluid } from "@/__style/ui-block.style";

const NavBar = () => {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(typeof window !== "undefined" ? window.innerWidth : 0);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <StyledFixed>
    <StyledHeader>
      <StyledLogo href="/dashboard">
        {/* <LogoIcon /> */}
        <Image className="web" src={Logo} width={243} height={74.47} alt="Paydestal Logo" />
        <Image className="mobile" src={MobileLogo} width={155} height={50} alt="Paydestal Logo" />
      </StyledLogo>
      {screenWidth <= 900 ? (
        <StyledMobileBtn onClick={() => setDrawerVisible(true)}>
          <MenuOutlined />
        </StyledMobileBtn>
      ) : (
        <><StyledNav>
              <StyledMenu>
                <li>
                  <StyledLink onClick={closeDrawer} href="/services">Services</StyledLink>
                </li>
                <li>
                  <StyledLink onClick={closeDrawer} href="/contact">Pricing</StyledLink>
                </li>
                <li>
                  <StyledLink onClick={closeDrawer} href="/projects">Developer</StyledLink>
                </li>
                <li>
                  <StyledLink onClick={closeDrawer} href="/about-us">Why Paydestal</StyledLink>
                </li>
                <li>
                  <StyledLink onClick={closeDrawer} href="/about-us">Company</StyledLink>
                </li>
                <li>
                  <StyledLink onClick={closeDrawer} href="/about-us">Support</StyledLink>
                </li>
              </StyledMenu>
            </StyledNav>
            <StyledAuthButtons>
                <li
                >
                  <Link href="/login">
                    <button onClick={closeDrawer}>Login</button>
                  </Link>
                </li>
                <li style={{
                  // visibility:"hidden"
                }}>
                  <Link href="/register">
                    <StyledButton onClick={closeDrawer}>Register</StyledButton>
                  </Link>
                </li>
              </StyledAuthButtons></>
      )}
      <Drawer
        title=""
        placement="left"
        onClose={closeDrawer}
        open={drawerVisible}
      >
        <StyledDrawerMenu>
          <li>
            <StyledLink onClick={closeDrawer} href="/services">Services</StyledLink>
          </li>
          <li>
            <StyledLink onClick={closeDrawer} href="/contact">Pricing</StyledLink>
          </li>
          <li>
            <StyledLink onClick={closeDrawer} href="/projects">Developer</StyledLink>
          </li>
          <li>
            <StyledLink onClick={closeDrawer} href="/about-us">Why Paydestal</StyledLink>
          </li>
          <li>
            <StyledLink onClick={closeDrawer} href="/about-us">Company</StyledLink>
          </li>
          <li>
            <StyledLink onClick={closeDrawer} href="/about-us">Support</StyledLink>
          </li>
          <li>
            <StyledLink onClick={closeDrawer} href="/login">Login</StyledLink>
          </li>
          <li>
            <StyledLink onClick={closeDrawer} href="/register">Register</StyledLink>
          </li>
        </StyledDrawerMenu>
      </Drawer>
    </StyledHeader>
    </StyledFixed>
  );
};

export default NavBar;
const StyledFixed = styled.div`
border: 1px solid green;
 position: fixed;
 top: 0;
  z-index: 999;
  width: 100%;
  background-color: #fff;
`;
const StyledHeader = styled(StyledContainerFluid)`
  background-color: #f1d9d9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* height: 104.28px; */
  /* padding: 15px 60px; */
`;

const StyledLogo = styled.a`
  cursor: pointer;

  @media only screen and (max-width:1199px){
    .mobile{
      display: inline-block;
    }
    .web{
      display: none;
    }
  }

  @media only screen and (min-width:1200px){
    .mobile{
      display: none;
    }

    .web{
      display: inline-block;
    }
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  padding-right: 250px;
  /* padding-left: -30px; */

  @media only screen and (max-width:1727px){
  padding-right: 30px;
  /* justify-content: center; */
 }

  /* @media only screen and (max-width:1400px){
  padding-right: 10px;
 } */
 @media only screen and (max-width:1360px){
  padding-right: 70px;
  /* justify-content: center; */
 }
`;

const StyledMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  height: 100%;
`;

const StyledDrawerMenu = styled(StyledMenu)`
  flex-direction: column;
`;

const StyledLink = styled.a`
  text-decoration: none;
  /* color: #000; */
  color: #202020;

  margin-right: 20px;
  cursor: pointer;

  /* font-family: Plus Jakarta Sans; */
font-size: 16px;
font-weight: 400;
line-height: 20.16px;
text-align: center;


  &:hover {
    color: #555;
  }
`;

const StyledAuthButtons = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;

  @media only screen and (min-width:901px) and (max-width:1400px){
    display: none;
  }
`;

const StyledButton = styled.button`
  background-color:#1B442A;
  color: #fff;
  border: none;
  border-radius:80px;
  padding:12px 25px;
  cursor: pointer;
  margin-left: 10px;
  width: 129px;
  height: 42px;

  &:hover {
    background-color: #0056b3;
  }
`;

const StyledMobileBtn = styled.div`
  display: none;

  @media only screen and (max-width: 900px) {
    display: block;
    margin-right: 60px;
    /* z-index: 2000; */
  }
`;

// import React, { useEffect, useState } from "react";
// import { MenuOutlined, DownOutlined } from '@ant-design/icons';
// import { Drawer, Dropdown, Menu } from 'antd';
// import Image from "next/image";
// import Logo from '../../public/assets/icons/Nav_Logo.png';
// import MobileLogo from '../../public/assets/icons/PaydestalMobileLogo.png';
// import Link from "next/link";
// import styled from "styled-components";
// import LogoIcon from "./Logo";
// import { StyledContainerFluid } from "@/__style/ui-block.style";

// const NavBar = () => {
//   const [screenWidth, setScreenWidth] = useState(
//     typeof window !== "undefined" ? window.innerWidth : 0
//   );
//   const [drawerVisible, setDrawerVisible] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setScreenWidth(typeof window !== "undefined" ? window.innerWidth : 0);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);


//   const closeDrawer = () => {
//     setDrawerVisible(false);
//   };

//   const menu = (
//     <Menu>
//       <Menu.Item key="login">
//         <Link href="/login">
//           <a onClick={closeDrawer}>Login</a>
//         </Link>
//       </Menu.Item>
//       <Menu.Item key="register">
//         <Link href="/register">
//           <a onClick={closeDrawer}>Register</a>
//         </Link>
//       </Menu.Item>
//     </Menu>
//   );

//   return (
//     <StyledFixed>
//       <StyledHeader>
//         <StyledLogo href="/dashboard">
//           <Image className="web" src={Logo} width={243} height={74.47} alt="Paydestal Logo" />
//           <Image className="mobile" src={MobileLogo} width={155} height={50} alt="Paydestal Logo" />
//         </StyledLogo>
//         {screenWidth <= 900 ? (
//           <StyledMobileBtn onClick={() => setDrawerVisible(true)}>
//             <MenuOutlined />
//           </StyledMobileBtn>
//         ) : (
//           <>
//             <StyledNav>
//               <StyledMenu>
//                 <li>
//                   <StyledLink onClick={closeDrawer} href="/services">Services</StyledLink>
//                 </li>
//                 <li>
//                   <StyledLink onClick={closeDrawer} href="/contact">Pricing</StyledLink>
//                 </li>
//                 <li>
//                   <StyledLink onClick={closeDrawer} href="/projects">Developer</StyledLink>
//                 </li>
//                 <li>
//                   <StyledLink onClick={closeDrawer} href="/about-us">Why Paydestal</StyledLink>
//                 </li>
//                 <li>
//                   <StyledLink onClick={closeDrawer} href="/about-us">Company</StyledLink>
//                 </li>
//                 <li>
//                   <StyledLink onClick={closeDrawer} href="/about-us">Support</StyledLink>
//                 </li>
//               </StyledMenu>
//             </StyledNav>
//           </>
//         )}
//         {(screenWidth >= 901 && screenWidth <= 1350) && (
//           <StyledAuthDropdown>
//             <Dropdown overlay={menu} placement="bottomRight" arrow>
//               <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
//                 Login/Register <DownOutlined />
//               </a>
//             </Dropdown>
//           </StyledAuthDropdown>
//         )}
//         <Drawer
//           title=""
//           placement="left"
//           onClose={closeDrawer}
//           open={drawerVisible}
//         >
//           <StyledDrawerMenu>
//             <li>
//               <StyledLink onClick={closeDrawer} href="/services">Services</StyledLink>
//             </li>
//             <li>
//               <StyledLink onClick={closeDrawer} href="/contact">Pricing</StyledLink>
//             </li>
//             <li>
//               <StyledLink onClick={closeDrawer} href="/projects">Developer</StyledLink>
//             </li>
//             <li>
//               <StyledLink onClick={closeDrawer} href="/about-us">Why Paydestal</StyledLink>
//             </li>
//             <li>
//               <StyledLink onClick={closeDrawer} href="/about-us">Company</StyledLink>
//             </li>
//             <li>
//               <StyledLink onClick={closeDrawer} href="/about-us">Support</StyledLink>
//             </li>
//             <li>
//               <StyledLink onClick={closeDrawer} href="/login">Login</StyledLink>
//             </li>
//             <li>
//               <StyledLink onClick={closeDrawer} href="/register">Register</StyledLink>
//             </li>
//           </StyledDrawerMenu>
//         </Drawer>
//       </StyledHeader>
//     </StyledFixed>
//   );
// };

// export default NavBar;

// const StyledFixed = styled.div`
//   border: 1px solid green;
//   position: fixed;
//   top: 0;
//   z-index: 999;
//   width: 100%;
//   background-color: #fff;
// `;

// const StyledHeader = styled(StyledContainerFluid)`
//   background-color: #f1d9d9;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const StyledLogo = styled.a`
//   cursor: pointer;

//   @media only screen and (max-width: 1199px) {
//     .mobile {
//       display: inline-block;
//     }
//     .web {
//       display: none;
//     }
//   }

//   @media only screen and (min-width: 1200px) {
//     .mobile {
//       display: none;
//     }

//     .web {
//       display: inline-block;
//     }
//   }
// `;

// const StyledNav = styled.nav`
//   display: flex;
//   align-items: center;
//   padding-right: 250px;
// `;

// const StyledMenu = styled.ul`
//   list-style: none;
//   margin: 0;
//   padding: 0;
//   display: flex;
//   align-items: center;
//   height: 100%;
// `;

// const StyledDrawerMenu = styled(StyledMenu)`
//   flex-direction: column;
// `;

// const StyledLink = styled.a`
//   text-decoration: none;
//   color: #000;
//   margin-right: 20px;
//   cursor: pointer;

//   &:hover {
//     color: #555;
//   }
// `;

// const StyledAuthDropdown = styled.div`
//   margin-left: 10px;
// `;

// const StyledMobileBtn = styled.div`
//   display: none;

//   @media only screen and (max-width: 900px) {
//     display: block;
//     margin-right: 60px;
//   }
// `;
