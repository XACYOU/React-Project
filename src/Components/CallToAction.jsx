import React from "react";
import { Box, HStack, Text, Input, Button, VStack } from "@chakra-ui/react";

export default function CallToAction() {
  return (
    <Box borderBottom="2px solid" width="100%" p={6} borderColor="gray.200" m="auto">
      <HStack
        spacing={4}
        width={{ base: "90%", md: "70%", lg: "50%" }}
        m="auto"
        justify="center"
        align="center"
      >
        <Text fontSize={{ base: "md", md: "lg", lg: "xl" }}>
          Get the link to download App
        </Text>
        <Input
          placeholder="Enter Phone No."
          variant="outline"
          size="sm"
          width="30%"
          bg="gray.100"
        />
        <Button bg="#FF6F61" color="white" size="lg">
          <Text fontSize="sm" fontWeight="bold">
            Send Link
          </Text>
        </Button>
      </HStack>
    </Box>
  );
}
