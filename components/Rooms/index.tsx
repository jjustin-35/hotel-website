'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Rooms() {
  const roomsCarousel: string[] = ['/images/desktop/room2-1.png', '/images/desktop/room2-2.png'];

  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    // Fetch room data from the API
    fetch('https://hotel-service-center.onrender.com/api/v1/rooms/', { method: 'GET' })
      .then((response) => response.json())
      .then((res) => {
        const rooms = res.result[0];
        console.log(rooms);

        // Update state with the fetched room data
        setRoomData(res.result);
      });
  }, []);

  return (
    <>
      {roomData.map((room, index) => {
        const { imageUrlList } = room;
        return (
          <div key={index} className='card my-5' style={{ borderRadius: '25px' }}>
            <div className='row'>
              <div className='col-lg-7'>
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
                  {imageUrlList &&
                    imageUrlList.map((imageUrl, imgIndex) => {
                      return (
                        <SwiperSlide key={imgIndex} className='position-relative'>
                          <Image
                            className='card-img-top object-cover'
                            width={600}
                            height={400}
                            src={imageUrl}
                            alt='image'
                          />
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
              <div className='col-lg-5'>
                <div className='card-body'>
                  <h2 className='card-title'>{room.name}</h2>
                  <p className='card-text'>{room.description}</p>
                  <div className='row mt-3'>
                    <div className='col-lg-3 col-4'>
                      <div className='card rounded h-100'>
                        <div className='d-flex flex-column justify-content-center align-items-start px-2'>
                          <i className='bi bi-arrows-angle-expand text-primary mt-3'></i>
                          <p className='mt-2'>{room.areaInfo}</p>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3 col-4'>
                      <div className='card rounded h-100'>
                        <div className='d-flex flex-column justify-content-center align-items-start px-1'>
                          <i className='bi bi-arrows-angle-expand text-primary mt-3'></i>
                          <p className='mt-2'>{room.bedInfo}</p>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3 col-4'>
                      <div className='card rounded h-100'>
                        <div className='d-flex flex-column justify-content-center align-items-start px-2'>
                          <i className='bi bi-person-fill text-primary mt-3'></i>
                          <p className='mt-2'>2-{room.maxPeople} 人</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='w-100 d-none d-lg-flex my-4'
                    style={{ background: 'linear-gradient(to right, #BE9C7C,#FFFFFF)', height: '2px' }}
                  ></div>
                  <div className='my-4'>
                    <div className='row d-flex justify-content-between'>
                      <div className='col-5'>
                        <h5 className='text-primary fw-medium'>NT$ {room.price}</h5>
                      </div>
                      <div className='col-2'>
                        <Link href='/room'>
                          <i className='bi bi-arrow-right text-primary'></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Rooms;
