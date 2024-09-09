// ProductListing.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, SimpleGrid, Image, Text, Button } from '@chakra-ui/react';

const products = [
  { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/150', price: '$100' },
  { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/150', price: '$200' },
  // Add more products here
];

const ProductListing = () => {
  return (
    <Box p={5}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {products.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <Box p={6}>
              <Text fontSize="xl" fontWeight="bold">{product.name}</Text>
              <Text mt={2}>{product.price}</Text>
              <Link to={`/products/${product.id}`}>
                <Button mt={4} colorScheme="teal">View Details</Button>
              </Link>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductListing;
