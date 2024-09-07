import axios from "axios";
import React, { useEffect, useState } from "react";
import img1 from "../../assets/img/pec1.jpg";
import img2 from "../../assets/img/pec2.jpg";
import img3 from "../../assets/img/pec3.jpg";
import img4 from "../../assets/img/pec4.png";
import img5 from "./../../assets/img/pec5.jpg";
import img6 from "../../assets/img/pec6.jpg";
import Slider from "react-slick";

function HeroSection() {

const[slider,setSlider]=useState()
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

 

  return (
    <>
      <div className="grid  dark:bg-gray-950  grid-cols-12 p-10  gap-3">
        <div className="  col-span-12 md:col-span-8  sm:p-3 sm:my-10 md:m-0 md:p-0">
          <Slider {...settings}>
            <img
              className="h-[400px] w-full md:object-cover "
              src={img3}
              alt="ImgeSlider"
            />
            <img
              className="h-[400px] w-full md:object-cover "
              src={img4}
              alt="ImgeSlider"
            />
            <img
              className="h-[400px] w-full md:object-cover "
              src={img5}
              alt="ImgeSlider"
            />
          </Slider>
        </div>
        <div className="  col-span-12 md:col-span-4 ">
          <img
            className="  sm:h-[200px] md:h-[200px] w-full object-cover "
            src={img2}
            alt="ImgeSlider"
          />
          <img
            className="  sm:h-[200px] md:h-[200px] w-full object-cover "
            src={img1}
            alt="ImgeSlider"
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
