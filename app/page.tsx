import Image from 'next/image';
import Logo from '../public/images/desktop/logo.png';
import NavBar from '@/components/Navbar';

export default function Home() {
  return (
    <div className='div'>
      <NavBar />
      <main className='bg-dark vh-100 vw-100 d-flex justify-content-center align-items-center'>
        <Image src={Logo} alt='Logo' width={250} />
      </main>
    </div>
  );
}
