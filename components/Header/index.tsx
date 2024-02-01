'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

import Logo from '../../public/images/desktop/logo.png';

function Header() {
  const navbar = useRef<HTMLDivElement>(null);
  window.onscroll = () => {
    if (window.scrollY > 120) {
      navbar.current?.classList.add('bg-black');
    } else {
      navbar.current?.classList.remove('bg-black');
    }
  };
  return (
    <nav className='navbar navbar-expand-lg fixed-top py-4 px-lg-8' style={{ padding: '0 12px' }} ref={navbar}>
      <Link className='navbar-brand py-0' href='/'>
        <Image src={Logo.src} width={192} height={72} alt='Logo' />
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='offcanvas'
        data-bs-target='#offcanvasNavbar'
        aria-controls='offcanvasNavbar'
      >
        <i className='bi bi-list' style={{ color: 'white', fontSize: '24px' }}></i>
      </button>
      <div
        className='offcanvas offcanvas-end w-100 bg-black'
        id='offcanvasNavbar'
        aria-labelledby='offcanvasNavbarLabel'
      >
        <div className='offcanvas-header'>
          <button
            type='button'
            className='btn text-reset text-white ms-auto'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          >
            <i className='bi bi-x-lg text-white fs-3'></i>
          </button>
        </div>
        <div className='offcanvas-body'>
          <ul className='navbar-nav mb-2 mb-lg-0 text-center'>
            <li className='nav-item rounded'>
              <a className='nav-link py-0 active text-white ' aria-current='page' href='#'>
                客房旅館
              </a>
            </li>
            <li className='nav-item rounded'>
              <Link href='/auth/login' className='nav-link py-0 text-white'>
                會員登入
              </Link>
            </li>
            <li className='nav-item rounded'>
              <a className='nav-link py-0 text-white' href='#'>
                立即訂房
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;
