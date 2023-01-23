import Image from 'next/image';
import React, { useState } from 'react';
import LinesTwo from '../../assets/lines-2.png';
import { LARGE_IMAGES } from './data';
import { NewsContainer } from './styles';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function News() {

  const settings = {
    centerMode: true,
    slidesToShow: 3,
    arrows: false, 
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 900,
    easing: 'easeOutSine',
    centerPadding: '0px',
    swipe: true,
  };

  return (
    <NewsContainer>
        <Image src={LinesTwo} alt="Lines" />
        <h2>Últimas Notícias!</h2>

        <Slider {...settings}>
          <div>
            <div class="test">
              <h1>Slide 1</h1>
              <p>Excepteur sint <strong>occaecat cupidatat</strong> non proident.</p>
            </div>
          </div>
          <div>
            <div class="test">
              <h1>Slide 2</h1>
              <p>Lorem ipsom <strong>occaecat cupidatat</strong> proident.</p>
            </div>
          </div>
          <div>
            <div class="test">
              <h1>Slide 3</h1>
              <p>Excepteur sint <strong>occaecat cupidatat</strong> non proident.</p>
            </div>
          </div>
            
          <div>
            <div class="test">
              <h1>Slide 4</h1>
              <p>Lorem sint <strong>ipsom cupidatat</strong> proident.</p>
            </div>
          </div>
          <div>
            <div class="test">
              <h1>Slide 5</h1>
              <p>Lorem sint <strong>ipsom cupidatat</strong> proident.</p>
            </div>
          </div>
        </Slider>
    </NewsContainer>
  )
}

export default News