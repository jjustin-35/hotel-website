function News() {
    const NewsData = [
        {
            id: 0,
            image: '/images/桌機版/news1.png',
            title: '秋季旅遊，豪華享受方案',
            desc: '秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。'
        },
        {
            id: 1,
            image: '/images/桌機版/news2.png',
            title: '輕鬆住房專案',
            desc: '我們知道，有時候您只是需要一個舒適的地方放鬆心情。因此，我們推出了「輕鬆住房專案」，讓您無壓力地享受住宿。不管是短期的休息，還是長期的住宿，我們都會以最貼心的服務，讓您感到賓至如歸。'
        },
        {
            id: 2,
            image: '/images/桌機版/news3.png',
            title: '耶誕快樂，住房送禮',
            desc: '聖誕節來臨，我們為您準備了特別的禮物！在聖誕期間訂房，不僅有特別優惠，還會送上我們精心準備的聖誕禮物。讓我們一起慶祝這個溫馨的節日吧！'
        },

    ]
    return (
        <section className='news py-8 py-lg-12'>
            <div className="container">
                <div className="row d-block d-lg-flex">
                    <div className="col-lg-2 mb-5 me-8" style={{ width: '140px' }}>
                        <span className="fw-bold text-primary title">最新<br />消息</span>
                        <div className='w-100 line' style={{ background: 'linear-gradient(to right, #BE9C7C,#FFFFFF)', height: '2px' }}></div>
                    </div>
                    <div className="col-lg-10">
                        {NewsData.map((i) => {
                            return (
                                <div className="card border-0 mb-5" key={i.id}>
                                    <div className="d-lg-flex align-items-center">
                                        <img src={i.image} className='card-img me-lg-4 rounded object-cover ' alt="" />
                                        <div className="card-body px-0">
                                            <h2 className='card-title fw-bold mb-4'>{i.title}</h2>
                                            <p className='card-text'>{i.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </section>
    )
}
export default News