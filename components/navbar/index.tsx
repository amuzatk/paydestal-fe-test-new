import React, { useEffect, useState } from "react";
import { Drawer } from 'antd';
import Image from "next/image";
import Logo from '../../public/assets/icons/Nav_Logo.png';
import Hamburger from '../../public/assets/icons/Hamburger.png';
import MobileLogo from '../../public/assets/icons/PaydestalMobileLogo.png';
import Link from "next/link";
import styled from "styled-components";
import { StyledContainerFluid } from "@/__style/ui-block.style";
import SafariToolBar from "./safari-toolbar";
import MobileMenu from "./NavBarMobile";

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
    <>
    <StyledFixed>
    <SafariToolBar />
    <StyledHeader>
      <StyledLogo href="/dashboard">
        <Image className="web" src={Logo} width={243} height={74.47} alt="Paydestal Logo" />
        <Image className="mobile" src={MobileLogo} width={155} height={50} alt="Paydestal Logo" />
      </StyledLogo>
      {screenWidth <= 1200 ? (
        <StyledMobileBtn onClick={() => setDrawerVisible(true)}>
        <Image src={Hamburger} width={20} height={14} alt="Hamburger" />
        </StyledMobileBtn>
      ) : (
        <><StyledNav>
              <StyledMenu>
              {navigationItems.map((item, index) => (
                  <li key={index}>
                    <StyledLink onClick={closeDrawer} href={item.href}>{item.label}</StyledLink>
                  </li>
                ))}
              </StyledMenu>
            </StyledNav>
            <StyledAuthButtons>
              <div
              className="drop"
              >
                <StyledSelect onChange={(e) => {
                if (e.target.value === 'login') {
                  closeDrawer();
                  window.location.href = '/login';
                } else if (e.target.value === 'register') {
                  closeDrawer();
                  window.location.href = '/register';
                }
              }}>
                <option value="" >Select</option>
                <option value="login">Login</option>
                <option value="register">Get Started</option>
              </StyledSelect>

                </div>
              <div
              className="login"
              >
                <li
                >
                  <Link href="/login">
                    <button 
                    onClick={closeDrawer}
                    style={{
                      backgroundColor:"white",
                      border:"none",
                      cursor:"pointer",
                      fontSize:"14px",
                      fontWeight:"400",
                      lineHeight:"17.64px",
                      textAlign:"left",
                      color:"#202020"
                    }}
                    >Login</button>
                  </Link>
                </li>
                <li>
                  <Link href="/register">
                    <StyledButton onClick={closeDrawer}>Get Started</StyledButton>
                  </Link>
                </li>
                </div>
              </StyledAuthButtons></>
      )}
      <Drawer
        title=""
        placement="left"
        onClose={closeDrawer}
        open={drawerVisible}
      >
<MobileMenu closeDrawer={closeDrawer} />
      </Drawer>
    </StyledHeader>
    </StyledFixed>
    </>
  );
};

export default NavBar;
const StyledFixed = styled.div`
 position: fixed;
 top: 0;
  z-index: 999;
  width: 100%;
  background-color: #fff;
`;
const StyledHeader = styled(StyledContainerFluid)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 104.28px;
`;

const StyledLogo = styled.a`
  cursor: pointer;

  @media only screen and (max-width:1199px){
    .mobile{
      display: inline-block;
      padding-left: 24px;
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
  padding-right: 320px;
 @media only screen and (min-width:992px) and (max-width:1727px){
  padding-right: 140px;

}
 @media only screen and (max-width:1360px){
  padding-right: 70px;
 }

 @media only screen and (max-width:1200px){
  padding-right: 0px;
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


const StyledLink = styled.a`
  text-decoration: none;
  color: #202020;

  margin-right: 20px;
  cursor: pointer;
font-size: 16px;
font-weight: 400;
line-height: 20.16px;
text-align: center;

  &:hover {
    color: #555;
  }

  @media only screen and (min-width:992px) and (max-width:1727px){
    font-size: 14px;
}
`;

const StyledAuthButtons = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;

  @media only screen and (min-width:901px) and (max-width:1363px){
    .drop{
      display: inline-block;
 
    }

    .login{
      display: none;
    }
  }

  @media only screen and (min-width:1364px){
    .drop{
      display: none;
    }

    .login{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
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

  @media only screen and (max-width: 1200px) {
    display: block;
    padding-right: 24px;
  }

`;

const StyledSelect = styled.select`

  background-color:#1B442A;
  color: #fff;
  border: none;
  border-radius:80px;
  padding:12px;
  cursor: pointer;
  width: 121px;
  height: 42px;
  &:hover {
    background-color: #f9f9f9;
   color: #202020;
  }
`;

const navigationItems = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/developer", label: "Developer" },
  { href: "/about-us", label: "Why Paydestal" },
  { href: "/company", label: "Company" },
  { href: "/support", label: "Support" }
];