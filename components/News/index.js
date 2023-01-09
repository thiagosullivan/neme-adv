import Image from 'next/image';
import React, { useState } from 'react';
import LinesTwo from '../../assets/lines-2.png';
import { NewsContainer } from './styles';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const data = [
  {
    src: "https://picsum.photos/600/300/?random=1",
    text: 'Texto 1'
  },
  {
    src: "https://picsum.photos/600/300/?random=2",
    text: 'Texto 2'
  },
  {
    src: "https://picsum.photos/600/300/?random=3",
    text: 'Texto 3'
  },
  {
    src: "https://picsum.photos/600/300/?random=4",
    text: 'Texto 4'
  },
  {
    src: "https://picsum.photos/600/300/?random=5",
    text: 'Texto 5'
  },
]
function News() {
  
  const NextArrow = ({onClick}) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    )
  }

  const PrevArrow = ({onClick}) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    )
  }

  const [imgIndex,setImgIndex] = useState(0)

  const settings = {
    centerMode: true,
    slidesToShow: 3,
    arrows: false, 
    dots: true,
    initialSlide: 1,
    // autoplay: true,
    autoplaySpeed: 5000,
    speed: 900,
    easing: 'easeOutSine',
    centerPadding: '0px',
    swipe: true,
    // infinite:true,
    // lazyLoad: true,
    // speed: 300,
    // slidesToShow:3,
    // centerMode: true,
    // centerPadding: 0,
    // autoplay: true,
    // speed: 1000,
    // autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImgIndex(next),
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: false,
          dots: false
        }
      },
    ]
  };

  return (
    <NewsContainer>
        <Image src={LinesTwo} alt="Lines" />
        <h2>Últimas Notícias!</h2>

        <div className='slider__container'>
          <Slider {...settings}>
            {data.map((img, idx) => (
              <div key={idx} className={`slider_card ${idx === imgIndex ? "slide activeSlide" : "slide"}`}>
                <img src={img.src} alt={idx} />
                <h3>{img.text}</h3>
              </div>
            ))}
          </Slider>
        </div>
    </NewsContainer>
  )
}

export default News