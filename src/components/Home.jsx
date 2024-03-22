import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, useDisclosure } from '@chakra-ui/react';
import Header from './Header';
import Categories from './Categories';
import CategoryItems from './CategoryItems';
import ViewCartButton from './ViewCartButton';
import CartDrawer from './CartDrawer';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [restaurantInfo, setRestaurantInfo] = useState({ restaurant: '', room: '' });
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };
  const navigate = useNavigate()

  useEffect(() => {
    document.title = "RupX Dine"
    try {
      const hash = window.location.search.substring(1)
      if (!hash) {
        throw new Error('No hash found in the URL');
      }
      const decoded = JSON.parse(atob(hash));
      console.log(decoded)
      setRestaurantInfo({ restaurant: decoded.restaurant, room: decoded.room });
    } catch {
      navigate('/404')
    }

  }, []);

  return (
    <Box paddingBottom={1} bg="gray.100" minH="100vh">
      <Header
        cartItemCount={cart.length}
        cart={cart}
        showCart={onOpen}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        restaurantInfo={restaurantInfo}
        />
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
