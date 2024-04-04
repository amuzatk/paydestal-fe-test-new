// import { StyledButton, StyledFlex } from '@/__style/ui-block.style';
// import React from 'react';
// import styled from 'styled-components';

// interface Props {
//   closeDrawer: () => void;
// }

// const MobileMenu: React.FC<Props> = ({ closeDrawer }) => {
//   return (
//     <StyledMain>
//       <StyledDrawerMenu>
//       <li>
//         <StyledLink onClick={closeDrawer} href="/services">
//           Services
//         </StyledLink>
//       </li>
//       <li>
//         <StyledLink onClick={closeDrawer} href="/pricing">
//           Pricing
//         </StyledLink>
//       </li>
//       <li>
//         <StyledLink onClick={closeDrawer} href="/developer">
//           Developer
//         </StyledLink>
//       </li>
//       <li>
//         <StyledLink onClick={closeDrawer} href="/about-us">
//           Why Paydestal
//         </StyledLink>
//       </li>
//       <li>
//         <StyledLink onClick={closeDrawer} href="/company">
//           Company
//         </StyledLink>
//       </li>
//       <li>
//         <StyledLink onClick={closeDrawer} href="/support">
//           Support
//         </StyledLink>
//       </li>
//       <li>
//         <StyledLink onClick={closeDrawer} href="/login">
//           Login
//         </StyledLink>
//       </li>
//       </StyledDrawerMenu>

//       <StyledAction>
//         {/* <StyledLink onClick={closeDrawer} href="/register"> */}
//           <StyledBtn
//           onClick={closeDrawer} href="/register"
//           >
//           Get Started
//           </StyledBtn>
//       </StyledAction>

//     </StyledMain>
//   );
// };

// export default MobileMenu;

// const StyledMain = styled(StyledFlex)`
// /* border: 1px solid red; */
// flex-direction: row;
// justify-content: flex-start;
// align-items: flex-end;
// `;

// const StyledAction = styled(StyledFlex)`
// /* align-self: end; */
// /* border: 1px solid red; */
// /* flex-direction: row; */
// /* justify-content: flex-start; */
// /* align-items: center; */
// `;

// const StyledDrawerMenu = styled.ul`
//   list-style: none;
//   margin: 0;
//   padding: 0;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   /* border: 1px solid red; */
//   row-gap: 25px;
// `;

// const StyledLink = styled.a`
//   text-decoration: none;
//   color: #202020;
//   margin-bottom: 20px;
//   cursor: pointer;
//   font-size: 16px;
//   font-weight: 400;
//   line-height: 20.16px;
//   text-align: center;

//   &:hover {
//     color: #555;
//   }

// `;

// const StyledBtn = styled.button`
// /* border: 1px solid red; */
// background-color: #1B442A;
// border: none;
// color: #FFFFFF;
// padding: 16px 25px;
// border-radius: 25px;
// `;



import { useRouter } from 'next/router'; // Import Next.js router
import { StyledButton, StyledFlex } from '@/__style/ui-block.style';
import React from 'react';
import styled from 'styled-components';

interface Props {
  closeDrawer: () => void;
}

const MobileMenu: React.FC<Props> = ({ closeDrawer }) => {
  const router = useRouter(); // Initialize Next.js router

  const handleRegisterClick = () => {
    closeDrawer(); // Close drawer
    router.push('/register'); // Navigate to /register
  };

  return (
    <StyledMain>
      <StyledDrawerMenu>
        <li>
          <StyledLink onClick={closeDrawer} href="/services">
            Services
          </StyledLink>
        </li>
        <li>
          <StyledLink onClick={closeDrawer} href="/pricing">
            Pricing
          </StyledLink>
        </li>
        <li>
          <StyledLink onClick={closeDrawer} href="/developer">
            Developer
          </StyledLink>
        </li>
        <li>
          <StyledLink onClick={closeDrawer} href="/about-us">
            Why Paydestal
          </StyledLink>
        </li>
        <li>
          <StyledLink onClick={closeDrawer} href="/company">
            Company
          </StyledLink>
        </li>
        <li>
          <StyledLink onClick={closeDrawer} href="/support">
            Support
          </StyledLink>
        </li>
        <li>
          <StyledLink onClick={closeDrawer} href="/login">
            Login
          </StyledLink>
        </li>
      </StyledDrawerMenu>

      <StyledAction>
        <StyledBtn onClick={handleRegisterClick}>Get Started</StyledBtn>
      </StyledAction>
    </StyledMain>
  );
};

export default MobileMenu;

const StyledMain = styled(StyledFlex)`
  /* border: 1px solid red; */
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
`;

const StyledAction = styled(StyledFlex)`
  /* border: 1px solid red; */
`;

const StyledDrawerMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  /* border: 1px solid red; */
  row-gap: 25px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #202020;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  line-height: 20.16px;
  text-align: center;

  &:hover {
    color: #555;
  }
`;

const StyledBtn = styled.button`
  /* border: 1px solid red; */
  background-color: #1b442a;
  border: none;
  color: #ffffff;
  padding: 16px 25px;
  border-radius: 25px;
`;
