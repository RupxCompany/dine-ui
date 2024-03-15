// App.js
import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import Categories from './components/Categories'; // Import the Categories component
import CategoryItems from './components/CategoryItems'; // Import the component
import ViewCartButton from './components/ViewCartButton'

const handleViewCart = () => {
  // Logic to view the cart
  console.log('Viewing cart');
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [cart, setCart] = useState([])

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Box paddingBottom={1} bg="gray.100" minH="100vh">
      <Header cartItemCount={cart.length}  />
      <Categories onSelectCategory={handleSelectCategory} selectedCategory={selectedCategory} />
      <CategoryItems category={selectedCategory} cart={cart} setCart={setCart} />
      {cart.length > 0 && <ViewCartButton onClick={handleViewCart} itemCount={cart.length} />}
    </Box>
  );
}

export default App;
