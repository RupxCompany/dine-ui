import React from 'react'
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
  Box,
  Icon,
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa' // Importing the WhatsApp icon


const CartDrawer = ({ isOpen, onClose, cart, setCart, ctaPhone }) => {
  const itemQuantityInCart = (item) => cart.filter((k) => k.id === item.id).length

  const uniqueItemsInCart = () => cart.filter((item, index, array) =>
    index === array.findIndex((t) => t.id === item.id)
  )

  const totalCartValue = uniqueItemsInCart().reduce((total, item) => total + (parseInt(item.price, 10) * itemQuantityInCart(item)), 0)

  const handlePlaceOrder = () => {
    let message = "I would like to place an order:\n"
    uniqueItemsInCart().forEach(item => {
      message += `${item.name} - Quantity: ${itemQuantityInCart(item)} - Price: ₹${item.price * itemQuantityInCart(item)}\n`
    })
    message += `Total: ₹${totalCartValue}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${ctaPhone}&text=${encodedMessage}`

    setCart([])
    window.open(whatsappUrl, '_blank') // Open WhatsApp in a new tab/window
    onClose()
  }


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
        <Button
            leftIcon={<Icon as={FaWhatsapp} />}
            bg="#329618"
            color="white"
            onClick={handlePlaceOrder}
            width="full"
          >
            Place Order
          </Button>
        </VStack>
      </DrawerContent>
    </Drawer>
  )
}

export default CartDrawer
