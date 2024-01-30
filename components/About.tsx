function About() {
    return (
        <section className="bg-black about py-8 py-lg-12 position-relative">
            <img src='/images/桌機版/dot.png' alt="" className='dot position-absolute'/>
            <div className="banner ">
                <div className="container ps-0 pt-5 pt-lg-8 d-flex justify-content-end">
                    <div className="bannerText ms-5">
                        <div className="w-100 text-white p-4 p-lg-8">
                            <div className="d-flex align-items-center mb-5 mb-lg-8">
                                <h1 className='fw-bold title mb-0 '>關於<br></br>我們</h1>
                                <div className="border ms-5" style={{borderStyle:"solid",borderColor:"white",width:"140px"}}></div>
                            </div>
                            
                            <ul className='p-0 m-0'>
                                <li className='mb-3 mb-lg-5 '>
                                    <p className='mb-0'>享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。</p>
                                    <p>我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。 </p>
                                </li>
                                <li className='mb-3 mb-lg-5'>
                                    <p className='mb-0'>我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。</p>
                                    <p>我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。 </p>
                                </li>
                                <li className='mb-3 mb-lg-5'>
                                    <p>在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。 </p>
                                </li>
                                <li>
                                    <p className='mb-0'>享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img src={aboutBanner} alt="" className='w-100' /> */}

        </section>
    )
}

export default About