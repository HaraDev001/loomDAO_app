import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { OverlayContainer } from '../../containers';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TrendingCard } from '../../components';
import { Pagination, Navigation } from 'swiper';
import swipePrev from '../../static/img/icons/hl-swiper-button-prev.svg';
import swipeNext from '../../static/img/icons/hl-swiper-button-next.svg';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const TrendingContainer = () => {
  const slides = [0, 1, 2, 3, 4];
  return (
    <OverlayContainer 
      className="bg-hl-secondary bg-opacity-60 py-5"
    >
      <Row className="d-flex justify-content-center mb-4">
        <Col lg="10"><h3>Trending Licenses <span className="text-hl-cta">in all categories</span></h3></Col>
      </Row>
      <Row className="d-flex justify-content-center mt-3 mb-5">
        <img className="hl-swiper-prev" src={swipePrev} alt='prev' />
        <img className="hl-swiper-next" src={swipeNext} alt='next' />
        <div className="pagination"></div>
        <Col lg="10">
          <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true, el: '.pagination' }}
          spaceBetween={20}
          slidesPerView={3}
          initialSlide={10}
          centeredSlides={true}
          rewind={true}
          navigation={{
            nextEl: '.hl-swiper-next',
            prevEl: '.hl-swiper-prev'
          }}
          breakpoints={{
            360: {
              slidesPerView: 1
            },
            576: {
              slidesPerView: 1
            },
            720: {
              slidesPerView: 2
            },
            992: {
              slidesPerView: 3
            }
          }}
          >
            { 
              slides.map(
                (slide, i) => 
                (
                    <SwiperSlide key={`${i+1}slide`} >
                      <TrendingCard />
                    </SwiperSlide>
                )
                ) 
              }
          </Swiper>
        </Col>
      </Row>
    </OverlayContainer>
  );
}

export default TrendingContainer;
