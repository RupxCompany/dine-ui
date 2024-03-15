import React, { useState } from 'react';
import { Box, useDisclosure } from '@chakra-ui/react';
import Header from './components/Header';
import Categories from './components/Categories';
import CategoryItems from './components/CategoryItems';
import ViewCartButton from './components/ViewCartButton';
import CartDrawer from './components/CartDrawer';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Box paddingBottom={1} bg="gray.100" minH="100vh">
      <Header cartItemCount={cart.length} cart={cart} showCart={onOpen} />
      <Categories onSelectCategory={handleSelectCategory} selectedCategory={selectedCategory} />
      <CategoryItems category={selectedCategory} cart={cart} setCart={setCart} />
      {cart.length > 0 && <ViewCartButton onClick={onOpen} itemCount={cart.length} />}
      <CartDrawer isOpen={isOpen} onClose={onClose} cart={cart} />
    </Box>
  );
}

export default App;
