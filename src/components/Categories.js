// Categories.js
import React from 'react';
import { HStack, Button } from '@chakra-ui/react';

const Categories = ({ onSelectCategory, selectedCategory }) => {
  const categories = ['Breakfast', 'Lunch', 'Dinner'];

  // Function to shuffle the categories array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };

  // Shuffle the categories and pick the first three
  const visibleCategories = shuffleArray([...categories]).slice(0, 3);

  return (
    <HStack spacing={4} justifyContent="center" p={4}>
      {categories.map((category) => (
        <Button 
          key={category} 
          onClick={() => onSelectCategory(category)}
          borderRadius="20px"
          backgroundColor={selectedCategory === category ? "#5ed141" : "white"}
          color={selectedCategory === category ? "white" : "black"}
          _hover={{
            bg: selectedCategory === category ? "#5ed141" : "gray.200",
          }}
        >
          {category}
        </Button>
      ))}
    </HStack>
  );
};

export default Categories;
