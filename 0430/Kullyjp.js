import React, { Component } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, Autoplay} from 'swiper/modules';

import '../App.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

class Kullyjp extends Component {
  render() {
    return (
      <>
        <main>
          <article>
            <h2>이미지 슬라이드 </h2>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                spaceBetween={0}
                slidesPerview={1}
                navigation
                autoplay={{delay:3000}}
                pagination={{clickable:true}}
                scrollbar={{draggable:true}}
                className="mslide"
              >
                <SwiperSlide className="slide">
                <img src={`${process.env.PUBLIC_URL}/images/b1.png`} alt="마켓컬리"/>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <img src={`${process.env.PUBLIC_URL}/images/b2.png`} alt="마켓컬리"/>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <img src={`${process.env.PUBLIC_URL}/images/b3.png`} alt="마켓컬리"/>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <img src={`${process.env.PUBLIC_URL}/images/b4.jpg`} alt="마켓컬리"/>
                </SwiperSlide>
              </Swiper>
          </article>
        </main>
      </>
    );
  }
}

export default Kullyjp;