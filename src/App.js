import React from 'react';
import { Box, Flex, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { MdLocationOn } from 'react-icons/md';

function App() {
  return (
    // Set a subtle background color for the entire page
    <Box 
    paddingBottom={1}
     bg="gray.100" minH="100vh"> {/* Ensuring the background covers the full viewport height */}
      {/* Single card-like container with a shadow */}
      <Box
        p={4}
        boxShadow="lg"
        // borderRadius="lg"
        borderBottomRadius="lg"
        bg="#5ed141" // Setting the card's background color
      >
        {/* Location display inside the card */}
        <Flex alignItems="center" marginBottom={4}>
          <MdLocationOn color="gray.100" size="1.5rem" />
          <Text marginLeft="2" fontFamily="'Roboto', sans-serif" color="white">Room 3B</Text>
        </Flex>

        {/* Search bar container inside the same card */}
        <Box width="100%">
          {/* Input component with rounded edges and a search icon */}
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              bg="white"
              color="black"
              placeholder="Search for food.."
              borderRadius="full"
              width="100%"
              fontFamily="'Lato', sans-serif"
            />
          </InputGroup>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
