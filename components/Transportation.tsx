
function Transportation() {
    return (
        <section className="transportation bg-black pt-8 pt-lg-12 ">
            <div className="container ">
                <div className="d-flex align-items-center mb-5 mb-lg-8" style={{ width: '306px' }}>
                    <div className="title me-5" style={{ width: '66px' }}>
                        <span className="fw-bold text-primary ">交通<br />方式</span>
                    </div>
                    <div className='w-100 line' style={{ background: 'linear-gradient(to right, #BE9C7C,#FFFFFF)', height: '2px' }}></div>
                </div>
                <p className="text-white">台灣高雄市新興區六角路123號</p>
                <img src='/images/桌機版/map.png' alt=""  className='w-100 mb-4 mb-5'/>
                <div className="row row-cols-1 row-cols-lg-3 mb-5 mb-lg-8 gy-4">
                    <div className="col">
                        <div className="card border-0 bg-black">
                            <div className="card-header text-primary">
                                <i className="bi bi-car-front-fill  icon-transportation"></i>
                            </div>
                            <div className="card-body text-white p-0">
                                <h5 className="card-title">自行開車</h5>
                                <div className="card-text">如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。</div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                    <div className="card border-0 bg-black">
                            <div className="card-header text-primary">
                                <i className="bi bi-train-front-fill icon-transportation"></i>
                            </div>
                            <div className="card-body text-white p-0">
                                <h5 className="card-title">高鐵/火車</h5>
                                <div className="card-text">如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。</div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                    <div className="card border-0 bg-black">
                            <div className="card-header text-primary">
                                <i className="bi bi-taxi-front-fill icon-transportation"></i>
                            </div>
                            <div className="card-body text-white p-0">
                                <h5 className="card-title">禮賓車服務</h5>
                                <div className="card-text">承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src='/images/桌機版/line3.png' alt="" className='waveLine w-100'/>
        </section>
    )
}

export default Transportation