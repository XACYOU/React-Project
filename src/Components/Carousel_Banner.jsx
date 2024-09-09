import {
  Box,
  Text,
  VStack,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import CarouselComponent from "../Components/CarouselComponent";
import StaticBanner from "../Components/StaticBanner";

const Carousel_Banner = () => {
  const stackDirection = useBreakpointValue({
    base: "column",
    md: "column",
    lg: "row",
  });
  const carouselWidth = useBreakpointValue({
    base: "100%",
    md: "100%",
    lg: "50%",
  });
  const bannerWidth = useBreakpointValue({
    base: "100%",
    md: "100%",
    lg: "50%",
  });

  return (
    <VStack spacing={4}>
      <HStack
        alignItems="start"
        width="100%"
        flexDirection={stackDirection}
        spacing={0}
      >
        <Box width={carouselWidth}>
          <CarouselComponent />
        </Box>
        <Box width={bannerWidth}>
          <StaticBanner />
        </Box>
      </HStack>
      <Text color="gray.600" fontSize="2xl">
        Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform
      </Text>
    </VStack>
  );
};

export default Carousel_Banner;
