import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MarkOne from '../../assets/mark-1.png';
import { EspecialidadesContainer } from './styles';

function Especialidades() {
  return (
    <EspecialidadesContainer>
        <div className='speciality__contact'>
            <div className='speciality__contact_txt'>
                <h2>Quer nos conhecer <br/><strong>melhor?</strong></h2>
                <Link href="https://api.whatsapp.com/send?phone=5543988123276" target="_blank" rel="noopener noreferrer">Entre em contato!</Link>
            </div>
        </div>
        <div className='speciality__content' id="especialidades">
            <h2>Áreas que <br/><strong>atuamos!</strong></h2>
            <ul>
                <li>
                    <Image src={MarkOne} width={52} height={52} alt="marcação" />
                    <p>Tributário</p>
                </li>
                <li>
                    <Image src={MarkOne} width={52} height={52} alt="marcação" />
                    <p>Empresarial</p>
                </li>
                <li>
                    <Image src={MarkOne} width={52} height={52} alt="marcação" />
                    <p>Fazendo Pública</p>
                </li>
                <li>
                    <Image src={MarkOne} width={52} height={52} alt="marcação" />
                    <p>Civil</p>
                </li>
                <li>
                    <Image src={MarkOne} width={52} height={52} alt="marcação" />
                    <p>LGPD*</p>
                </li>
            </ul>
        </div>
    </EspecialidadesContainer>
  )
}

export default Especialidades