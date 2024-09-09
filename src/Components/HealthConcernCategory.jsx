import React, { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Image,
  Text,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const categories = [
  {
    image:
      "https://onemg.gumlet.io/a56b26a0-30f1-4977-96f8-7acf1b3e0e02.png?format=auto",
    label: "Diabetes",
  },
  {
    image:
      "https://onemg.gumlet.io/629aaf65-515f-4069-b730-28618f78597b.png?format=auto",
    label: "Heart Care",
  },
  {
    image:
      "https://onemg.gumlet.io/b251c9cf-8d88-4fb8-8c3c-7b328caa9f70.png?format=auto",
    label: "Stomach Care",
  },
  {
    image:
      "https://onemg.gumlet.io/573d8a1a-edd0-46a5-a0fe-01a1c2bcc8f2.png?format=auto",
    label: "Liver Care",
  },
  {
    image:
      "https://onemg.gumlet.io/a1af8b43-2836-483d-8709-99eff1cc6f70.png?format=auto",
    label: "Bone, Joint & Muscle Care",
  },
  {
    image:
      "https://onemg.gumlet.io/96f9ed8a-ba62-426c-bd66-6762f40f3370.png?format=auto",
    label: "Kidney Care",
  },
  {
    image:
      "https://onemg.gumlet.io/730dbe50-4bdc-4fa8-9a09-93bc5d6c6f38.png?format=auto",
    label: "Derma Care",
  },
  {
    image:
      "https://onemg.gumlet.io/8051e79c-6152-440e-b402-8d1ba8d7c82e.png?format=auto",
    label: "Respiratory Care",
  },
  {
    image:
      "https://onemg.gumlet.io/1627c0d3-a6ed-470a-8b18-94baa9fdbcfc.png?format=auto",
    label: "Eye Care",
  },
];

const HealthConcernCategory = () => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = useBreakpointValue({ base: 3, sm: 3, md: 4, lg: 6 });

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
    <VStack my={6} width="100%" justify="center" align="center">
      <HStack my={2} width="75%">
        <Text fontSize="xl">Shop by health concerns</Text>
      </HStack>
      <VStack width="100%" boxShadow="2xl" bg="#ffffff">
        <Box position="relative" >
          <IconButton
            icon={<ChevronLeftIcon boxSize={8} />}
            onClick={handlePrevClick}
            position="absolute"
            left="50px"
            top="50%"
            transform="translateY(-50%)"
            zIndex="1"
            color="#FF6F61"
            transition="transform 0.3s ease-in-out"
          />

          <HStack
            my={2}
            spacing={4}
            justify="center"
            width="100%"
            align="center"
          >
            {visibleCategories.map((category, index) => (
              <VStack
                py={6}
                px={3}
                _hover={{
                  boxShadow: "2xl",
                }}
                key={index}
                style={{ transition: "opacity 0.3s ease-in-out" }} // Added smooth transition
              >
                <Image
                  src={category.image}
                  alt={category.label}
                  boxSize="150px"
                  objectFit="contain"
                  style={{ transition: "opacity 0.3s ease-in-out" }} // Added smooth transition
                />
                <Text width="80%" textAlign="center" fontSize="sm">
                  {category.label}
                </Text>
              </VStack>
            ))}
          </HStack>
          <IconButton
            icon={<ChevronRightIcon boxSize={8} />}
            onClick={handleNextClick}
            position="absolute"
            right="50px"
            top="50%"
            transform="translateY(-50%)"
            zIndex="1"
            color="#FF6F61"
            transition="transform 0.3s ease-in-out"
          />
        </Box>
      </VStack>
    </VStack>
  );
};

export default HealthConcernCategory;
