import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';

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
        <h1>NA</h1>
      </main>
    </div>
  )
}
