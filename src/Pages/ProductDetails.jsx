// ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Text, Button } from '@chakra-ui/react';

const products = [
  { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/150', price: '$100', description: 'Description of Product 1' },
  { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/150', price: '$200', description: 'Description of Product 2' },
  // Add more products here
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Box p={5}>
      <Image src={product.image} alt={product.name} boxSize="300px" />
      <Box mt={5}>
        <Text fontSize="2xl" fontWeight="bold">{product.name}</Text>
        <Text mt={2}>{product.price}</Text>
        <Text mt={2}>{product.description}</Text>
        <Button mt={4} colorScheme="teal">Add to Cart</Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
