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
          <Image src={LogoHeader} alt="Logo Neme" />
        </Link>
        <div className='hamb__header' onClick={() => setOpenMenu(!openMenu)}>
          <Image src={MenuHeader} alt="Menu" />
          <p>Menu</p>
        </div>
        <nav className={` ${ openMenu ? 'MenuOpen' : ''}`}>
          <ul>
            <li><Link href="/">Sobre</Link></li>
            <li><Link href="/">Time</Link></li>
            <li><Link href="/">Especialidades</Link></li>
            <li><Link href="/">Soluções</Link></li>
            <li><Link href="/">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </HeaderContent>
  )
}

export default Header