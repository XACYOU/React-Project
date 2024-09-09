import React from "react";
import { Box, Text, VStack, Flex, Center } from "@chakra-ui/react";

export default function FeatureSection() {
  return (
    <Box width="100%" bg="white" mt={6}>
      <VStack align="center">
        <Text fontSize="2xl">
          INDIA’S LARGEST HEALTHCARE PLATFORM
        </Text>
        <Flex borderBottom="2px solid" borderColor="gray.200" width="80%" justify="center">
          <Center
            width={{ base: "90%", md: "30%" }}
            p={6}
            textAlign="center"
            flexDirection="column"
            justify="center"
          >
            <Text fontSize="3xl" fontWeight="bold">
              260m+
            </Text>
            <Text fontSize="md">
              Visitors
            </Text>
          </Center>
          <Center
            width={{ base: "90%", md: "30%" }}
            p={6}
            textAlign="center"
            flexDirection="column"
            justify="center"
          >
            <Text fontSize="3xl" fontWeight="bold">
              31m+
            </Text>
            <Text fontSize="md">
              Orders Delieverd
            </Text>
          </Center>
          <Center
            width={{ base: "90%", md: "30%" }}
            p={6}
            textAlign="center"
            flexDirection="column"
            justify="center"
          >
            <Text fontSize="3xl" fontWeight="bold">
              1800+
            </Text>
            <Text fontSize="md">
              Cities
            </Text>
          </Center>
        </Flex>
      </VStack>
    </Box>
  );
}
