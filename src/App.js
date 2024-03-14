// App.js
import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import Categories from './components/Categories'; // Import the Categories component

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    // Logic to fetch/display the food items related to the selected category
    console.log(`Selected category: ${category}`);
  };

  return (
    <Box paddingBottom={1} bg="gray.100" minH="100vh">
      <Header />
      <Categories onSelectCategory={handleSelectCategory} selectedCategory={selectedCategory} />
      {/* Render the food items based on the selected category */}
    </Box>
  );
}

export default App;
