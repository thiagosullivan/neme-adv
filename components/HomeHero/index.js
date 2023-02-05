import Link from 'next/link';
import React from 'react';
import { HeroContainer } from './style';

function HomeHero() {
  return (
    <HeroContainer>
        <div className='home__hero__txt'>
            <h1>Advocacia e Inovação <br/> <strong>Além do Direito</strong></h1>
            <p>Soluções inteligentes e inovadoras para aqueles <br/>
            que entendem o mundo atual.</p>
        </div>
        <div className='home__hero__bottom'>
            <h2>Conheça nossas <br/> <strong>Especialidades</strong></h2>
            <Link href="#especialidades">Saiba mais</Link>
        </div>
    </HeroContainer>
  )
}

export default HomeHero