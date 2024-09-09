import React from "react";
import { Box, Container, VStack, HStack, Image, Text, useColorModeValue } from "@chakra-ui/react";

const CertificationSection = () => {
  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")} color={useColorModeValue("gray.700", "gray.200")} py={6}>
      <Container as={VStack} maxW={"6xl"} spacing={4}>
        <HStack spacing={24}>
          <Image src="https://static.legitscript.com/seals/729605.png" alt="LegitScript Seal" boxSize="100px" objectFit="contain" />
          <Image src="https://onemg.gumlet.io/URS_ebgmxc.png" alt="URS Seal" boxSize="100px" objectFit="contain" />
        </HStack>
        <Text fontWeight="bold" fontSize="md" textAlign="center">
          India's only LegitScript and ISO/ IEC 27001 certified online healthcare platform
        </Text>
      </Container>
    </Box>
  );
};

export default CertificationSection;
