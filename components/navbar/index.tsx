// import React, { useEffect, useState } from "react";
// import { MenuOutlined } from '@ant-design/icons';
// import { Drawer } from 'antd';
// import Image from "next/image";
// import Logo from '../../public/assets/icons/Nav_Logo.png';
// import MobileLogo from '../../public/assets/icons/PaydestalMobileLogo.png';
// import styled from "styled-components";

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

//   return (
//     <StyledHeader>
//       <StyledLogo href="/dashboard">
//         <Image className="web" src={Logo} width={243} height={74.47} alt="Paydestal logo" />
//         <Image className="mobile" src={MobileLogo} width={155} height={50} alt="Paydestal logo" />
//       </StyledLogo>
//       {screenWidth <= 900 ? (
//         <StyledMobileBtn onClick={() => setDrawerVisible(true)}>
//           <MenuOutlined />
//         </StyledMobileBtn>
//       ) : (
//         <StyledNav>
//           <StyledMenu>
//           <li>
//             <StyledLink onClick={closeDrawer} href="/services">Services</StyledLink>
//           </li>
//           <li>
//             <StyledLink onClick={closeDrawer} href="/contact">Pricing</StyledLink>
//           </li>
//           <li>
//             <StyledLink onClick={closeDrawer} href="/projects">Developer</StyledLink>
//           </li>
//           <li>
//             <StyledLink onClick={closeDrawer} href="/about-us">Why Paydestal</StyledLink>
//           </li>
//           <li>
//             <StyledLink onClick={closeDrawer} href="/about-us">Company</StyledLink>
//           </li>
//           <li>
//             <StyledLink onClick={closeDrawer} href="/about-us">Support</StyledLink>
//           </li>
//           <li>
//             <StyledLink onClick={closeDrawer} href="/login">Login</StyledLink>
//           </li>
//           <li>
//             <StyledLink onClick={closeDrawer} href="/register">Register</StyledLink>
//           </li>
//           </StyledMenu>
//         </StyledNav>
//       )}
//       <Drawer
//         title=""
//         placement="left"
//         onClose={closeDrawer}
//         open={drawerVisible}
//       >
//         <StyledDrawerMenu>
//           <li>
//             <StyledLink onClick={closeDrawer} href="/services">Services</StyledLink>
//           </li>
//           <li>
//             <StyledLink onClick={closeDrawer} href="/contact">Pricing</StyledLink>
//           </li>
//           <li>
//             <StyledLink onClick={closeDrawer} href="/projects">Developer</StyledLink>
//           </li>
//           <li>
//             <StyledLink onClick={closeDrawer} href="/about-us">Why Paydestal</StyledLink>
//           </li>
//           <li>
//             <StyledLink onClick={closeDrawer} href="/about-us">Company</StyledLink>
//           </li>
//           <li>
//             <StyledLink onClick={closeDrawer} href="/about-us">Support</StyledLink>
//           </li>
//           <li>
//             <StyledLink onClick={closeDrawer} href="/login">Login</StyledLink>
//           </li>
//           <li>
//             <StyledLink onClick={closeDrawer} href="/register">Register</StyledLink>
//           </li>
//         </StyledDrawerMenu>
//       </Drawer>
//     </StyledHeader>
//   );
// };

// export default NavBar;

// const StyledHeader = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 15px 50px;
//   position: fixed;
//   top: 0;
//   z-index: 999;
//   width: 100%;
//   background-color: #fff;
// `;

// const StyledLogo = styled.a`
//   cursor: pointer;

//   @media only screen and (max-width:768px){
//     .mobile{
//       display: inline-block;
//     }
//     .web{
//       display: none;
//     }
//   }

//   @media only screen and (min-width:769px){
//     .mobile{
//       display: none;
//     }

//     .web{
//       display: inline-block;
//     }
//   }
// `;


// const StyledNav = styled.nav`
//   display: flex;
//   align-items: center;
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

// const StyledMobileBtn = styled.div`
//   display: none;

//   @media only screen and (max-width: 900px) {
//     display: block;
//     margin-right: 60px;
//     /* z-index: 2000; */
//   }
// `;



// import React, { useEffect, useState } from "react";
// import { MenuOutlined } from '@ant-design/icons';
// import { Drawer } from 'antd';
// import Image from "next/image";
// import Logo from '../../public/assets/icons/Nav_Logo.png';
// import MobileLogo from '../../public/assets/icons/PaydestalMobileLogo.png';
// import styled from "styled-components";

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

