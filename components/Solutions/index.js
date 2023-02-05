import Image from 'next/image';
import React from 'react';
import MarkTwo from '../../assets/mark-1.png';
import { SolutionsContainer } from './style';

function Solutions() {
  return (
    <SolutionsContainer>
        <div className='solution__content' id="solucoes">
            <div className='solution__div'>
                <h2>Produtos</h2>
                <ul>
                    <li>
                        <Image src={MarkTwo} width={52} height={52} alt="marcação"/>
                        <p>Projeto de planejamento tributário</p>
                    </li>
                    <li>
                        <Image src={MarkTwo} width={52} height={52} alt="marcação"/>
                        <p>Projeto de planejamento patrimonial</p>
                    </li>
                    <li>
                        <Image src={MarkTwo} width={52} height={52} alt="marcação"/>
                        <p>Assessoria jurídica mensal</p>
                    </li>
                    <li>
                        <Image src={MarkTwo} width={52} height={52} alt="marcação"/>
                        <p>Compliance em LGPD</p>
                    </li>
                    <li>
                        <Image src={MarkTwo} width={52} height={52} alt="marcação"/>
                        <p>Contratos</p>
                    </li>
                    <li>
                        <Image src={MarkTwo} width={52} height={52} alt="marcação"/>
                        <p>Apoio na estruturação de novos negócios</p>
                    </li>
                    <li>
                        <Image src={MarkTwo} width={52} height={52} alt="marcação"/>
                        <p>Constituição de offshores</p>
                    </li>
                    <li>
                        <Image src={MarkTwo} width={52} height={52} alt="marcação"/>
                        <p>Gestão de passivo tributário &#40;contencioso&#41;</p>
                    </li>
                </ul>
            </div>
        </div>
    </SolutionsContainer>
  )
}

export default Solutions