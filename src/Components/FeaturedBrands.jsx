import React, { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Image,
  IconButton,
  useBreakpointValue,
  Text,
  Button,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const brandLogos = [
  "https://onemg.gumlet.io/diagnostics%2F2024-06%2F1717480239_Baidyanath.png?format=auto",
  "https://onemg.gumlet.io/diagnostics%2F2024-06%2F1717739974_Dabur.png?format=auto",
  "https://onemg.gumlet.io/diagnostics%2F2024-06%2F1717480231_Morepen.png?format=auto",
  "https://onemg.gumlet.io/diagnostics%2F2024-06%2F1717649826_AVP.png?format=auto",
  "https://onemg.gumlet.io/diagnostics%2F2024-06%2F1717649811_Protinex1.png?format=auto",
  "https://onemg.gumlet.io/diagnostics%2F2024-06%2F1717739983_wellbeingnutri.png?format=auto",
  "https://onemg.gumlet.io/diagnostics%2F2024-06%2F1717649862_mCaffeine.png?format=auto",
  "https://onemg.gumlet.io/diagnostics%2F2024-05%2F1716558850_tejasya.png?format=auto",
  "https://onemg.gumlet.io/diagnostics%2F2024-05%2F1716558862_Tata+1mg.png?format=auto",
];

export default function FeaturedBrand() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = useBreakpointValue({
    base: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
  });

  const handlePrevClick = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? brandLogos.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setStartIndex((prevIndex) =>
      prevIndex === brandLogos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleBrands = () => {
    const endIndex = startIndex + visibleCount;
    if (endIndex > brandLogos.length) {
      return [
        ...brandLogos.slice(startIndex),
        ...brandLogos.slice(0, endIndex - brandLogos.length),
      ];
    }
    return brandLogos.slice(startIndex, endIndex);
  };

  const visibleBrands = getVisibleBrands();

  return (
    <VStack my={6} width="100%" justify="center" align="center">
      <HStack justify="space-between" my={2} width="75%">
        <Text fontSize="xl">Featured Brands</Text>
        <Button color="white" bg="#FF6F61" size="sm">
          SEE ALL
        </Button>
      </HStack>

      <VStack width="100%" boxShadow="2xl" bg="#ffffff" p={4} borderRadius="md">
        <Box width="70%" position="relative">
          <IconButton
            icon={<ChevronLeftIcon boxSize={8} />}
            onClick={handlePrevClick}
            position="absolute"
            left="10px"
            top="50%"
            transform="translateY(-50%)"
            zIndex="1"
            bg="white"
            borderRadius="full"
            boxShadow="md"
            color="#FF6F61"
            transition="transform 0.3s ease-in-out"
          />
          <HStack
            spacing={2}
            width="100%"
            justify="space-evenly"
            align="center"
          >
            {visibleBrands.map((logoUrl, index) => (
              <Image
                key={index}
                src={logoUrl}
                alt={`Brand Logo ${index + 1}`}
                objectFit="cover"
                width="150px"
                height="150px"
                transition="transform 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "2xl",
                }}
              />
            ))}
          </HStack>
          <IconButton
            icon={<ChevronRightIcon boxSize={8} />}
            onClick={handleNextClick}
            position="absolute"
            right="10px"
            top="50%"
            transform="translateY(-50%)"
            zIndex="1"
            bg="white"
            borderRadius="full"
            boxShadow="md"
            color="#FF6F61"
            transition="transform 0.3s ease-in-out"
          />
        </Box>
      </VStack>
    </VStack>
  );
}
