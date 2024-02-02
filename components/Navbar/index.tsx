'use client';

import Image from 'next/image';
import Logo from '../../public/images/desktop/logo.png';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand='lg' className='bg-dark z-10'>
      <Container>
        <Navbar.Brand href='/'>
          <Image src={Logo.src} width={192} height={72} alt='Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' className='rounded-end bg-primary' />
        <Navbar.Collapse className='justify-content-lg-end' id='responsive-navbar-nav'>
          <Nav className='d-lg-flex align-items-center p-5 p-lg-0'>
            <Nav.Link className='text-white mx-2 my-2 my-lg-0' href='/all-rooms'>
              客房旅宿
            </Nav.Link>
            <Nav.Link className='text-white mx-2 my-2 my-lg-0' href='/user'>
              <i className='bi bi-person-circle'></i> Jessica
            </Nav.Link>
            <Nav.Link className='text-white mx-2 my-2 my-lg-0' href='/room'>
              <Button className='btn btn-primary text-white ms-lg-3 rounded' type='button'>
                立即訂房
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
