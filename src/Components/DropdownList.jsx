// Importing necessary modules and components
import { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
  HStack,
  Box,
  Grid,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import menuItems from "../assets/categoryListItems"; // Assuming you have a file with menu items

// Functional component for the Navbar
export default function Navbar() {
  // State to manage open/close status for each menu
  const [menuOpenStates, setMenuOpenStates] = useState(
    Array(menuItems.length).fill(false)
  );

  // Function to handle menu item hover
  const handleMenuHover = (index) => {
    const newMenuOpenStates = [...menuOpenStates];
    newMenuOpenStates[index] = true;
    setMenuOpenStates(newMenuOpenStates);
  };

  // Function to handle menu item mouse leave
  const handleMenuLeave = () => {
    setMenuOpenStates(Array(menuItems.length).fill(false));
  };

  return (
    <Box>
      <Flex
        as="nav"
        wrap="wrap"
        justify="space-between"
        align="center"
        padding={6}
        bg={useColorModeValue("white", "gray.800")}
        borderBottom="1px solid"
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <HStack spacing={6} wrap="wrap">
          {menuItems.map((ele, i) => (
            <Menu
              key={i}
              isOpen={menuOpenStates[i]}
              onClose={() => setMenuOpenStates(Array(menuItems.length).fill(false))}
            >
              <MenuButton
                variant="ghost"
                px={4}
                borderRadius={0}
                _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={() => handleMenuHover(i)}
                onMouseLeave={handleMenuLeave}
              >
                {ele.label}{" "}
                {menuOpenStates[i] ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </MenuButton>
              <MenuList
                onMouseEnter={() => handleMenuHover(i)}
                onMouseLeave={handleMenuLeave}
              >
                {ele.options.some(option => option.subOptions === null) ? (
                  <VStack
                    textAlign="left"
                    border="1px solid"
                    borderColor={useColorModeValue("gray.200", "gray.600")}
                    align="start"
                  >
                    {ele.options.map((option, j) => (
                      <Box
                        key={j}
                        borderBottom={j !== ele.options.length - 1 ? "1px solid" : "none"}
                        borderColor={useColorModeValue("gray.200", "gray.600")}
                        py={2}
                        fontSize={{ base: "sm", md: "xs", lg: "sm" }}
                      >
                        <Box fontWeight="bold">{option.heading}</Box>
                        {option.subOptions &&
                          option.subOptions.map((subOption, k) => (
                            <Box key={k} pl={4}>
                              {subOption}
                            </Box>
                          ))}
                      </Box>
                    ))}
                  </VStack>
                ) : (
                  <Grid
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                    gap={4}
                    p={4}
                    textAlign="left"
                    border="1px solid"
                    borderColor={useColorModeValue("gray.200", "gray.600")}
                  >
                    {ele.options.map((option, j) => (
                      <Box
                        key={j}
                        borderRight={{ md: j % 2 !== 1 ? "1px solid" : "none", lg: j % 3 !== 2 ? "1px solid" : "none" }}
                        borderColor={useColorModeValue("gray.200", "gray.600")}
                        py={2}
                        fontSize={{ base: "xs", md: "xs", lg: "xs" }}
                      >
                        <Box fontWeight="bold">{option.heading}</Box>
                        {option.subOptions &&
                          option.subOptions.map((subOption, k) => (
                            <Box key={k} pl={4}>
                              {subOption}
                            </Box>
                          ))}
                      </Box>
                    ))}
                  </Grid>
                )}
              </MenuList>
            </Menu>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}
