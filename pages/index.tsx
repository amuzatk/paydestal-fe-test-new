import MyComponent from '@/components/CheckWidth&Height';
import Hero from '@/components/Hero';
import Faq from '@/components/faq';
import FooterComponent from '@/components/footer';
import NavBar from '@/components/navbar';
import PaymentSolutions from '@/components/payments';
import EndlessPossibilities from '@/components/possibilities';
import SecureSection from '@/components/secure';
import Head from 'next/head';

export default function Home() {
  return (
    <div style={{
        overflowX:"hidden",
        overflowY:"hidden"
    }}>
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
    </div>
  );
}
