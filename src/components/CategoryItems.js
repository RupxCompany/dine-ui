import React, { useState } from 'react'
import { Box, Button, VStack, SimpleGrid, Text, Image, Center, Icon } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'


const CategoryItems = ({ category, cart, setCart }) => {
  const items = categoryItems[category] || []
  const [quantities, setQuantities] = useState(items.map(() => 0))

  const handleQuantityChange = (item, value) => {
    const newQuantities = [...quantities]
    setQuantities(newQuantities)
    if (itemQuantityInCart(item) < value){
      setCart([...cart, item])
    }
    else {
      const index = cart.findIndex((i) => i.id === item.id)
      const newCart = [...cart]
      newCart.splice(index, 1)
      setCart(newCart)
    }
  }

  const handleAddClick = (item, index) => {
    const newQuantities = [...quantities]
    newQuantities[index] = 1
    setQuantities(newQuantities)
    setCart([...cart, item])
  }

  const itemQuantityInCart = (item) => cart.filter((k) => k.id === item.id).length

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} p={5}>
      {items.map((item, index) => (
        <Box key={index} p={5} boxShadow="sm" borderRadius="lg" bg="white" display="flex" flexDirection="row-reverse">
          <Box position="relative" boxSize="100px" alignSelf="center">
            {item.image_path?
            <Image src={item.image_path} alt={item.name} objectFit="cover" borderRadius="md" />
              :
            <Image src="logo.png" alt={item.name} objectFit="cover" borderRadius="md" />
            }
            <Center position="absolute" bottom="-10px" left="0" right="0">
              {itemQuantityInCart(item) > 0 ? (
                <Box bg="#5ed141" borderRadius="lg" display="inline-flex">
                  <Button size="xs" color="white" variant="unstyled" onClick={() => handleQuantityChange(item, itemQuantityInCart(item) - 1)}>-</Button>
                  <Text px={2} color="white" alignSelf="center">{itemQuantityInCart(item)}</Text>
                  <Button size="xs" color="white" variant="unstyled" onClick={() => handleQuantityChange(item, itemQuantityInCart(item) + 1)}>+</Button>
                </Box>
              ) : (
                <Button
                size="sm"
                borderColor="#5ed141"
                borderWidth="1px"
                color="#5ed141"
                fontWeight="600"
                position="relative"
                _focus={{ bg: "white", borderColor: "#5ed141", color: '#5ed141' }}
                onClick={() => handleAddClick(item, index)}
              >
                ADD
                <Icon as={AddIcon} position="absolute" top="1" right="1" w={1.5} h={1.5} />
              </Button>
              )}
            </Center>
          </Box>
          <VStack spacing={1} align="start" flex="1" justifyContent="center">
            <Text fontWeight="bold">{item.name}</Text>
            <Text fontSize="sm">{item.description}</Text>
            <Text fontSize="lg" color="#5ed141">{item.price}</Text>
          </VStack>
        </Box>
      ))}
    </SimpleGrid>
  )
}

export default CategoryItems


