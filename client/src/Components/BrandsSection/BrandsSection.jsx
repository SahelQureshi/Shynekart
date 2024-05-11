import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/Partnerships/image1.jpg";
import Image2 from "../../assets/Partnerships/image2.jpg";
import Image3 from "../../assets/Partnerships/image3.jpg";
import Image4 from "../../assets/Partnerships/image4.jpg";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "../BrandsSection/brand.css"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <div className="container contaWISwi" >
      <div className="cotainer"><h2>Sponsership</h2></div>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
     
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img className="ImageSwipet" src={Image1} alt=""  /></SwiperSlide>
      <SwiperSlide><img className="ImageSwipet" src={Image2} alt=""  /></SwiperSlide>
      <SwiperSlide><img className="ImageSwipet" src={Image3} alt=""  /></SwiperSlide>
      <SwiperSlide><img className="ImageSwipet" src={Image4} alt=""  /></SwiperSlide>
    </Swiper>
    </div>
  );
};