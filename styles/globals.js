import { lighten } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.primary};
      border-radius: 5px;
    }
    ::-webkit-scrollbar-track{
      background: ${({ theme }) => lighten(0.4, theme.primary)};
    }
    scroll-behavior: smooth;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    background: ${props => props.theme.background};
    font: 400 1rem 'Montserrat', sans-serif;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  img {
    /* width: 100%;
    max-width: 100%; */
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  .disableScroll {
    height: 100%;
    overflow-y: hidden;
  }

  section {
    overflow-x: hidden;
  }

  #home {
    width: 100%;
    margin: 0 auto;
  }

  .slide img {
    margin: 0 auto;
  }
  .slide {
    transform: scale(0.8);
    transition: transform 300ms;
    opacity: 0.5;
  }
  .activeSlide {
    transform: scale(1.1);
    opacity: 1;
    height: 210px;
    z-index: 2;
    position: relative;
  }
  .slider_card h3 {
    text-align: center;
    margin-top: 1.5rem;
    padding: 0 1rem;
  }
  @media screen and (max-width: 980px){
    .slider_card h3 {
      margin-left: auto;
      margin-right: auto;
      width: 80%;
    }
  }
  .slider_card {
    outline: none;
  }
  .slick-slider .prev {
    top: 50%;
    left: 3%;
    transform: translateY(-50%);
    position: absolute;
    color: #D7C692;
    font-size: 2.5rem
  }

  .slick-slider .next {
    top: 50%;
    right: 3%;
    transform: translateY(-50%);
    position: absolute;
    color: #D7C692;
    font-size: 2.5rem
  }

  .slide {
    transform: scale(0.7);
    transition: transform 300ms;
    opacity: 0.5;
  }

  .slideWrapper {
    display: flex;
    justify-content: center;
  }

  .prevArrow {
    position: absolute;
    top: 40%;
    left: 60px;
    z-index: 100;
    cursor: pointer;
    font-size: 2rem;
  }

  .nextArrow {
    position: absolute;
    top: 40%;
    right: 60px;
    z-index: 100;
    cursor: pointer;
    font-size: 2rem;
  }
  /* 
  .prevArrow img,
  .nextArrow img {
    width: 4rem;
  } */
  .slick-center .slider_card {
    transform: scale(1.15);
    z-index: 2;
    position: relative;
    opacity: 2;
  }
  .slider__container {
      max-width: 1100px;
      margin: 0 auto;
      overflow: hidden;
  }
  .slick-list {
    margin-left: -2%;
  }
  .slick-dots {
    display: none !important;
  }
`;