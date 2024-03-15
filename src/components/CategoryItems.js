import React, { useState } from 'react';
import { Box, Button, VStack, HStack, SimpleGrid, Text, Image } from '@chakra-ui/react';

const CategoryItems = ({ category }) => {
  const items = categoryItems[category] || [];
  const [quantities, setQuantities] = useState(items.map(() => 0)); // Initialize all quantities to 0

  const handleQuantityChange = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = value; // Directly set the new value
    setQuantities(newQuantities);
  };

  const handleAddClick = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] = 1; // Set the quantity to 1 when "ADD" is clicked
    setQuantities(newQuantities);
  };

  return (
    <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={5} p={5}>
      {items.map((item, index) => (
        <Box key={index} p={5} boxShadow="sm" borderRadius="lg" bg="white">
          <HStack spacing={3}>
            <Image boxSize="100px" objectFit="cover" src="https://via.placeholder.com/100" alt={item.name} />
            <VStack spacing={1} align="start">
              <Text fontWeight="bold">{item.name}</Text>
              <Text fontSize="sm">{item.description}</Text>
              <Text fontSize="lg" color="#5ed141">{item.price}</Text>
              <HStack>
                {quantities[index] > 0 ? (
                  <>
                    <Button size="sm" onClick={() => handleQuantityChange(index, quantities[index] - 1)}>-</Button>
                    <Text>{quantities[index]}</Text>
                    <Button size="sm" onClick={() => handleQuantityChange(index, quantities[index] + 1)}>+</Button>
                  </>
                ) : (
                  <Button size="sm" onClick={() => handleAddClick(index)}>ADD</Button>
                )}
              </HStack>
            </VStack>
          </HStack>
        </Box>
      ))}
    </SimpleGrid>
  );
};


const categoryItems = {
  All: [
    { name: "Pancake", description: "Fluffy pancakes with syrup", price: "₹5" },
    { name: "Burger", description: "Juicy beef burger with cheese", price: "₹10" },
    { name: "Pasta", description: "Italian pasta with a rich tomato sauce", price: "₹8" },
    // Add more items
  ],
  Breakfast: [
    { name: "Omelette", description: "Cheese omelette with vegetables", price: "₹7" },
    { name: "Toast", description: "Buttered toast with jam", price: "₹3" },
    // Add more items
  ],
  Lunch: [
    { name: "Salad", description: "Fresh garden salad", price: "₹5" },
    { name: "Soup", description: "Creamy mushroom soup", price: "₹6" },
    // Add more items
  ],
  // Define items for Dinner, Drinks, Snacks, Desserts, Specials...
};

export default CategoryItems;