import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import LinesTwo from '../../assets/lines-2.png';
import { NewsContainer } from './styles';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Link from 'next/link';

function NewsPostPage({posts, post}) {
  console.log(posts, 'POSTAGEM PAGE')

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

  const [pathNameState, SetPathNameState] = useState();

  useEffect(() => {
    const pathName = window.location.pathname.split("/").pop();
  
    console.log(pathName, 'PATH NAME');
    if(pathName.includes(post.slug)){
      SetPathNameState(pathName)
    }
  }, [pathNameState])
  console.log(pathNameState, 'PATH NAME STATE')

  const filteredPosts = posts.filter(item => item.slug != pathNameState);

  console.log(filteredPosts, 'POSTS FILTRADOS')

  return (
    <NewsContainer>
        <h2 className='news__title__home'>Outras Notícias:</h2>
        <div className='slider__container'>
          <Slider {...settings}>
            {filteredPosts.map((post, idx) => (
              <div key={idx} className={`slider_card ${idx === imgIndex ? "slide activeSlide" : "slide"}`}>
                <div className='layer__post__home'></div>
                <img src={post.imgPost.url} alt={post.title} />
                <h3>{post.title.length > 123 ? post.title.substr(0, 123) + "..." : post.title}</h3>
                <Link href={`blog/${post.slug}`}>
                  Leia mais
                </Link>
              </div>
            ))}
          </Slider>
        </div>
    </NewsContainer>
  )
}

export default NewsPostPage