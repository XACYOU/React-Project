import React, { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Image,
  Text,
  IconButton,
  useBreakpointValue,
  Badge,
  Button,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const categories = [
  {
    label: "Good Health Smart Package",
    originalPrice: 1500,
    discountedPrice: 1000,
  },
  {
    label: "Comprehensive Gold Full Body Checkup",
    originalPrice: 3000,
    discountedPrice: 2000,
  },
  {
    label: "Good Health Silver Package",
    originalPrice: 2250,
    discountedPrice: 1500,
  },
  {
    label: "Comprehensive Silver Full Body Checkup",
    originalPrice: 3000,
    discountedPrice: 2000,
  },
  {
    label: "Women Wellness Premium Package",
    originalPrice: 3750,
    discountedPrice: 2500,
  },
  {
    label: "Comprehensive Platinum Full Body Checkup",
    originalPrice: 4500,
    discountedPrice: 3000,
  },
  {
    label: "Good Health Platinum Package",
    originalPrice: 4500,
    discountedPrice: 3000,
  },
  {
    label: "Senior Citizen Advanced Package",
    originalPrice: 3000,
    discountedPrice: 2000,
  },
  {
    label: "Men Health Premium Package",
    originalPrice: 3750,
    discountedPrice: 2500,
  },
  {
    label: "Fever Package Extensive",
    originalPrice: 1500,
    discountedPrice: 1000,
  },
];

export default function HealthCheckupCategory() {
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
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setStartIndex((prevIndex) =>
      prevIndex === categories.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleCategories = () => {
    const endIndex = startIndex + visibleCount;
    if (endIndex > categories.length) {
      return [
        ...categories.slice(startIndex),
        ...categories.slice(0, endIndex - categories.length),
      ];
    }
    return categories.slice(startIndex, endIndex);
  };

  const visibleCategories = getVisibleCategories();

  return (
    <VStack my={12} width="100%" justify="center" align="center">
      <HStack justify="space-between" width="75%">
        <Text fontSize="xl">Full Body Health Checkups</Text>
        <Button color="white" bg="#FF6F61" size="sm">
          SEE ALL
        </Button>
      </HStack>
      <VStack width="100%" boxShadow="2xl" bg="#ffffff" p={4} borderRadius="md">
        <Box my={6} width="75%" position="relative">
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
            spacing={4}
            width="100%"
            justify="space-evenly"
            align="center"
          >
            {visibleCategories.map((category, index) => (
              <VStack
                key={index}
                border="1px solid"
                borderColor="gray.200"
                borderRadius="md"
                overflow="hidden"
                boxShadow="md"
                transition="transform 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "2xl",
                }}
              >
                <VStack spacing={4} p={4}>
                  {/* Upper part */}
                  <HStack justify="space-between" width="100%">
                    <Box width="200px">
                      <Text fontWeight="bold" fontSize="md" noOfLines={1}>
                        {category.label}
                      </Text>
                    </Box>
                    <Badge
                      variant="subtle"
                      bg="#FFE3C2"
                      p={1}
                      display="flex"
                      alignItems="center"
                    >
                      <Image
                        boxSize="15px"
                        objectFit="cover"
                        src="https://onemg.gumlet.io/safe_bjisiz.svg"
                        alt="shield-image"
                        mr={1}
                      />
                      <Text fontSize="xs">SAFE</Text>
                    </Badge>
                  </HStack>
                  {/* Lower part */}
                  <HStack justify="flex-start" width="100%">
                    <Text fontSize="sm">₹{category.discountedPrice}</Text>
                    <Text textDecoration="line-through" fontSize="xs">
                      ₹{category.originalPrice}
                    </Text>
                    <Box p={1} color="#42BA50" border="dashed 1px #42BA50">
                      <Text fontWeight="bold" fontSize="xs">
                        50% Off
                      </Text>
                    </Box>
                  </HStack>
                </VStack>
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
