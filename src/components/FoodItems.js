// FoodItems.js
import React from 'react';
import { Box, VStack, Text, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react';

const FoodItems = ({ category }) => {
  // Dummy data for food items
  const foodItems = {
    Breakfast: [{ name: "Pancakes", price: "$5" }, { name: "Omelette", price: "$4" }],
    Lunch: [{ name: "Burger", price: "$8" }, { name: "Salad", price: "$6" }],
    Dinner: [{ name: "Steak", price: "$12" }, { name: "Pasta", price: "$9" }],
  };

  return (
    <VStack spacing={4} mt={4}>
      {foodItems[category]?.map((item, index) => (
        <Box key={index} boxShadow="md" borderRadius="md" bg="white" p={4} width="sm">
          <Text fontSize="lg" fontWeight="bold">{item.name}</Text>
          <Text fontSize="md">{item.price}</Text>
          <NumberInput min={1} max={20} defaultValue={1}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Box>
      ))}
    </VStack>
  );
};

export default FoodItems;
