'use client';

import React from 'react';
import { Image } from 'react-bootstrap';
import RoomImg1 from '../../public/images/desktop/room2-1.png';
import RoomImg2 from '../../public/images/desktop/room2-2.png';
import RoomImg3 from '../../public/images/desktop/room2-3.png';
import RoomImg4 from '../../public/images/desktop/room2-4.png';
import RoomImg5 from '../../public/images/desktop/room2-5.png';
import Link from 'next/link';
import './style.scss';
import PeopleCounter from '../PeopleCounter';

const RoomContent = () => {
  return (
    <main>
      <div className='mx-auto p-5 d-none d-lg-block'>
        <div className='position-relative'>
          <div className='row d-lg-flex justify-content-center'>
            <div className='col-lg-6'>
              <Image
                src={RoomImg1.src}
                className='object-cover w-100 p-1 rounded-start'
                width={978}
                height={600}
                alt='image'
              />
            </div>
            <div className='col-lg-6'>
              <div className='row'>
                <div className='col-lg-6'>
                  <Image src={RoomImg2.src} className='object-cover w-100 p-1' width={387} height={300} alt='image' />
                  <Image src={RoomImg4.src} className='object-cover w-100 p-1' width={387} height={300} alt='image' />
                </div>
                <div className='col-lg-6'>
                  <Image
                    src={RoomImg3.src}
                    className='object-cover w-100 p-1 rounded-end'
                    width={387}
                    height={300}
                    alt='image'
                  />
                  <Image
                    src={RoomImg5.src}
                    className='object-cover w-100 p-1 rounded-end'
                    width={387}
                    height={300}
                    alt='image'
                  />
                </div>
              </div>
            </div>
          </div>
          <Link href='/'>
            <button
              className='position-absolute btn btn-light rounded px-4 text-primary'
              style={{ bottom: '1rem', right: '1rem' }}
              type='button'
            >
              看更多
            </button>
          </Link>
        </div>
      </div>
      <div className='container' style={{ marginTop: '60px' }}>
        <div className='row'>
          <div className='col-lg-7'>
            <div className='title'>
              <h1>尊爵雙人房</h1>
              <p>享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
            </div>
            <div className='room-basic-info my-5'>
              <h5 className='fw-bold'>
                <span className='text-primary fw-bold me-2'>|</span>房型基本資訊
              </h5>
              <div className='row mt-3'>
                <div className='col-lg-3 col-4'>
                  <div className='card rounded h-100'>
                    <div className='d-flex flex-column justify-content-center align-items-start px-2'>
                      <i className='bi bi-arrows-angle-expand text-primary mt-3'></i>
                      <p className='mt-2'>24坪</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-4'>
                  <div className='card rounded h-100'>
                    <div className='d-flex flex-column justify-content-center align-items-start px-1'>
                      <i className='bi bi-arrows-angle-expand text-primary mt-3'></i>
                      <p className='mt-2'>1 張大床</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-4'>
                  <div className='card rounded h-100'>
                    <div className='d-flex flex-column justify-content-center align-items-start px-2'>
                      <i className='bi bi-person-fill text-primary mt-3'></i>
                      <p className='mt-2'>2-4 人</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='room-structure my-5'>
              <h5 className='fw-bold'>
                <span className='text-primary fw-bold me-2'>|</span>房間格局
              </h5>
              <ul className='d-flex flex-wrap mt-3'>
                <li>
                  <p className='d-flex me-5'>
                    <i className='bi bi-check2 text-primary me-1'></i>市景
                  </p>
                </li>
                <li>
                  <p className='d-flex me-5'>
                    <i className='bi bi-check2 text-primary me-1'></i>獨立衛浴
                  </p>
                </li>
                <li>
                  <p className='d-flex me-5'>
                    <i className='bi bi-check2 text-primary me-1'></i>客廳
                  </p>
                </li>
                <li>
                  <p className='d-flex me-5'>
                    <i className='bi bi-check2 text-primary me-1'></i>書房
                  </p>
                </li>
                <li>
                  <p className='d-flex me-5'>
                    <i className='bi bi-check2 text-primary me-1'></i>樓層電梯
                  </p>
                </li>
              </ul>
            </div>

            <div className='room-equipment my-5'>
              <h5 className='fw-bold'>
                <span className='text-primary fw-bold me-2'>|</span>房內設備
              </h5>
              <ul className='d-flex flex-wrap mt-3'>
                <li>
                  <p className='d-flex me-5'>
                    <i className='bi bi-check2 text-primary me-1'></i>平面電視
                  </p>
                </li>
                <li>
                  <p className='d-flex me-5'>
                    <i className='bi bi-check2 text-primary me-1'></i>吹風機
                  </p>
                </li>
                <li>
                  <p className='d-flex me-5'>
                    <i className='bi bi-check2 text-primary me-1'></i>冰箱
                  </p>
                </li>
                <li>
                  <p className='d-flex me-5'>
                    <i className='bi bi-check2 text-primary me-1'></i>熱水壺
                  </p>
                </li>
                <li>
                  <p className='d-flex me-5'>
                    <i className='bi bi-check2 text-primary me-1'></i>檯燈
                  </p>
                </li>
                <li>
                  <p className='d-flex me-5'>
                    <i className='bi bi-check2 text-primary me-1'></i>衣櫃
                  </p>
                </li>
                <li>
                  <p className='d-flex me-5'>
                    <i className='bi bi-check2 text-primary me-1'></i>除濕機
                  </p>
                </li>
                <li>
                  <p className='d-flex me-5'>
                    <i className='bi bi-check2 text-primary me-1'></i>浴缸
                  </p>
                </li>
                <li>
                  <p className='d-flex me-5'>
                    <i className='bi bi-check2 text-primary me-1'></i>書桌
                  </p>
                </li>
                <li>
                  <p className='d-flex me-5'>
                    <i className='bi bi-check2 text-primary me-1'></i>音響
                  </p>
                </li>
              </ul>
            </div>

            <div className='items-provided my-5'>
              <h5 className='fw-bold'>
                <span className='text-primary fw-bold me-2'>|</span>備品提供
              </h5>
              <ul className='d-flex flex-wrap mt-3'>
                <li>
                  <p className='d-flex me-5'>
                    <i className='bi bi-check2 text-primary me-1'></i>衛生紙
                  </p>
                </li>
                <li>
                  <p className='d-flex me-5'>
                    <i className='bi bi-check2 text-primary me-1'></i>拖鞋
                  </p>
                </li>
                <li>
                  <p className='d-flex me-5'>
                    <i className='bi bi-check2 text-primary me-1'></i>沐浴用品
                  </p>
                </li>
                <li>
                  <p className='d-flex me-5'>
                    <i className='bi bi-check2 text-primary me-1'></i>清潔用品
                  </p>
                </li>
                <li>
                  <p className='d-flex me-5'>
                    <i className='bi bi-check2 text-primary me-1'></i>刮鬍刀
                  </p>
                </li>
                <li>
                  <p className='d-flex me-5'>
                    <i className='bi bi-check2 text-primary me-1'></i>吊衣架
                  </p>
                </li>
                <li>
                  <p className='d-flex me-5'>
                    <i className='bi bi-check2 text-primary me-1'></i>浴巾
                  </p>
                </li>
                <li>
                  <p className='d-flex me-5'>
                    <i className='bi bi-check2 text-primary me-1'></i>刷牙用品
                  </p>
                </li>
                <li>
                  <p className='d-flex me-5'>
                    <i className='bi bi-check2 text-primary me-1'></i>罐裝水
                  </p>
                </li>
                <li>
                  <p className='d-flex me-5'>
                    <i className='bi bi-check2 text-primary me-1'></i>梳子
                  </p>
                </li>
              </ul>
            </div>

            <div className='booking-instructions my-5'>
              <h5 className='fw-bold'>
                <span className='text-primary fw-bold me-2'>|</span>訂房須知
              </h5>
              <ol className='mt-3'>
                <li>入住時間為下午3點，退房時間為上午12點。</li>
                <li>如需延遲退房，請提前與櫃檯人員聯繫，視當日房況可能會產生額外費用。</li>
                <li>請勿在房間內抽煙，若有抽煙需求，可以使用設在酒店各樓層的專用吸煙區。</li>
                <li>若發現房間內的設施有損壞或遺失，將會按照價值收取賠償金。</li>
                <li>請愛惜我們的房間與公共空間，並保持整潔。</li>
                <li>如需額外的毛巾、盥洗用品或其他物品，請聯繫櫃檯。</li>
                <li>我們提供免費的Wi-Fi，密碼可以在櫃檯或是房間內的資訊卡上找到。</li>
                <li>請勿帶走酒店房內的物品，如有需要購買，請與我們的櫃檯人員聯繫。</li>
                <li>我們提供24小時櫃檯服務，若有任何需求或疑問，歡迎隨時詢問。</li>
                <li>為了確保所有客人的安全，請勿在走廊或公共區域大聲喧嘩，並遵守酒店的其他規定。</li>
              </ol>
            </div>
          </div>
          <div className='col-lg-5'>
            <div className='card'>
              <div className='card-header bg-transparent'>
                <h5 className='fw-bold pt-2'>預訂房型</h5>
              </div>
              <div className='card-body text-start'>
                <h2 className='card-title'>尊爵雙人房</h2>
                <p className='card-text'>享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
                <div className='d-flex my-3'>
                  <button className='card rounded w-100 me-2'>
                    <div className='text-start pt-3 ps-2'>
                      <h6>入住</h6>
                      <p>2023 / 12 / 03</p>
                    </div>
                  </button>
                  <button className='card rounded w-100'>
                    <div className='text-start pt-3 ps-2'>
                      <h6>退房</h6>
                      <p>2023 / 12 / 04</p>
                    </div>
                  </button>
                </div>
                <div className='row'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='fw-bold mt-3'>人數</p>

                    <PeopleCounter />
                  </div>
                </div>
                <div className='py-5'>
                  <h5 className='text-primary'>NT$ 10,000</h5>
                </div>

                <Link href='/booking'>
                  <button type='button' className='btn btn-primary text-white w-100 rounded'>
                    立即預訂
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RoomContent;
