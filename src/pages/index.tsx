import Head from 'next/head';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Features from '../components/Features';
import FinalCta from '../components/FinalCta';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Showcase from '../components/Showcase';
import { AppConfig } from '../utils/AppConfig';

const App = () => {
  return (
    <>
      <Head>
        <title>{AppConfig.title}</title>
        <meta name="description" content={AppConfig.description} />
        <meta property="og:title" content={AppConfig.title} />
        <meta property="og:description" content={AppConfig.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={AppConfig.title} />
        <meta name="twitter:description" content={AppConfig.description} />
      </Head>
      <div className="min-h-svh overflow-x-hidden bg-bg text-ink">
        <Header />
        <main>
          <Hero />
          <Showcase />
          <Features />
          <HowItWorks />
          <FinalCta />
          <About />
        </main>
        <Analytics />
      </div>
    </>
  );
};

export default App;