const categoryItems = {
  All: [
    { id: 1, name: "Vanilla Shake", description: "Creamy vanilla-flavored milkshake", price: "₹70", image_path: "valina_shake.webp" },
    { id: 2, name: "Chocolate Shake", description: "Rich chocolate milkshake", price: "₹70", image_path: 'chocolate_shake.webp' },
    { id: 3, name: "Fresh Fruit Juice", description: "Juice made from fresh fruits", price: "₹80", image_path:'fruit_juice.webp' },
    { id: 4, name: "Oreo Shake", description: "Milkshake blended with Oreo cookies", price: "₹80", image_path: 'oreo_shake.webp' },
    { id: 5, name: "Fruit Bowl", description: "Assorted fresh fruits", price: "₹80", image_path: 'fruit_bowl.webp' },
    { id: 6, name: "Fresh Lime Soda", description: "Refreshing lime-flavored soda", price: "₹70", image_path: 'lime.webp' },
    { id: 7, name: "Aloo Paratha (1 Pcs)", description: "Delicious Indian flatbread stuffed with spiced potatoes", price: "₹70", image_path: 'paratha.webp' },
    { id: 8, name: "Onion Paratha (1 Pcs)", description: "Savory flatbread filled with a spicy onion mixture", price: "₹70", image_path: 'dosa.webp' },
    { id: 9, name: "Gobhi Paratha (1 Pcs)", description: "Flavorful flatbread stuffed with spiced cauliflower", price: "₹70", image_path: 'gobi_paratha.webp' },
    { id: 10, name: "Tea", description: "Refreshing and aromatic Indian tea", price: "₹30", image_path: 'milk_tea.webp' },
    { id: 11, name: "Tea (Ginger+Cardemon)", description: "Indian tea flavored with ginger and cardamom", price: "₹40", image_path: 'ginger_tea.webp' },
    { id: 12, name: "Coffee", description: "Rich and robust coffee", price: "₹50", image_path: 'coffee.webp' },
    { id: 13, name: "Plain Dosa", description: "Crispy South Indian rice pancake", price: "₹70", image_path: 'plain_dosa.webp' },
    { id: 14, name: "Masala Dosa", description: "Crispy pancake filled with spicy potato filling", price: "₹90", image_path: 'masala_dosa.webp' },
    { id: 15, name: "Upma", description: "Savory South Indian semolina dish", price: "₹70", image_path: 'upma.webp' },
    { id: 16, name: "Poha", description: "Light and fluffy flattened rice breakfast dish", price: "₹70", image_path: 'poha.webp'},
    { id: 17, name: "Bhindi Crunchy", description: "Crispy fried okra seasoned with Indian spices", price: "₹130", image_path: 'bindi.webp' },
    { id: 18, name: "Paneer Butter Masala", description: "Creamy tomato gravy with soft paneer cubes", price: "₹130", image_path: 'paneer_butter_masla.webp' },
    { id: 19, name: "Shahi Paneer", description: "Paneer cubes in a thick, creamy, and spicy sauce", price: "₹140", image_path: 'shahi_paneer.webp' },
    { id: 20, name: "Mix Veg", description: "Assorted vegetables cooked in a flavorful sauce", price: "₹130", image_path: 'mix_veg.webp' },
    { id: 21, name: "Dal Makhni", description: "Creamy and buttery black lentil curry", price: "₹130", image_path:'dal_makhni.webp' },
    { id: 22, name: "Dal Tadka", description: "Yellow lentils tempered with spices and herbs", price: "₹130", image_path: 'dal_tadka.webp' },
    { id: 23, name: "Kadhai Paneer", description: "Paneer cooked with bell peppers in a spicy gravy", price: "₹130", image_path: 'kadhai_paneer.webp' },
    { id: 24, name: "Jeera Rice", description: "Basmati rice flavored with cumin", price: "₹100", image_path: 'jeera_rice.webp' },
    { id: 25, name: "Karela", description: "Bitter gourd dish cooked with Indian spices", price: "₹100", image_path: 'karela.webp' },
    { id: 26, name: "Plain Rice", description: "Steamed plain basmati rice", price: "₹80", image_path: 'plain_rice.webp' },
    { id: 27, name: "Thali (2 Hours Before)", description: "A platter of assorted Indian dishes", price: "₹199", image_path: 'thali.webp' },
    { id: 28, name: "Tawa Roti", description: "Whole wheat flatbread made on a tawa", price: "₹10", image_path: 'tawa_roti.webp' },
    { id: 29, name: "Butter Tawa Roti", description: "Tawa roti topped with butter", price: "₹15", image_path: 'butter_tawa_roti.webp' },
    { id: 30, name: "Onion/ Aloo Pakoda", description: "Fritters made with onion/potato coated in chickpea flour", price: "₹100", image_path: 'onion_pakoda.webp' },
    { id: 31, name: "Chilli Paneer", description: "Paneer cubes stir-fried with bell peppers and Chinese sauces", price: "₹210", image_path: 'chilli_paneer.webp' },
    { id: 32, name: "French Fries", description: "Classic crispy fried potatoes", price: "₹160", image_path: 'french_fries.webp' },
    { id: 33, name: "Chilli Potato", description: "Spicy and tangy stir-fried potatoes", price: "₹190", image_path: 'chilli_potato.webp' },
    { id: 34, name: "Honey Chilli Potato", description: "Potatoes with a sweet and spicy glaze", price: "₹190", image_path: 'honey_chilli_potato.webp' },
    { id: 35, name: "Potato Wedges", description: "Seasoned and baked potato wedges", price: "₹190", image_path: 'potato_wedges.webp' },
    { id: 36, name: "Boondi Raita", description: "Yogurt mixed with tiny fried gram flour balls", price: "₹80", image_path: 'bondi_raita.webp' },

  ],
  Breakfast: [
    { id: 7, name: "Aloo Paratha (1 Pcs)", description: "Delicious Indian flatbread stuffed with spiced potatoes", price: "₹70", image_path: 'paratha.webp' },
    { id: 8, name: "Onion Paratha (1 Pcs)", description: "Savory flatbread filled with a spicy onion mixture", price: "₹70", image_path: 'onion_paratha.webp' },
    { id: 9, name: "Gobhi Paratha (1 Pcs)", description: "Flavorful flatbread stuffed with spiced cauliflower", price: "₹70", image_path: 'gobi_paratha.webp' },
    { id: 10, name: "Tea", description: "Refreshing and aromatic Indian tea", price: "₹30", image_path: 'milk_tea.webp' },
    { id: 11, name: "Tea (Ginger+Cardemon)", description: "Indian tea flavored with ginger and cardamom", price: "₹40", image_path: 'ginger_tea.webp' },
    { id: 12, name: "Coffee", description: "Rich and robust coffee", price: "₹50", image_path: 'coffee.webp' },
    { id: 13, name: "Plain Dosa", description: "Crispy South Indian rice pancake", price: "₹70", image_path: 'plain_dosa.webp' },
    { id: 14, name: "Masala Dosa", description: "Crispy pancake filled with spicy potato filling", price: "₹90", image_path: 'masala_dosa.webp' },
    { id: 15, name: "Upma", description: "Savory South Indian semolina dish", price: "₹70", image_path: 'upma.webp' },
    { id: 16, name: "Poha", description: "Light and fluffy flattened rice breakfast dish", price: "₹70", image_path: 'poha.webp' },
  ],
  "Lunch/Dinner": [
    { id: 17, name: "Bhindi Crunchy", description: "Crispy fried okra seasoned with Indian spices", price: "₹130", image_path: 'bindi.webp' },
    { id: 18, name: "Paneer Butter Masala", description: "Creamy tomato gravy with soft paneer cubes", price: "₹130", image_path: 'paneer_butter_masla.webp' },
    { id: 19, name: "Shahi Paneer", description: "Paneer cubes in a thick, creamy, and spicy sauce", price: "₹140", image_path: 'shahi_paneer.webp' },
    { id: 20, name: "Mix Veg", description: "Assorted vegetables cooked in a flavorful sauce", price: "₹130", image_path: 'mix_veg.webp' },
    { id: 21, name: "Dal Makhni", description: "Creamy and buttery black lentil curry", price: "₹130", image_path: 'dal_makhni.webp' },
    { id: 22, name: "Dal Tadka", description: "Yellow lentils tempered with spices and herbs", price: "₹130", image_path: 'dal_tadka.webp' },
    { id: 23, name: "Kadhai Paneer", description: "Paneer cooked with bell peppers in a spicy gravy", price: "₹130", image_path: 'kadhai_paneer.webp' },
    { id: 24, name: "Jeera Rice", description: "Basmati rice flavored with cumin", price: "₹100", image_path: 'jeera_rice.webp' },
    { id: 25, name: "Karela", description: "Bitter gourd dish cooked with Indian spices", price: "₹100", image_path: 'karela.webp' },
    { id: 26, name: "Plain Rice", description: "Steamed plain basmati rice", price: "₹80", image_path: 'plain_rice.webp' },
    { id: 36, name: "Boondi Raita", description: "Yogurt mixed with tiny fried gram flour balls", price: "₹80", image_path: 'bondi_raita.webp' },
    { id: 27, name: "Thali (2 Hours Before)", description: "A platter of assorted Indian dishes", price: "₹199", image_path: 'thali.webp' },
    { id: 28, name: "Tawa Roti", description: "Whole wheat flatbread made on a tawa", price: "₹10", image_path: 'tawa_roti.webp' },
    { id: 29, name: "Butter Tawa Roti", description: "Tawa roti topped with butter", price: "₹15", image_path: 'butter_tawa_roti.webp' },
  ],
  Snacks: [
    { id: 30, name: "Onion/ Aloo Pakoda", description: "Fritters made with onion/potato coated in chickpea flour", price: "₹100", image_path: 'onion_pakoda.webp' },
    { id: 31, name: "Chilli Paneer", description: "Paneer cubes stir-fried with bell peppers and Chinese sauces", price: "₹210", image_path: 'chilli_paneer.webp' },
    { id: 32, name: "French Fries", description: "Classic crispy fried potatoes", price: "₹160", image_path: 'french_fries.webp' },
    { id: 33, name: "Chilli Potato", description: "Spicy and tangy stir-fried potatoes", price: "₹190", image_path: 'chilli_paneer.webp' },
    { id: 34, name: "Honey Chilli Potato", description: "Potatoes with a sweet and spicy glaze", price: "₹190", image_path: 'honey_chilli_potato.webp' },
    { id: 35, name: "Potato Wedges", description: "Seasoned and baked potato wedges", price: "₹190", image_path: 'potato_wedges.webp' },
  ],
  Shakes: [
    { id: 1, name: "Vanilla Shake", description: "Creamy vanilla-flavored milkshake", price: "₹70", image_path: "valina_shake.webp" },
    { id: 2, name: "Chocolate Shake", description: "Rich chocolate milkshake", price: "₹70", image_path: 'chocolate_shake.webp' },
    { id: 3, name: "Fresh Fruit Juice", description: "Juice made from fresh fruits", price: "₹80", image_path:'fruit_juice.webp' },
    { id: 4, name: "Oreo Shake", description: "Milkshake blended with Oreo cookies", price: "₹80", image_path: 'oreo_shake.webp' },
    { id: 5, name: "Fruit Bowl", description: "Assorted fresh fruits", price: "₹80", image_path: 'fruit_bowl.webp' },
    { id: 6, name: "Fresh Lime Soda", description: "Refreshing lime-flavored soda", price: "₹70", image_path: 'lime.webp' },
  ],
}

