import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  HStack,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";

const features = [
  {
    image: "https://onemg.gumlet.io/reliable-rebrand_rcpof3.svg",
    title: "Reliable",
    description:
      "All products displayed on Tata 1mg are procured from verified and licensed pharmacies. All labs listed on the platform are accredited.",
  },
  {
    image: "https://onemg.gumlet.io/secure-rebrand_x6f8yq.svg",
    title: "Secure",
    description:
      "We ensure that your data is protected and transactions are secure, providing you with a worry-free experience.",
  },
  {
    image: "https://onemg.gumlet.io/affordable-rebrand_ivgidq.svg",
    title: "Affordable",
    description:
      "We offer the best prices on medicines and healthcare products, making sure that you get value for your money.",
  },
];

const FooterFeature = () => {
  return (
    <Box>
      <Box
        margin="auto"
        width="80%"
        borderBottom="1px solid"
        borderColor="gray.200"
        as={Stack}
        py={6}
      >
        <HStack>
          {features.map((feature, index) => (
            <HStack width="50%" key={index} align="center" justify="center">
              <Box>
                <Image src={feature.image} alt={feature.title} width="100px" />
              </Box>
              <VStack width="70%"  align="flex-start" spacing={2}>
                <Text fontSize="2xl" fontWeight="bold">
                  {feature.title}
                </Text>
                <Text color="gray.500" fontSize="xs">{feature.description}</Text>
              </VStack>
            </HStack>
          ))}
        </HStack>
      </Box>
    </Box>
  );
};

export default FooterFeature;
