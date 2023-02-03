import Head from 'next/head';
import About from '../components/About';
import Especialidades from '../components/Especialidades';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import News from '../components/News';
import Newsletter from '../components/Newsletter';
import Solutions from '../components/Solutions';
import Team from '../components/Team';
import { getAllPosts } from '../lib/dato-cms';

export default function Home({posts}) {
  console.log(posts, 'POSTAGENS')

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
        <News posts={posts} />
        {/* <NewsTwo /> */}
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts: posts || []
    },
    revalidate: 5,
  }
}