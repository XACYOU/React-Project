import React from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  useColorModeValue,
  Image,
  HStack,
} from "@chakra-ui/react";
import google from "../assets/download-store-image/google.png";
import apple from "../assets/download-store-image/apple.png";
import FooterFeature from "./FooterFeature";
import CertificationSection from "./CertificationSection";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"sm"} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  return (
    <Box>
      <Container borderBottom="2px solid" borderColor="gray.200" as={Stack} maxW={"8xl"} py={6}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={6}>
          <Stack align={"flex-start"}>
            <ListHeader>Know Us</ListHeader>
            <Text fontSize={"xs"}>About Us</Text>
            <Text fontSize={"xs"}>Contact Us</Text>
            <Text fontSize={"xs"}>Press Coverage</Text>
            <Text fontSize={"xs"}>Careers</Text>
            <Text fontSize={"xs"}>Business Partnership</Text>
            <Text fontSize={"xs"}>Become a Health Partner</Text>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Our Policies</ListHeader>
            <Text fontSize={"xs"}>Privacy Policy</Text>
            <Text fontSize={"xs"}>Terms and Conditions</Text>
            <Text fontSize={"xs"}>Editorial Policy</Text>
            <Text fontSize={"xs"}>Return Policy</Text>
            <Text fontSize={"xs"}>IP Policy</Text>
            <Text fontSize={"xs"}>Grievance Redressal Policy</Text>
            <Text fontSize={"xs"}>Fake Jobs and Fraud Disclaimer</Text>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Our Services</ListHeader>
            <Text fontSize={"xs"}>Order Medicines</Text>
            <Text fontSize={"xs"}>Book Lab Tests</Text>
            <Text fontSize={"xs"}>Consult a Doctor</Text>
            <Text fontSize={"xs"}>Ayurveda Articles</Text>
            <Text fontSize={"xs"}>Hindi Articles</Text>
            <Text fontSize={"xs"}>Corporate Governance</Text>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Download App</ListHeader>
            <Image
              src={google}
              alt="Google Play"
              width="150px"
            />
            <Image
              src={apple}
              alt="App Store"
              width="150px"
              height="auto"
            />
          </Stack>
        </SimpleGrid>
      </Container>

      <FooterFeature />
      <CertificationSection />
      
      <Box
        borderStyle={"solid"}
        borderTop="1px solid"
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <HStack
          width="100%"
          p={4}
          mb={0}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text color="gray.400" fontWeight="bold" fontSize="xs">
            © 2024 Tata 1mg. All rights reserved. All medicines are dispensed in
            compliance with the Drugs and Cosmetics Act, 1940 and Drugs and
            Cosmetics Rules, 1945. We do not process requests for Schedule X and
            habit forming drugs.
          </Text>
        </HStack>
      </Box>
    </Box>
  );
};

export default Footer;
