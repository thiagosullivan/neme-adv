import Image from 'next/image';
import React, { useState } from 'react';
import LogoHeader from '../../assets/neme-logo.png';
import MenuHeader from '../../assets/menu.png';
import { HeaderContent } from './style';
import Link from 'next/link';

function Header() {

  const [ openMenu, setOpenMenu ] = useState(false);

  console.log(openMenu)

  return (
    <HeaderContent>
      <div className='header__content'>
        <Link href="/">
          <Image src={LogoHeader} alt="Logo Neme" width={145} height={145} />
        </Link>
        <div className='hamb__header' onClick={() => setOpenMenu(!openMenu)}>
          <Image src={MenuHeader} alt="Menu" />
          <p>Menu</p>
        </div>
        <nav className={` ${ openMenu ? 'MenuOpen' : ''}`}>
          <ul>
            <li onClick={() => setOpenMenu(!openMenu)}>
              <Link href="/#sobre">Sobre</Link>
            </li>
            <li onClick={() => setOpenMenu(!openMenu)}>
              <Link href="/#time">Time</Link>
            </li>
            <li onClick={() => setOpenMenu(!openMenu)}>
              <Link href="/#especialidades">Especialidades</Link>
            </li>
            <li onClick={() => setOpenMenu(!openMenu)}>
              <Link href="/#solucoes">Soluções</Link>
            </li>
            <li onClick={() => setOpenMenu(!openMenu)}>
              <Link href="https://api.whatsapp.com/send?phone=5543988123276" target="_blank" rel="noopener noreferrer">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderContent>
  )
}

export default Header