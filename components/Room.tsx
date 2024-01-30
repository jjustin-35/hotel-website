'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Room() {
    const roomImgs: string[] = [
        '/images/桌機版/room1.png', 
        '/images/桌機版/room2-1.png',
    ];
    return (
        <section className="room bg-black ">
            <img src='/images/桌機版/line2.png' alt="" className='waveLine position-absolute w-100'/>
            <div className="py-8 py-lg-12 row row-cols-1 row-cols-lg-2 g-0 px-3 px-lg-0">
                <div className="col ">
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        spaceBetween={50} //Slide之間的距離 
                        slidesPerView={1} //一頁顯示幾個slide
                        autoplay={{
                            delay: 4000000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        navigation={true}
                        pagination={{ clickable: true }}
                    >
                        {roomImgs.map((room, index) => {
                            return (
                                <SwiperSlide key={index} className='banner '>
                                    <img src={room} alt="" className='object-cover room-image w-100'/>
                                </SwiperSlide>
                            )
                        })}
                        
                    </Swiper>
                </div>
                <div className="col text-white d-lg-flex align-items-end">
                    <div className="pt-4 px-lg-8">
                        <h2 className='title fw-bold mb-3'>尊爵雙人房</h2>
                        <p className='desc mb-5'>享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
                        <p className='price fw-bold mb-5'>NT$ 10,000</p>
                        <button type='button' className='w-100 btn btn-more rounded fw-bold text-end'>查看更多</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Room