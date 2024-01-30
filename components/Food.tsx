'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



function Food() {
    interface Card {
        id: number,
        image: string,
        title: string,
        time: string,
        text: string
    }
    let foodData: Card[] = [
        {
            id: 0,
            image: '/images/桌機版/food1.png',
            title: '海霸',
            time: 'SUN-MON 11:00 - 20:30',
            text: '以新鮮海產料理聞名，我們的專業廚師選用高雄當地的海鮮，每一道菜都充滿海洋的鮮美與清甜。無論是烤魚、蒸蝦還是煮蛤蜊，都能讓您品嚐到最新鮮的海洋風味。'
        },
        {
            id: 1,
            image: '/images/桌機版/food2.png',
            title: '日食',
            time: 'SUN-MON 17:00 - 22:00',
            text: '為您提供優質的牛排，每一塊肉都來自頂級的牛肉，經過專業廚師的巧手烹調，口感豐滿、風味絕佳。搭配我們的特製醬料，讓您的味蕾享受一場美味的盛宴。'
        },
        {
            id: 2,
            image: '/images/桌機版/food3.png',
            title: '山臻',
            time: 'SUN-MON 11:00 - 20:30',
            text: '帶您進入一次辣味與鮮香兼具的川菜美食之旅。我們的廚師掌握正宗的川菜烹調技巧，從麻辣鍋到口水雞，每一道菜都有其獨特的風味，讓您回味無窮。'
        },
        {
            id: 3,
            image: '/images/桌機版/food4.png',
            title: '月永',
            time: 'SUN-MON 11:00 - 20:30',
            text: '從鮮美的海鮮、經典的牛排，到各國的特色美食，我們都一應俱全。在這裡，您可以品嚐到世界各地的美食，每一道菜都由專業廚師用心製作，讓您在享受美食的同時，也能感受到我們的熱情與用心。'
        },
        {
            id: 4,
            image: '/images/桌機版/food5.png',
            title: '天潮',
            time: 'SUN-MON 14:00 - 19:30',
            text: '我們提供各種精緻甜點與糕點，無論您喜歡的是巧克力蛋糕、法式馬卡龍，還是台灣傳統的糕點，都能在這裡找到。讓我們的甜點帶您進入一場繽紛的甜蜜旅程。'
        },
    ]
    return (
        <section className="food  position-relative">
            <img src='/images/桌機版/line.png' alt="" className='waveLine position-absolute'/>
            <img src='/images/桌機版/dot.png' alt="" className='dot position-absolute'/>
            <div className="container py-8 py-lg-12">
                <div className="d-flex align-items-center mb-5 mb-lg-8" style={{ width: '306px' }}>
                    <div className="title me-5" style={{ width: '66px' }}>
                        <span className="fw-bold text-primary ">佳餚<br />美饌</span>
                    </div>
                    <div className='w-100 line' style={{ background: 'linear-gradient(to right, #BE9C7C,#FFFFFF)', height: '2px' }}></div>
                </div>

                <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={24} //Slide之間的距離 
                    slidesPerView={1.2} //一頁顯示幾個slide
                    //centeredSlides={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    navigation={false}
                    breakpoints={{
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        }
                    }}
                >
                    {foodData.map((food) => {
                        return (
                            <SwiperSlide key={food.id}>
                                <div className="card position-relative" >
                                    <img src={food.image} className="card-img-top rounded" alt={food.title} />
                                    <div className="card-body position-absolute bottom-0 text-white" >
                                        <div className="d-flex justify-content-between align-items-center mb-3 ">
                                            <h5 className="card-title mb-0">{food.title}</h5>
                                            <p className='time fw-bold mb-0'>{food.time}</p>
                                        </div>
                                        <p className="card-text">
                                            {food.text}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}
export default Food