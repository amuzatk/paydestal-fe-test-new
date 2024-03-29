import Hero from '@/components/Hero';
import FooterComponent from '@/components/footer';
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
        <meta name="viewport" content="width=device-width, initial-scale=1" /> {/* Move viewport meta tag here */}
      </Head>

      <main>
        <Hero />
        <SecureSection />
        <EndlessPossibilities />
        <PaymentSolutions />
        <FooterComponent />
      </main>

      <footer>
        {/* <p>Footer content goes here.</p> */}
      </footer>
    </div>
  );
}
