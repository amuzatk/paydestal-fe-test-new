import { StyledDiv } from '@/__style/ui-block.style';
import Hero from '@/components/Hero';
import Faq from '@/components/faq';
import FooterComponent from '@/components/footer';
import NavBar from '@/components/navbar';
import PaymentSolutions from '@/components/payments';
import EndlessPossibilities from '@/components/possibilities';
import SecureSection from '@/components/secure';
import Head from 'next/head';
import styled from 'styled-components';

export default function Home() {
  return (
    <StyledContainer>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Welcome to my Next.js app!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <NavBar  />
        <Hero />
        <SecureSection />
        <EndlessPossibilities />
        <PaymentSolutions />
        <Faq />
        <FooterComponent />
      </main>

      {/* <footer>
      </footer> */}
    </StyledContainer>
  );
}
const StyledContainer = styled(StyledDiv)`
overflow-x: hidden;
/* overflow-y: scroll; */
overflow-y: hidden;
height: 100%;

/* style={{
        overflowX:"hidden",
        overflowY:"hidden",
        minHeight:"5000px"
        // overflowY:"auto"
    }} */


`;