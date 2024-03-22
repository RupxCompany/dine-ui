import React from 'react';
import { Box, Flex, Input, InputRightElement, Button, InputGroup, InputLeftElement, Text, HStack, Badge } from '@chakra-ui/react';
import { MdLocationOn } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';

const Header = ({ cartItemCount, showCart, searchQuery, onSearchChange }) => {

  const handleSearchChange = (event) => {
    onSearchChange(event.target.value);
  }

  const clearSearch = () => {
    onSearchChange('')
  }

  return (
    <Box p={4} boxShadow="lg" borderBottomRadius="lg" bg="#5ed141">
      <HStack justifyContent="space-between">
        <Flex alignItems="center">
          <MdLocationOn color="white" size="1.5rem" />
          <Text marginLeft="2" fontFamily="'Roboto', sans-serif" color="white">Jugglers Rest: 3B</Text>
        </Flex>
        <Box position="relative" onClick={showCart}>
          <FiShoppingCart color="white" size="1.6rem"  />
          {cartItemCount > 0 && (
            <Badge
              position="absolute"
              top="-1"
              right="-1"
              borderRadius="full"
              px="1.5"
              bg="#cf5777"
              color="white"
            >
              {cartItemCount}
            </Badge>
          )}
        </Box>
      </HStack>
      <Box width="100%" mt={4}>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
          <Input
            bg="white"
            color="black" placeholder="Search for food.."
            borderRadius="full" width="100%"
            value={searchQuery}
            fontFamily="'Lato', sans-serif"
            onChange={handleSearchChange}
         />
         {searchQuery && (
            <InputRightElement>
              <Button size="xs" variant="ghost" onClick={clearSearch}>
                <CloseIcon />
              </Button>
            </InputRightElement>
          )}
        </InputGroup>
      </Box>
    </Box>
  );
}

export default Header;
