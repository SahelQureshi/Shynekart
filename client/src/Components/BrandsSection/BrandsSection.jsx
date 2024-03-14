import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/Partnerships/image1.jpg";
import Image2 from "../../assets/Partnerships/image2.jpg";
import Image3 from "../../assets/Partnerships/image3.jpg";
import Image4 from "../../assets/Partnerships/image4.jpg";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <div className="container" style={{maxWidth:"1348px",width:"1348px",height: "504px",padding: "32px",marginTop: "47px",marginBottom: "33px"}}>
      <div className="cotainer"><h2>Sponsership</h2></div>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
     
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={Image1} alt="" style={{width:"370px",height:"241px"}} /></SwiperSlide>
      <SwiperSlide><img src={Image2} alt="" style={{width:"370px",height:"241px"}} /></SwiperSlide>
      <SwiperSlide><img src={Image3} alt="" style={{width:"370px",height:"241px"}} /></SwiperSlide>
      <SwiperSlide><img src={Image4} alt="" style={{width:"370px",height:"241px"}} /></SwiperSlide>
    </Swiper>
    </div>
  );
};