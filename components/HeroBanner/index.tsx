'use client';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Banner() {
  const banner: string[] = [
    '/images/desktop/banner.png',
    '/images/desktop/banner.png',
    '/images/desktop/banner.png',
    '/images/desktop/banner.png',
    '/images/desktop/banner.png',
  ];
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={50} //Slide之間的距離
      slidesPerView={1} //一頁顯示幾個slide
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      loop={true}
      navigation={false}
      pagination={{ clickable: true }}
    >
      {banner.map((i, index) => {
        return (
          <SwiperSlide key={index} className='banner position-relative'>
            <div className='cover'></div>
            <Image className='object-cover w-100 vh-100' width={1920} height={800} src={i} alt='全新開幕' />
            <div className='banner-caption position-absolute d-lg-flex align-items-center'>
              <div className='title'>
                <div className='text-center text-lg-start'>
                  <h2 className='text-primary'>享樂酒店</h2>
                  <p className='text-primary mb-4'>Enjoyment Luxury Hotel</p>
                  <div
                    className='w-100 d-none d-lg-flex'
                    style={{ background: 'linear-gradient(to right, #BE9C7C,#FFFFFF)', height: '2px' }}
                  ></div>
                  <div className='d-flex d-lg-none w-50 w-lg-100 bannerColumnLine mb-5'></div>
                  <h2 className='text-white d-lg-none'>客房旅宿</h2>
                </div>
              </div>
              <div className='content'>
                <h2 className='d-none d-lg-block text-white'>客房旅宿</h2>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
