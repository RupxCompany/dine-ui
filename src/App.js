// App.js
import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import Categories from './components/Categories'; // Import the Categories component
import CategoryItems from './components/CategoryItems'; // Import the component

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [cartItemCount, setCartItemCount] = useState(0)

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    // Logic to fetch/display the food items related to the selected category
    console.log(`Selected category: ${category}`);
  };

  const updateCartItemCount = (count) => {
    setCartItemCount(count);
  };

  return (
    <Box paddingBottom={1} bg="gray.100" minH="100vh">
      <Header cartItemCount={cartItemCount}  />
      <Categories onSelectCategory={handleSelectCategory} selectedCategory={selectedCategory} />
      <CategoryItems category={selectedCategory} updateCartItemCount={updateCartItemCount} />
    </Box>
  );
}

export default App;
