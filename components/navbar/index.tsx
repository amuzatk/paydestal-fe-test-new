// import React, { useEffect, useState } from "react";
// import {  MenuOutlined } from '@ant-design/icons';
// import { Drawer } from 'antd';
// import Image from "next/image";
// import Logo from '../../public/assets/images/logoFooterWeb.png';
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
//         <Image src={Logo} width={250} height={100} alt="logo" />
//       </StyledLogo>
//       {screenWidth <= 900 ? (
//         <StyledMobileBtn onClick={() => setDrawerVisible(true)}>
//           <MenuOutlined />
//         </StyledMobileBtn>
//       ) : (
//         <StyledNav>
//           <StyledMenu>
//             <li>
//               <StyledLink href="/services">Services</StyledLink>
//             </li>
//             <li>
//               <StyledLink href="/contact">Contact</StyledLink>
//             </li>
//             <li>
//               <StyledLink href="/projects">Projects</StyledLink>
//             </li>
//             <li>
//               <StyledLink href="/about-us">About Us</StyledLink>
//             </li>
//             <li>
//               <StyledLink href="/login">Login</StyledLink>
//             </li>
//             <li>
//               <StyledLink href="/register">Register</StyledLink>
//             </li>
//           </StyledMenu>
//         </StyledNav>
//       )}
//       <Drawer
//         title=""
//         placement="left"
//         onClose={closeDrawer}
//         visible={drawerVisible}
//       >
//         <StyledDrawerMenu>
//           <li>
//             <StyledLink onClick={closeDrawer} href="/services">Services</StyledLink>
//           </li>
//           <li>
//             <StyledLink onClick={closeDrawer} href="/contact">Contact</StyledLink>
//           </li>
//           <li>
//             <StyledLink onClick={closeDrawer} href="/projects">Projects</StyledLink>
//           </li>
//           <li>
//             <StyledLink onClick={closeDrawer} href="/about-us">About Us</StyledLink>
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
//   padding: 20px 0;
// `;

// const StyledLogo = styled.a`
//   cursor: pointer;
// `;

// const StyledSearch = styled.div`
//   position: relative;
// `;

// const StyledInput = styled.input`
//   padding: 8px 30px;
//   border-radius: 20px;
//   border: 1px solid #ccc;
//   outline: none;
// `;

// const StyledSearchIcon = styled.div`
//   position: absolute;
//   top: 50%;
//   right: 10px;
//   transform: translateY(-50%);
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

// const StyledBell = styled.img`
//   width: 26px;
//   height: 26px;
//   cursor: pointer;
// `;

// const StyledUser = styled.div`
//   position: relative;
// `;

// const StyledUserInfo = styled.div`
//   display: flex;
//   align-items: center;
//   cursor: pointer;
// `;

// const StyledUserName = styled.span`
//   margin-right: 10px;
// `;

// const StyledDropdown = styled.img`
//   width: 20px;
//   height: 20px;
// `;

// const StyledMobileBtn = styled.div`
//   display: none;

//   @media only screen and (max-width: 900px) {
//     display: block;
//     margin-right: 20px; /* Add margin to push the hamburger icon to the right */
//   }
// `;



import React, { useEffect, useState } from "react";
import { MenuOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import Image from "next/image";
import Logo from '../../public/assets/images/logoFooterWeb.png';
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
        <Image src={Logo} width={250} height={100} alt="logo" />
      </StyledLogo>
      {screenWidth <= 900 ? (
        <StyledMobileBtn onClick={() => setDrawerVisible(true)}>
          <MenuOutlined />
        </StyledMobileBtn>
      ) : (
        <StyledNav>
          <StyledMenu>
            <li>
              <StyledLink href="/services">Services</StyledLink>
            </li>
            <li>
              <StyledLink href="/contact">Contact</StyledLink>
            </li>
            <li>
              <StyledLink href="/projects">Projects</StyledLink>
            </li>
            <li>
              <StyledLink href="/about-us">About Us</StyledLink>
            </li>
            <li>
              <StyledLink href="/login">Login</StyledLink>
            </li>
            <li>
              <StyledLink href="/register">Register</StyledLink>
            </li>
          </StyledMenu>
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
            <StyledLink onClick={closeDrawer} href="/contact">Contact</StyledLink>
          </li>
          <li>
            <StyledLink onClick={closeDrawer} href="/projects">Projects</StyledLink>
          </li>
          <li>
            <StyledLink onClick={closeDrawer} href="/about-us">About Us</StyledLink>
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
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #fff; /* Add background color if needed */
`;

const StyledLogo = styled.a`
  cursor: pointer;
`;


const StyledNav = styled.nav`
  display: flex;
  align-items: center;
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
  color: #000;
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    color: #555;
  }
`;

const StyledMobileBtn = styled.div`
  display: none;

  @media only screen and (max-width: 900px) {
    display: block;
    margin-right: 20px;
  }
`;
