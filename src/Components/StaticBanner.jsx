import React from "react";
import { Box, Image } from "@chakra-ui/react";
import image7 from "../assets/below-navbar-banner/image7.png";

const StaticBanner = () => {
  return (
    <Box display="flex" alignItems="start" width="100%">
      {/* Set fixed height */}
      <Image src={image7} alt="static-banner" objectFit="cover" />
    </Box>
  );
};

export default StaticBanner;
