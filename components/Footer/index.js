import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import LogoFooter from '../../assets/footer-logo.png';
import { FooterContainer } from './styles';

function Footer() {
  return (
    <FooterContainer>
        <div className='footer__content'>
            <Link href="/">
                <Image src={LogoFooter} alt="Logo footer" />
            </Link>
            <div className='footer__socialmedia'>
                <h3>Nossas Redes</h3>
                <div className='footer__socialmedia__links'>
                    <a href='https://www.google.com.br' target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                    <a href='https://www.google.com.br' target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href='https://www.google.com.br' target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>
            <div className='footer__location'>
                <div className='footer__location__txt'>
                    <h3>Venha nos conhecer</h3>
                    <p>Av. Higienópolis, 70 - Sala 15<br/>
                    Centro, Londrina - PR, 86020-080</p>
                </div>
                <div className='footer__location__map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.148512795876!2d-51.165850999999996!3d-23.310369799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb44a6f0500001%3A0x757a008719471e79!2sAv.%20Higien%C3%B3polis%2C%2070%20-%20Sala%2015%20-%20Centro%2C%20Londrina%20-%20PR%2C%2086020-080!5e0!3m2!1spt-BR!2sbr!4v1673015522433!5m2!1spt-BR!2sbr" width="240" height="125" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
        <p className='footer__credits'>Criado e desenvolvido por <a href='https://www.instagram.com/surto.mkt/' target="_blank" rel="noopener noreferrer">Surto - Marketing Inteligente</a> - Londrina/PR</p>
    </FooterContainer>
  )
}

export default Footer