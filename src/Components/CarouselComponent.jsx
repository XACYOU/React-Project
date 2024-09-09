import React from "react";
import Slider from "react-slick";
import { Box, Image } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../assets/below-navbar-banner/image1.jpg";
import image2 from "../assets/below-navbar-banner/image2.png";
import image3 from "../assets/below-navbar-banner/image3.png";
import image4 from "../assets/below-navbar-banner/image4.png";
import image5 from "../assets/below-navbar-banner/image5.png";
import image6 from "../assets/below-navbar-banner/image6.png";
import image7 from "../assets/below-navbar-banner/image7.png";
import image8 from "../assets/below-navbar-banner/image8.jpg";
import image9 from "../assets/below-navbar-banner/image9.png";
import image10 from "../assets/below-navbar-banner/image10.png";

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    appendDots: (dots) => <div style={{ position: "relative" }}>{dots}</div>,
  };

  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

  return (
    <Box width="100%" position="relative">
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} display="flex" justifyContent="center">
            <Image
              src={image}
              alt={`carousel-image-${index}`}
              objectFit="cover"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CarouselComponent;
