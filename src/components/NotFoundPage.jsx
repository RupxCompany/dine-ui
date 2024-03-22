import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const NotFoundPage = () => {
  let navigate = useNavigate(); // useNavigate instead of useHistory

  return (
    <Box textAlign="center" py={10} px={6}>
      <Text fontSize="48px" fontWeight="bold">
        404
      </Text>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={'gray.500'} mb={6}>
        The page you're looking for does not seem to exist
      </Text>

      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        variant="solid"
        onClick={() => window.location.href = 'https://rupx.in'}
        >
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
