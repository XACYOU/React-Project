import React, { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Image,
  Text,
  IconButton,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const menuItems = [
  {
    label: "Swisse Beauty Vegan Collagen Builder",
    src: "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/mp9qoget2jwnf7u6tjj9.jpg",
    deliveryDate: "Tue, 11 June",
    originalPrice: 2000,
    discount: 25,
    discountedPrice: 1500,
  },
  {
    label: "Power Gummies for Jaw-Dropping Skin with Vitamin C",
    src: "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/3ab53077d4c44f3c9fdbc83d5d3948b0.jpg",
    deliveryDate: "Mon, 15 June",
    originalPrice: 1300,
    discount: 15,
    discountedPrice: 1105,
  },
  {
    label:
      "The Body Temple Marine Collagen Peptides Type 1 for Skin, Joints, Hair, Bones & Nails",
    src: "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cgzh629olyrrv6mlc4zy.jpg",
    deliveryDate: "Wed, 12 June",
    originalPrice: 2500,
    discount: 30,
    discountedPrice: 1750,
  },
  {
    label: "Nature's Island Hydrolysed Marine Collagen with Vitamin C",
    src: "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/a569ab4a9eb843e9b9890f9965b92027.jpg",
    deliveryDate: "Thu, 13 June",
    originalPrice: 1800,
    discount: 25,
    discountedPrice: 1350,
  },
  {
    label: "Eur Health Plant Based Collagen Builder Mix Fruit",
    src: "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/85d94e897a59427aadf99eed6ba02caa.jpg",
    deliveryDate: "Tomorrow",
    originalPrice: 1600,
    discount: 20,
    discountedPrice: 1280,
  },
  {
    label: "Hair-O-Tin Tablet",
    src: "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/6f6b13b658044bd893e14ff0010809aa.jpg",
    deliveryDate: "Fri, 14 June",
    originalPrice: 1200,
    discount: 15,
    discountedPrice: 1020,
  },
  {
    label: "Healthkart HK Vitals Disolve with Marine Collagen",
    src: "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/6433e3a7dfb649e8ba0d81d8a4d1491c.jpg",
    deliveryDate: "Tomorrow",
    originalPrice: 1800,
    discount: 20,
    discountedPrice: 1440,
  },
  {
    label: "Swisse Collagen + Hyaluronic Acid",
    src: "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/e6abfe99bf324feea25a46f383cca8b4.jpg",
    deliveryDate: "Today",
    originalPrice: 2200,
    discount: 20,
    discountedPrice: 1760,
  },
  {
    label:
      "Inlife Japanese Collagen Peptide Powder With Type 1 & 3 for Women & Men Blueberry",
    src: "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/5030a73827d24bdd81ceab6f5eb0f137.jpg",
    deliveryDate: "Sat, 15 June",
    originalPrice: 2100,
    discount: 25,
    discountedPrice: 1575,
  },
  {
    label: "VedaneQ Collagen Capsule",
    src: "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/jqjwbayqlojmiyfz2h8a.jpg",
    deliveryDate: "Today",
    originalPrice: 1700,
    discount: 20,
    discountedPrice: 1360,
  },
];

export default function CollagenSupplement() {
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
      prevIndex === 0 ? menuItems.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setStartIndex((prevIndex) =>
      prevIndex === menuItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleItems = () => {
    const endIndex = startIndex + visibleCount;
    if (endIndex > menuItems.length) {
      return [
        ...menuItems.slice(startIndex),
        ...menuItems.slice(0, endIndex - menuItems.length),
      ];
    }
    return menuItems.slice(startIndex, endIndex);
  };

  const visibleItems = getVisibleItems();

  return (
    <VStack my={12} width="100%" justify="center" align="center">
      <HStack justify="space-between" my={2} width="75%">
        <Text fontSize="xl">Collagen | supplement of the week</Text>
        <Button color="white" bg="#FF6F61" size="sm">
          SEE ALL
        </Button>
      </HStack>
      <VStack width="100%" boxShadow="2xl" bg="#ffffff" p={4} borderRadius="md">
        <Box position="relative">
          <IconButton
            icon={<ChevronLeftIcon boxSize={8} />}
            onClick={handlePrevClick}
            position="absolute"
            left="10px"
            top="45%"
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
            flexWrap="nowrap" // Prevent wrapping to keep a consistent width
          >
            {visibleItems.map((item, index) => (
              <VStack
                key={index}
                py={4}
                height="100%"
                width="250px" // Fixed width for the card
                border="1px solid"
                borderColor="gray.200"
                borderRadius="md"
                overflow="hidden"
                boxShadow="md"
                textAlign="left"
                transition="transform 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "2xl",
                }}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  //   width="100%" // Set image width to 100% of its container
                  height="150px" // Set a fixed height for the image
                />
                <VStack
                  spacing={2}
                  p={4}
                  height="100%" // Ensure VStack fills the height of the card
                  justify="space-between" // Distribute space evenly
                >
                  <Text
                    width="100%"
                    fontWeight="bold"
                    fontSize="md"
                    noOfLines={2}
                  >
                    {item.label}
                  </Text>
                  <HStack width="100%" fontSize="sm" color="gray.600">
                    <Text> Delivery by </Text>
                    <Text fontWeight="bold">{item.deliveryDate}</Text>
                  </HStack>
                  <HStack justify="flex-start" width="100%">
                    <Text textDecoration="line-through" fontSize="xs">
                      MRP ₹{item.originalPrice}
                    </Text>
                    <Text color="#42BA50" fontWeight="bold" fontSize="xs">
                      {item.discount}% Off
                    </Text>
                  </HStack>
                  <Text fontWeight="bold" fontSize="sm" width="100%">
                    ₹{item.discountedPrice}
                  </Text>
                </VStack>
              </VStack>
            ))}
          </HStack>
          <IconButton
            icon={<ChevronRightIcon boxSize={8} />}
            onClick={handleNextClick}
            position="absolute"
            right="10px"
            top="45%"
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
