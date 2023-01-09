import Head from 'next/head';
import Image from 'next/image';
import About from '../components/About';
import Especialidades from '../components/Especialidades';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import News from '../components/News';
import Newsletter from '../components/Newsletter';
import NewsTwo from '../components/NewsTwo';
import Solutions from '../components/Solutions';
import Team from '../components/Team';

export default function Home() {
  return (
    <div id='home'>
      <Head>
        <title>Neme Advogados</title>
        <meta name="description" content="Neme Advogados" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Header />
      <main>
        <HomeHero />
        <About />
        <Team />
        <Especialidades />
        <Solutions />
        <News />
        {/* <NewsTwo /> */}
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
