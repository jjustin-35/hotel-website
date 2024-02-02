import Image from 'next/image';
import Logo from '../public/images/desktop/logo.png';

export default function Home() {
  return (
    <main className='bg-dark vh-100 vw-100 d-flex justify-content-center align-items-center'>
      <Image src={Logo} alt='Logo' width={250} />
    </main>
  );
}
