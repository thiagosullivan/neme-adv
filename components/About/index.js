import Image from 'next/image';
import React from 'react';
import AboutImg from '../../assets/about-img-min.jpg';
import GoldenLines from '../../assets/lines.png';
import { AboutContainer } from './style';

function About() {
  return (
    <AboutContainer id="sobre">
        <h2>Eficiência <strong>focada</strong> no negócio <br/> dos <strong>nossos parceiros!</strong></h2>
        <div className='golden_lines'>
            <Image src={GoldenLines} alt="linhas"/>
        </div>
        <p>Oferencendo soluções inteligentes e inovadoras, conseguimos apresentar uma solução individual que minimiza as barreiras e os obstáculos jurídicos.</p>
        <Image src={AboutImg} alt="Imagem da sessão sobre"/>
        <p>Essas soluções são frutos de um serviço especializado e personalizado, de caráter multidisciplinar, unindo direito, negócios, contabilidade e inovação para uma advocacia além do direito, o que possibilita nossa atuação em demandas de alta complexidade.</p>
    </AboutContainer>
  )
}

export default About