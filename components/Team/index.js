import Image from 'next/image';
import React from 'react';
import GoldenLines from '../../assets/lines.png';
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram} from 'react-icons/fa';
import Sergio from '../../assets/sergio-min.png';
import Felipe from '../../assets/felipe-min.png';
import { QuemSomosCard, QuemSomosContainer } from './style';

function Team() {
  return (
    <QuemSomosContainer id="time">
        <h2>Quem Somos</h2>
        <QuemSomosCard>
          <div className='golden_lines'>
            <Image src={GoldenLines} alt="Linhas"/>
          </div>
          <div className='quem__img'>
            <Image src={Sergio} alt="Sérgio Aziz Ferrareto Neme" />
            <div className='quem__socialm'>
              {/* <a className='socialm_fb' href='https://www.facebook.com' target="_blank" rel="noopener noreferrer">
                <FaFacebookF/>
              </a> */}
              <a className='socialm_tw' href='https://www.instagram.com/sergio.neme/' target="_blank" rel="noopener noreferrer">
                <FaInstagram/>
              </a>
              <a className='socialm_li' href='https://www.linkedin.com/in/s%C3%A9rgio-aziz-ferrareto-neme-8b83b812b/' target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn/>
              </a>
            </div>
          </div>
          <div className='quem__txt'>
            <h3>Sérgio Aziz Ferrareto Neme</h3>
            <span>OAB/PR 61.528</span>

            <p>Graduado em direito pela Pontifícia Universidade Católica do Paraná &#40;PUC/PR&#41; em 2012, e em ciências contábeis pela Universidade Estadual de Londrina &#40;UEL&#41; em 2009.</p>
          </div>
        </QuemSomosCard>
        <QuemSomosCard>
          <div className='golden_lines_left'>
            <Image src={GoldenLines} alt="Linhas"/>
          </div>
          <div className='quem__img'>
            <Image src={Felipe} alt="Felipe Gomes Silva" />
            <div className='quem__socialm'>
              {/* <a className='socialm_fb' href='https://www.google.com.br' target="_blank" rel="noopener noreferrer">
                <FaFacebookF/>
              </a> */}
              <a className='socialm_tw' href='https://www.instagram.com/felipegomesilva/' target="_blank" rel="noopener noreferrer">
                <FaInstagram/>
              </a>
              <a className='socialm_li' href='https://www.linkedin.com/in/felipe-gomes-b36ba9169/' target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn/>
              </a>
            </div>
          </div>
          <div className='quem__txt'>
            <h3>Felipe Gomes Silva</h3>
            <span>OAB/PR 104.139</span>

            <p>Graduado em direito pelo Centro Universitário Filadélfia, pós-graduado em Direito Empresarial Aplicado à Era Digital pela Universidade Estadual de Londrina &#40;UEL&#41;, MBA em Inovação e Criatividade no Ambiente Empresarial pela UniCesumar.</p>
          </div>
        </QuemSomosCard>
    </QuemSomosContainer>
  )
}

export default Team