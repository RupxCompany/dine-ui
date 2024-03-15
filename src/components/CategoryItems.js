import React, { useState, useEffect } from 'react';
import { Box, Button, VStack, HStack, SimpleGrid, Text, Image, Center, Icon } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons'; // Importing AddIcon for the plus sign



const CategoryItems = ({ category, updateCartItemCount }) => {
  const items = categoryItems[category] || [];
  const [quantities, setQuantities] = useState(items.map(() => 0));

  const handleQuantityChange = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(0, value);
    setQuantities(newQuantities);
  };

  const handleAddClick = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] = 1;
    setQuantities(newQuantities);
  }

  useEffect(() => {
    const totalItems = quantities.reduce((acc, quantity) => acc + quantity, 0);
    updateCartItemCount(totalItems);
  }, [quantities, updateCartItemCount]);

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} p={5}>
      {items.map((item, index) => (
        <Box key={index} p={5} boxShadow="sm" borderRadius="lg" bg="white" display="flex" flexDirection="row-reverse">
          <Box position="relative" boxSize="100px" alignSelf="center">
            {item.image_path?
            <Image src={item.image_path} alt={item.name} objectFit="cover" borderRadius="md" />
              :
            <Image src="paratha.webp" alt={item.name} objectFit="cover" borderRadius="md" />
            }
            <Center position="absolute" bottom="-10px" left="0" right="0">
              {quantities[index] > 0 ? (
                <Box bg="#5ed141" borderRadius="lg" display="inline-flex">
                  <Button size="xs" color="white" variant="unstyled" onClick={() => handleQuantityChange(index, quantities[index] - 1)}>-</Button>
                  <Text px={2} color="white" alignSelf="center">{quantities[index]}</Text>
                  <Button size="xs" color="white" variant="unstyled" onClick={() => handleQuantityChange(index, quantities[index] + 1)}>+</Button>
                </Box>
              ) : (
                <Button
                size="sm"
                borderColor="#5ed141"
                borderWidth="1px"
                color="#5ed141"
                fontWeight="600"
                position="relative" // Position relative to allow absolute positioning of the icon inside
                _focus={{ bg: "white", borderColor: "#5ed141", color: '#5ed141' }}
                onClick={() => handleAddClick(index)}
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
  );
};

export default CategoryItems;


const categoryItems = {
  All: [
    { name: "Vanilla Shake", description: "Creamy vanilla-flavored milkshake", price: "₹70", image_path: "valina_shake.webp" },
    { name: "Chocolate Shake", description: "Rich chocolate milkshake", price: "₹70", image_path: 'chocolate_shake.webp' },
    { name: "Fresh Fruit Juice", description: "Juice made from fresh fruits", price: "₹80", image_path:'fruit_juice.webp' },
    { name: "Oreo Shake", description: "Milkshake blended with Oreo cookies", price: "₹80", image_path: 'oreo_shake.webp' },
    { name: "Fruit Bowl", description: "Assorted fresh fruits", price: "₹80", image_path: 'fruit_bowl.webp' },
    { name: "Fresh Lime Soda", description: "Refreshing lime-flavored soda", price: "₹70", image_path: 'lime.webp' },
    { name: "Aloo Paratha (1 Pcs)", description: "Delicious Indian flatbread stuffed with spiced potatoes", price: "₹70", image_path: 'paratha.webp' },
    { name: "Onion Paratha (1 Pcs)", description: "Savory flatbread filled with a spicy onion mixture", price: "₹70", image_path: 'dosa.webp' },
    { name: "Gobhi Paratha (1 Pcs)", description: "Flavorful flatbread stuffed with spiced cauliflower", price: "₹70" },
    { name: "Tea", description: "Refreshing and aromatic Indian tea", price: "₹30" },
    { name: "Tea (Ginger+Cardemon)", description: "Indian tea flavored with ginger and cardamom", price: "₹40" },
    { name: "Coffee", description: "Rich and robust coffee", price: "₹50" },
    { name: "Plain Dosa", description: "Crispy South Indian rice pancake", price: "₹70" },
    { name: "Masala Dosa", description: "Crispy pancake filled with spicy potato filling", price: "₹90" },
    { name: "Upma", description: "Savory South Indian semolina dish", price: "₹70" },
    { name: "Poha", description: "Light and fluffy flattened rice breakfast dish", price: "₹70" },
    { name: "Bhindi Crunchy", description: "Crispy fried okra seasoned with Indian spices", price: "₹130" },
    { name: "Paneer Butter Masala", description: "Creamy tomato gravy with soft paneer cubes", price: "₹130" },
    { name: "Shahi Paneer", description: "Paneer cubes in a thick, creamy, and spicy sauce", price: "₹140" },
    { name: "Mix Veg", description: "Assorted vegetables cooked in a flavorful sauce", price: "₹130" },
    { name: "Dal Makhni", description: "Creamy and buttery black lentil curry", price: "₹130" },
    { name: "Dal Tadka", description: "Yellow lentils tempered with spices and herbs", price: "₹130" },
    { name: "Kadhai Paneer", description: "Paneer cooked with bell peppers in a spicy gravy", price: "₹130" },
    { name: "Jeera Rice", description: "Basmati rice flavored with cumin", price: "₹100" },
    { name: "Karela", description: "Bitter gourd dish cooked with Indian spices", price: "₹100" },
    { name: "Plain Rice", description: "Steamed plain basmati rice", price: "₹80" },
    { name: "Boondi Raita", description: "Yogurt mixed with tiny fried gram flour balls", price: "₹80" },
    { name: "Thali (2 Hours Before)", description: "A platter of assorted Indian dishes", price: "₹199" },
    { name: "Tawa Roti", description: "Whole wheat flatbread made on a tawa", price: "₹10" },
    { name: "Butter Tawa Roti", description: "Tawa roti topped with butter", price: "₹15" },
    { name: "Onion/ Aloo Pakoda", description: "Fritters made with onion/potato coated in chickpea flour", price: "₹100" },
    { name: "Chilli Paneer", description: "Paneer cubes stir-fried with bell peppers and Chinese sauces", price: "₹210" },
    { name: "French Fries", description: "Classic crispy fried potatoes", price: "₹160" },
    { name: "Chilli Potato", description: "Spicy and tangy stir-fried potatoes", price: "₹190" },
    { name: "Honey Chilli Potato", description: "Potatoes with a sweet and spicy glaze", price: "₹190" },
    { name: "Potato Wedges", description: "Seasoned and baked potato wedges", price: "₹190" },
    { name: "Vanilla Shake", description: "Creamy vanilla-flavored milkshake", price: "₹70" },
  ],
  Breakfast: [
    { name: "Aloo Paratha (1 Pcs)", description: "Delicious Indian flatbread stuffed with spiced potatoes", price: "₹70" },
    { name: "Onion Paratha (1 Pcs)", description: "Savory flatbread filled with a spicy onion mixture", price: "₹70" },
    { name: "Gobhi Paratha (1 Pcs)", description: "Flavorful flatbread stuffed with spiced cauliflower", price: "₹70" },
    { name: "Tea", description: "Refreshing and aromatic Indian tea", price: "₹30" },
    { name: "Tea (Ginger+Cardemon)", description: "Indian tea flavored with ginger and cardamom", price: "₹40" },
    { name: "Coffee", description: "Rich and robust coffee", price: "₹50" },
    { name: "Plain Dosa", description: "Crispy South Indian rice pancake", price: "₹70" },
    { name: "Masala Dosa", description: "Crispy pancake filled with spicy potato filling", price: "₹90" },
    { name: "Upma", description: "Savory South Indian semolina dish", price: "₹70" },
    { name: "Poha", description: "Light and fluffy flattened rice breakfast dish", price: "₹70" },
  ],
  "Lunch/Dinner": [
    { name: "Bhindi Crunchy", description: "Crispy fried okra seasoned with Indian spices", price: "₹130" },
    { name: "Paneer Butter Masala", description: "Creamy tomato gravy with soft paneer cubes", price: "₹130" },
    { name: "Shahi Paneer", description: "Paneer cubes in a thick, creamy, and spicy sauce", price: "₹140" },
    { name: "Mix Veg", description: "Assorted vegetables cooked in a flavorful sauce", price: "₹130" },
    { name: "Dal Makhni", description: "Creamy and buttery black lentil curry", price: "₹130" },
    { name: "Dal Tadka", description: "Yellow lentils tempered with spices and herbs", price: "₹130" },
    { name: "Kadhai Paneer", description: "Paneer cooked with bell peppers in a spicy gravy", price: "₹130" },
    { name: "Jeera Rice", description: "Basmati rice flavored with cumin", price: "₹100" },
    { name: "Karela", description: "Bitter gourd dish cooked with Indian spices", price: "₹100" },
    { name: "Plain Rice", description: "Steamed plain basmati rice", price: "₹80" },
    { name: "Boondi Raita", description: "Yogurt mixed with tiny fried gram flour balls", price: "₹80" },
    { name: "Thali (2 Hours Before)", description: "A platter of assorted Indian dishes", price: "₹199" },
    { name: "Tawa Roti", description: "Whole wheat flatbread made on a tawa", price: "₹10" },
    { name: "Butter Tawa Roti", description: "Tawa roti topped with butter", price: "₹15" },
  ],
  Snacks: [
    { name: "Onion/ Aloo Pakoda", description: "Fritters made with onion/potato coated in chickpea flour", price: "₹100" },
    { name: "Chilli Paneer", description: "Paneer cubes stir-fried with bell peppers and Chinese sauces", price: "₹210" },
    { name: "French Fries", description: "Classic crispy fried potatoes", price: "₹160" },
    { name: "Chilli Potato", description: "Spicy and tangy stir-fried potatoes", price: "₹190" },
    { name: "Honey Chilli Potato", description: "Potatoes with a sweet and spicy glaze", price: "₹190" },
    { name: "Potato Wedges", description: "Seasoned and baked potato wedges", price: "₹190" },
  ],
  Shakes: [
    { name: "Vanilla Shake", description: "Creamy vanilla-flavored milkshake", price: "₹70", image_path: "valina_shake.webp" },
    { name: "Chocolate Shake", description: "Rich chocolate milkshake", price: "₹70", image_path: 'chocolate_shake.webp' },
    { name: "Fresh Fruit Juice", description: "Juice made from fresh fruits", price: "₹80", image_path:'fruit_juice.webp' },
    { name: "Oreo Shake", description: "Milkshake blended with Oreo cookies", price: "₹80", image_path: 'oreo_shake.webp' },
    { name: "Fruit Bowl", description: "Assorted fresh fruits", price: "₹80", image_path: 'fruit_bowl.webp' },
    { name: "Fresh Lime Soda", description: "Refreshing lime-flavored soda", price: "₹70", image_path: 'lime.webp' },
  ],
};

