import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { instance } from "../../config/config";
import "./Slider.css";
import Card from "../card/Card";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function MainSlider() {
  const [sliderData, setsd] = useState([]);
  const settings = {
    rtl: true,
    lazyLoad: false,
    autoplay: true,
    infinite: true,
    dots: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    instance
      .get("/movie/popular")
      .then((res) => setsd(res.data.results))
      .catch((error) => {
        console.error("slider connection:", error);
      });
  }, []);
  return (
    <div>
      <div className="slider-body">
        <div className="s-tik ticket">
          المتصدر حاليا
          <FontAwesomeIcon icon={faFire} fade />
        </div>
        <Slider {...settings}>
          {sliderData.map((el) => {
            if (
              (el.poster_path && el.original_language === "en") ||
              (el.poster_path && el.original_language === "ar")
            ) {
              return (
                <Card
                  img={`${el.poster_path}`}
                  title={el.original_title}
                  disc={el.overview}
                  id={el.id}
                  key={el.id}
                  vote={parseFloat(el.vote_average).toFixed(1)}
                />
              );
            } else {
              return null;
            }
          })}
        </Slider>
      </div>
    </div>
  );
}
