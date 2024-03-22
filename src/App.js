import React, { useState, useEffect } from 'react';
import { Box, useDisclosure } from '@chakra-ui/react';
import Header from './components/Header';
import Categories from './components/Categories';
import CategoryItems from './components/CategoryItems';
import ViewCartButton from './components/ViewCartButton';
import CartDrawer from './components/CartDrawer';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    document.title = "RupX Dine";
  }, []);

  return (
    <Box paddingBottom={1} bg="gray.100" minH="100vh">
      <Header
        cartItemCount={cart.length}
        cart={cart}
        showCart={onOpen}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery} />
      <Categories
        onSelectCategory={handleSelectCategory}
        selectedCategory={selectedCategory} />
      <CategoryItems
        category={selectedCategory}
        cart={cart}
        setCart={setCart}
        searchQuery={searchQuery}/>
      {cart.length > 0 &&
       <ViewCartButton
        onClick={onOpen}
        itemCount={cart.length}
       />}
      <CartDrawer
        isOpen={isOpen}
        onClose={onClose}
        cart={cart}
        setCart={setCart} />
    </Box>
  );
}

export default App;
