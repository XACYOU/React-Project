// components/SearchBar.js
import React from "react";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  useColorModeValue,
  HStack,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = () => {
  return (
    <Flex
      justify={{ base: "center", md: "center", lg: "space-between" }}
      alignItems="center"
      p={2}
      px={{ base: 4, md: 8, lg: 24 }}
      borderBottom="1px solid #E2E8F0"
      direction={{ base: "column", md: "row" }}
      width="100%"
    >
      <Box
        bg={useColorModeValue("gray.200", "gray.700")}
        flex={{ base: "1", md: "1", lg: "1" }}
        mr={{ base: 0, md: 0, lg: 24 }}
      >
        <InputGroup size="lg">
          <Input placeholder="Search for Medicines and Health Products" />
          <InputRightElement
            children={<SearchIcon w={6} h={6} color="gray.500" />}
          />
        </InputGroup>
      </Box>
      <HStack mt={{ base: 4, md: 0 }} display={{ base: "none", lg: "flex" }}>
        <Text fontSize="15px">⚡QUICK BUY! Get 15% off on medicines*</Text>
        <Button color="white" bg="#FF6F61" size="lg">
          Quick Order
        </Button>
      </HStack>
    </Flex>
  );
};

export default SearchBar;
