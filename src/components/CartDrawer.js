import React, {useEffect} from 'react'
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
import {FaCheckCircle} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import {trackOrderPlaced, trackViewCart} from '../utils/mixpanel'

const CartDrawer = ({isOpen, onClose, cart, setCart, ctaPhone, restaurantInfo, qrCode}) => {
  const itemQuantityInCart = (item) => cart.filter((k) => k.id === item.id).length

  const uniqueItemsInCart = () => cart.filter((item, index, array) =>
    index === array.findIndex((t) => t.id === item.id),
  )

  const totalCartValue = uniqueItemsInCart().reduce((total, item) => total +
  (parseInt(item.price, 10) * itemQuantityInCart(item)), 0)

  const trackCartProperties = {
    total_cart_value: totalCartValue,
    items_in_cart: cart.map((i) => i.name),
    cart,
    qr_code: qrCode,
    ...restaurantInfo,
  }

  useEffect(() => {
    trackViewCart(trackCartProperties)
  }, [])

  const handlePlaceOrder = () => {
    const separator = `${'—'.repeat(15)}`
    let message = `I would like to place an order\n\n`
    // message += `${Math.random().toString(36).slice(2, 8).toUpperCase()}\n\n`
    message += `From: ${restaurantInfo.space}\n\n`
    message += 'Items:\n'
    uniqueItemsInCart().forEach((item) => {
      // eslint-disable-next-line max-len
      message += `${item.name} - x ${itemQuantityInCart(item)} = ₹${item.price * itemQuantityInCart(item)}\n`
    })
    message += `\n${separator}\n`
    message += `Total: ₹${totalCartValue}\n`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${ctaPhone}&text=${encodedMessage}`

    trackOrderPlaced(trackCartProperties)

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
