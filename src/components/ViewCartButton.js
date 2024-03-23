import React from 'react'
import { Box, Button, useColorModeValue, Icon, Text, Flex } from '@chakra-ui/react'
import { FaShoppingCart, FaArrowRight } from 'react-icons/fa' // Import the required icons

const ViewCartButton = ({ onClick, itemCount }) => {
  const bgColor = "#5ed141" // Green background color
  const hoverBgColor = useColorModeValue('#9cdb8b', '#789456') // Slightly darker on hover
  const textColor = useColorModeValue('black', 'white') // Text color based on theme

  return (
    <Box position="fixed" bottom="0" left="0" right="0" p={4} boxShadow="md">
      <Button
        width="full"
        bg={bgColor}
        color={textColor}
        borderRadius="xl"
        _hover={{ bg: hoverBgColor }}
        _active={{ bg: hoverBgColor }}
        onClick={onClick}
      >
        <Flex justifyContent="space-between" width="full" alignItems="center">
          <Flex alignItems="center">
            <Icon as={FaShoppingCart} mr={2} />
            <Text>{itemCount} {itemCount === 1 ? 'item' : 'items'} added</Text>
          </Flex>
          <Flex alignItems="center">
            <Text>View Cart</Text>
            <Icon as={FaArrowRight} ml={2} />
          </Flex>
        </Flex>
      </Button>
    </Box>
  )
}

export default ViewCartButton
