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

// Sample image URLs for the Personal Care section
const personalCareLogos = [
  "https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443647_skinn.webp?format=auto",
  "https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443670_hairr.webp?format=auto",
  "https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443681_sexuall.webp?format=auto",
  "https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443695_orall.webp?format=auto",
  "https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443705_elderly.webp?format=auto",
  "https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443714_baby.webp?format=auto",
  "https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443722_womenn.webp?format=auto",
  "https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443735_menn.webp?format=auto",
  "https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443746_pett.webp?format=auto",
];

export default function PersonalCareSection() {
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
      prevIndex === 0 ? personalCareLogos.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setStartIndex((prevIndex) =>
      prevIndex === personalCareLogos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleBrands = () => {
    const endIndex = startIndex + visibleCount;
    if (endIndex > personalCareLogos.length) {
      return [
        ...personalCareLogos.slice(startIndex),
        ...personalCareLogos.slice(0, endIndex - personalCareLogos.length),
      ];
    }
    return personalCareLogos.slice(startIndex, endIndex);
  };

  const visibleBrands = getVisibleBrands();

  return (
    <VStack my={12} width="100%" justify="center" align="center">
      <HStack justify="space-between" my={2} width="75%">
        <Text fontSize="xl">Personal Care</Text>
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
              <VStack
                key={index}
                p={4}
                height="200px"
                overflow="hidden"
                transition="transform 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "2xl",
                }}
              >
                <Image
                  key={index}
                  src={logoUrl}
                  alt={`Personal Care Logo ${index + 1}`}
                  objectFit="cover"
                  width="150px"
                  height="150px"
                  transition="transform 0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                    boxShadow: "2xl",
                  }}
                />
              </VStack>
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
