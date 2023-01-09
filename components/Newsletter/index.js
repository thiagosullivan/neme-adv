import React from 'react';
import { NewsletterContainer } from './styles';

function Newsletter() {
  return (
    <NewsletterContainer>
        <div className='newsletter__content'>
            <h2>Mantenha-se Atualizado</h2>
            <p>Assine nossa newsletter</p>

            <div className='newsletter__input'>
                <input type="email" placeholder='E-mail' />
                <button type='send'>Enviar</button>
            </div>
        </div>
    </NewsletterContainer>
  )
}

export default Newsletter