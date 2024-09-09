// components/Navbar.js
import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  Badge,
  IconButton,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import DrawerMenu from './DrawerMenu';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        justify="space-between"
        alignItems="center"
        borderBottom="1px solid #E2E8F0"
        p={2}
        width="100%"
      >
        <Box>
        <Image
            src="https://www.1mg.com/images/tata_1mg_logo.svg"
            alt="tata_1mg_logo"
            width="150px"
          />
        </Box>
        <IconButton
          icon={<HamburgerIcon />}
          display={{ base: 'block', md: 'block', lg: 'none' }}
          onClick={onOpen}
          aria-label="Open Menu"
        />
        <HStack spacing="20px" display={{ base: 'none', md: 'none', lg: 'flex' }}>
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
        </HStack>
        <HStack spacing="24px" display={{ base: 'none', md: 'none', lg: 'flex' }}>
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
              boxSize="20px"
              objectFit="cover"
              src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/cart-256.png"
              alt="cart"
            />
          </Box>
          <Box>
            <Text fontSize="14px">Need Help?</Text>
          </Box>
        </HStack>
      </Flex>

      <DrawerMenu isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Navbar;
