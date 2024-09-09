import React from "react";
import { Box, Image } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Box
      width={{ base: "100%", md: "90%", lg: "80%" }}
      mx="auto"
      position="relative"
      textAlign="center"
      mt={8}
    >
      <Image src="https://onemg.gumlet.io/marketing/d037f049-0426-43b5-b365-c89ccd788d2d.png" alt="Descriptive Alt Text" width="100%" />
    </Box>
  );
};

export default HeroSection;
