import { StyledFlex, StyledLink } from '@/__style/ui-block.style';
import { NAV_1_LINKS } from '@/navigations';
import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react'
import Logo from './Logo';

const NavBar = () => {
    const { route } = useRouter();
    const router = useRouter();
  return (
    <div>
      <StyledFlex cg="24px" align="center">
        <Logo />
        {NAV_1_LINKS.map((item, i) => {
          const isActive = route === item.LINK;
          return (
            <Link href={item.LINK} key={i}>
              <StyledLink
                fsize="16px"
                lh="20px"
                fw="600"
                activeColor="var(--btn-text-hover)"
                isActive={isActive}
                color="var(--secondary-text)"
                as="span"
              >
                {item.TITLE}
              </StyledLink>
            </Link>
          );
        })}
      </StyledFlex>
    </div>
  )
}

export default NavBar