//   return (
//     <StyledHeader>
//       <StyledLogo href="/dashboard">
//         <Image className="web" src={Logo} width={243} height={74.47} alt="Paydestal logo" />
//         <Image className="mobile" src={MobileLogo} width={155} height={50} alt="Paydestal logo" />
//       </StyledLogo>
//       {screenWidth <= 900 ? (
//         <StyledMobileBtn onClick={() => setDrawerVisible(true)}>
//           <MenuOutlined />
//         </StyledMobileBtn>
//       ) : (
//         <StyledNav>
//           <StyledMenu>
//             <li>
//               <StyledLink onClick={closeDrawer} href="/services">Services</StyledLink>
//             </li>
//             <li>
//               <StyledLink onClick={closeDrawer} href="/pricing">Pricing</StyledLink>
//             </li>
//             <li>
//               <StyledLink onClick={closeDrawer} href="/developer">Developer</StyledLink>
//             </li>
//             <li>
//               <StyledLink onClick={closeDrawer} href="/about-us">Why Paydestal</StyledLink>
//             </li>
//             <li>
//               <StyledLink onClick={closeDrawer} href="/company">Company</StyledLink>
//             </li>
//             <li>
//               <StyledLink onClick={closeDrawer} href="/support">Support</StyledLink>
//             </li>
//           </StyledMenu>
//           <StyledAuthButtons>
//             <li>
//               <StyledButton onClick={closeDrawer} href="/login">Login</StyledButton>
//             </li>
//             <li>
//               <StyledButton onClick={closeDrawer} href="/register">Register</StyledButton>
//             </li>
//           </StyledAuthButtons>
//         </StyledNav>
//       )}
//       <Drawer
//         title=""
//         placement="left"
//         onClose={closeDrawer}
//         open={drawerVisible}
//       >
//         <StyledDrawerMenu>
//           <li>
//             <StyledLink onClick={closeDrawer} href="/services">Services</StyledLink>
//           </li>
//           <li>
//             <StyledLink onClick={closeDrawer} href="/pricing">Pricing</StyledLink>
//           </li>
//           <li>
//             <StyledLink onClick={closeDrawer} href="/developer">Developer</StyledLink>
//           </li>
//           <li>
//             <StyledLink onClick={closeDrawer} href="/why-paydestal">Why Paydestal</StyledLink>
//           </li>
//           <li>
//             <StyledLink onClick={closeDrawer} href="/company">Company</StyledLink>
//           </li>
//           <li>
//             <StyledLink onClick={closeDrawer} href="/support">Support</StyledLink>
//           </li>
//           <li>
//             <StyledLink onClick={closeDrawer} href="/login">Login</StyledLink>
//           </li>
//           <li>
//             <StyledLink onClick={closeDrawer} href="/register">Register</StyledLink>
//           </li>
//         </StyledDrawerMenu>
//       </Drawer>
//     </StyledHeader>
//   );
// };

// export default NavBar;

// const StyledHeader = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 15px 50px;
//   position: fixed;
//   top: 0;
//   z-index: 999;
//   width: 100%;
//   background-color: #fff;
// `;

// const StyledLogo = styled.a`
//   cursor: pointer;

//   @media only screen and (max-width:768px){
//     .mobile{
//       display: inline-block;
//     }
//     .web{
//       display: none;
//     }
//   }

//   @media only screen and (min-width:769px){
//     .mobile{
//       display: none;
//     }

//     .web{
//       display: inline-block;
//     }
//   }
// `;

// const StyledNav = styled.nav`
//   display: flex;
//   align-items: center;
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

// const StyledAuthButtons = styled.ul`
//   list-style: none;
//   margin: 0;
//   padding: 0;
//   display: flex;
//   align-items: center;
// `;

// const StyledButton = styled.button`
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   padding: 8px 20px;
//   cursor: pointer;
//   margin-left: 10px;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const StyledMobileBtn = styled.div`
//   display: none;

//   @media only screen and (max-width: 900px) {
//     display: block;
//     margin-right: 60px;
//     /* z-index: 2000; */
//   }
// `;


import React, { useEffect, useState } from "react";
import { MenuOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import Image from "next/image";
import Logo from '../../public/assets/icons/Nav_Logo.png';
import MobileLogo from '../../public/assets/icons/PaydestalMobileLogo.png';
import Link from "next/link";
import styled from "styled-components";

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
    <StyledHeader>
      <StyledLogo href="/dashboard">
        <Image className="web" src={Logo} width={243} height={74.47} alt="Paydestal logo" />
        <Image className="mobile" src={MobileLogo} width={155} height={50} alt="Paydestal logo" />
      </StyledLogo>
      {screenWidth <= 900 ? (
        <StyledMobileBtn onClick={() => setDrawerVisible(true)}>
          <MenuOutlined />
        </StyledMobileBtn>
      ) : (
        <StyledNav>
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
          <StyledAuthButtons>
            <li>
              <Link href="/login">
                <StyledLogin onClick={closeDrawer}>Login</StyledLogin>
              </Link>
            </li>
            <li>
              <Link href="/register">
                <StyledButton onClick={closeDrawer}>Register</StyledButton>
              </Link>
            </li>
          </StyledAuthButtons>
        </StyledNav>
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
  );
};

export default NavBar;

const StyledHeader = styled.header`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 15px 50px;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  background-color: #fff;
`;

const StyledLogo = styled.a`
  cursor: pointer;

  @media only screen and (max-width:768px){
    .mobile{
      display: inline-block;
    }
    .web{
      display: none;
    }
  }

  @media only screen and (min-width:769px){
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
  /* justify-content: end; */
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
  /* padding-left: 100; */
  padding-right: -50px;
  display: flex;
  align-items: end;
`;

const StyledButton = styled.button`
  background-color: #1B442A;
  color: #fff;
  border: none;
  border-radius:80px;
  padding: 12px 25px,;
  cursor: pointer;
  margin-left: 10px;
  width:129px;
height:42px;

  &:hover {
    background-color: #0056b3;
  }
`;

const StyledLogin = styled.button`
  background-color: #fff; 
  color: #1B442A;
  border: none;
  border-radius:80px;
  padding: 12px 25px,;
  cursor: pointer;
  margin-left: 10px;
  width:129px;
height:42px;

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
