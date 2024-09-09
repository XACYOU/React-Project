// components/DrawerMenu.js
import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  HStack,
  Text,
  Badge,
  Box,
  Image,
} from "@chakra-ui/react";

const DrawerMenu = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton mt="10px" />
        <DrawerHeader>
          <Image
            src="https://www.1mg.com/images/tata_1mg_logo.svg"
            alt="tata_1mg_logo"
            width="150px"
          />
        </DrawerHeader>
        <DrawerBody>
          <VStack spacing="24px">
            <HStack>
              <Text fontSize="20px" as="b" color="#FF6F61">
                MEDICINES
              </Text>
            </HStack>
            <HStack>
              <Text fontSize="20px" as="b">
                LAB TESTS
              </Text>
              <Badge className="pulse-badge" variant="solid" bg="#FF6F61">
                <Text fontSize="10px">SAFE</Text>
              </Badge>
            </HStack>
            <HStack>
              <Text fontSize="20px" as="b">
                CONSULT DOCTORS
              </Text>
            </HStack>
            <HStack>
              <Text fontSize="20px" as="b">
                CANCER CARE
              </Text>
            </HStack>
            <HStack>
              <Text fontSize="20px" as="b">
                PARTNERSHIPS
              </Text>
              <Badge className="pulse-badge" variant="solid" bg="#FF6F61">
                <Text fontSize="10px">NEW</Text>
              </Badge>
            </HStack>
            <HStack>
              <Text fontSize="20px" as="b">
                CARE PLAN
              </Text>
              <Badge className="pulse-badge" variant="solid" bg="#FF6F61">
                <Text fontSize="10px">SAVE MORE</Text>
              </Badge>
            </HStack>
            <HStack spacing="8px">
              <Text fontSize="14px">Login</Text>
              <Text fontSize="14px">|</Text>
              <Text fontSize="14px">Sign Up</Text>
            </HStack>
            <Box>
              <Text fontSize="14px">Offers</Text>
            </Box>
            <Box>
              <Image
                boxSize="30px"
                objectFit="cover"
                src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/cart-256.png"
                alt="cart"
              />
            </Box>
            <Box>
              <Text fontSize="14px">Need Help?</Text>
            </Box>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerMenu;
