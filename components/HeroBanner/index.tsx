'use client';
import Image from 'next/image';
import './style.scss';

import Carousel from 'react-bootstrap/Carousel';

function HeroBanner() {
  const banner: string[] = [
    '/images/desktop/banner.png',
    '/images/desktop/about.png',
    '/images/desktop/banner.png',
    '/images/desktop/about.png',
    '/images/desktop/banner.png',
  ];
  return (
    <Carousel data-bs-theme='dark'>
      {banner.map((item, id) => {
        return (
          <Carousel.Item key={id}>
            <Image
              className='d-block w-100 object-cover'
              style={{ filter: 'brightness(45%)' }}
              src={item}
              width={1920}
              height={800}
              alt='First slide'
            />
            <Carousel.Caption className='position-absolute' style={{ top: '35%' }}>
              <div className='d-flex flex-column flex-lg-row justify-content-lg-center align-items-lg-center'>
                <div className='col-lg-5 text-primary text-lg-start'>
                  <h2>享樂酒店</h2>
                  <p>Enjoyment Luxury Hotel</p>
                  <div
                    className='w-100 d-none d-lg-flex'
                    style={{ background: 'linear-gradient(to right, #BE9C7C,#FFFFFF)', height: '2px' }}
                  ></div>
                  <div className='d-flex d-lg-none w-50 bannerColumnLine mb-5'></div>
                </div>

                <div className='col-lg-3 text-white mx-lg-3'>
                  <h1 className='fw-bold'>客房旅宿</h1>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default HeroBanner;
