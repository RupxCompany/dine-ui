// Categories.js
import React from 'react'
import {Box, Button, HStack} from '@chakra-ui/react'

const Categories = ({onSelectCategory, selectedCategory}) => {
  const categories = ['All', 'Breakfast', 'Lunch/Dinner', 'Snacks', 'Shakes']

  return (
    <Box
      overflowX="scroll"
      width="100%"
      padding="4"
      sx={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        '-ms-overflow-style': 'none',
        'scrollbarWidth': 'none',
      }}
    >
      <HStack spacing={4} minW="max-content">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => onSelectCategory(category)}
            borderRadius="20px"
            backgroundColor="white"
            color="black"
            _hover={{
              backgroundColor: '#f7fafc',
            }}
            borderBottom={selectedCategory === category ? '3px solid #329618' : 'none'}
            transition="background-color 0.3s ease, border-bottom 0.3s ease"
          >
            {category}
          </Button>
        ))}
      </HStack>
    </Box>
  )
}

export default Categories
