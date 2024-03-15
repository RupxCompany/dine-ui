import React from 'react';
import { Box, Flex, Input, InputGroup, InputLeftElement, Text, HStack, Badge } from '@chakra-ui/react';
import { MdLocationOn } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { SearchIcon } from '@chakra-ui/icons';

const Header = ({ cartItemCount }) => {
  return (
    <Box p={4} boxShadow="lg" borderBottomRadius="lg" bg="#5ed141">
      <HStack justifyContent="space-between">
        <Flex alignItems="center">
          <MdLocationOn color="white" size="1.5rem" />
          <Text marginLeft="2" fontFamily="'Roboto', sans-serif" color="white">Room 3B</Text>
        </Flex>
        <Box position="relative">
          <FiShoppingCart color="white" size="1.6rem" />
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
          <Input bg="white" color="black" placeholder="Search for food.." borderRadius="full" width="100%" fontFamily="'Lato', sans-serif" />
        </InputGroup>
      </Box>
    </Box>
  );
}

export default Header;
