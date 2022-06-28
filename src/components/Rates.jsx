import React from 'react'
import './Rates.css'
import { Navigation, Pagination, Scrollbar, A11y, Virtual, Controller, Grid, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import data from './Rate-data.json'
import { useState } from 'react';
import { useEffect } from 'react';
export function RatePage(){
    const [widthScreen, setWidthScreen] = useState(window.innerWidth)
   window.addEventListener('resize', (w) => {
    setWidthScreen(window.innerWidth)
    
   })
   
   
      return (
        <div className="rates-main">
        <div id="rates" className="rates-main-c">
        <h1>What our clients say?</h1>
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Grid, Autoplay]}
      spaceBetween={widthScreen <= 1237 ? 90 :  widthScreen <=900 ? 140 : 30 }
      slidesPerView={widthScreen <= 768 ? 1 : widthScreen <=1273 ? 2 : 3}
      autoplay={{delay:3000}}
      navigation
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {
        data.rates.map(el => (
            <SwiperSlide className='swiper-slide'> <div className="card-rate">
          <div className="card-rate-c">
              <div className="quote-rate">
                  <span></span>
                  
                  
              </div>
              <div className="words-rate">
                <p>{el.text}</p>
              </div>
              <div className="avatar-rate">
                <img src={el.avatar} />
                <span>{el.name}</span>
                <p class="stars"></p>
              </div>
          </div>
      </div></SwiperSlide>
        ))
      }
      
      
    </Swiper>
     
     


        </div>
      
        </div>
      );
}