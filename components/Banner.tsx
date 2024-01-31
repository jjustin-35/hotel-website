'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Banner() {
    const banner: string[] = [
        '/images/桌機版/banner.png',
        '/images/桌機版/banner.png'
    ]
    return (
        <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={50} //Slide之間的距離 
        slidesPerView={1} //一頁顯示幾個slide
        autoplay={{
          delay: 400000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={false}
        pagination={{ clickable: true }}
      >
        {banner.map((i, index) => {
          return (
            <SwiperSlide key={index} className='banner position-relative'>
              <div className="cover"></div>
              <img className='object-cover w-100 vh-100' src={i} alt="全新開幕" />
                <div className="banner-caption position-absolute d-lg-flex align-items-center">
                  <div className="title">
                    <div className="text-center text-lg-start bannerLogo">
                      <h2 className='text-primary'>享樂酒店</h2>
                      <p className='text-primary mb-4'>Enjoyment Luxury Hotel</p>
                      <div className='w-100 d-none d-lg-flex' style={{ background: 'linear-gradient(to right, #BE9C7C,#FFFFFF)', height: '2px' }}></div>
                      <div className="d-flex d-lg-none w-50 bannerColumnLine mb-5"></div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="content-border">
                      <div className="w-100 content-text" >
                        <h1 className='text-white fw-bold title mb-4 w-100' style={{ marginBottom: '30px' }}>高雄<br></br>豪華住宿之選</h1>
                        <p className='text-white desc'>我們致力於為您提供無與倫比的奢華體驗與優質服務</p>
                        <button className='btn w-100 rounded text-end btn-booking mb-9' style={{ background: 'white', fontSize: '24px', lineHeight: '36px' }}>立即訂房
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
        
    )
}