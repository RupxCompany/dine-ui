// CartDrawer.js
import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  List,
  ListItem,
  ListIcon,
  Button,
  Text,
  VStack,
  Box
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

const CartDrawer = ({ isOpen, onClose, cart }) => {
  const itemQuantityInCart = (item) => cart.filter((k) => k.id === item.id).length;

  const uniqueItemsInCart = () => cart.filter((item, index, array) =>
    index === array.findIndex((t) => t.id === item.id)
  );

  const totalCartValue = uniqueItemsInCart().reduce((total, item) => total + (parseInt(item.price, 10) * itemQuantityInCart(item)), 0);

  const handlePlaceOrder = () => {
    onClose()
  };

  return (
    <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Your Cart</DrawerHeader>
        <DrawerBody>
          <List spacing={3}>
            {uniqueItemsInCart().map((item, index) => (
              <ListItem key={index}>
                <ListIcon as={FaCheckCircle} color="green.500" />
                {item.name} - {itemQuantityInCart(item)} x {item.price}
              </ListItem>
            ))}
          </List>
          <Box mt={4}>
            <Text fontSize="lg" fontWeight="bold">Total: ₹{totalCartValue}</Text>
          </Box>
        </DrawerBody>
        <VStack p={4}>
          <Button bg="#329618" color="white" onClick={handlePlaceOrder} width="full">
            Place Order
          </Button>
        </VStack>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
