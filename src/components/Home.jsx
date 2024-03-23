import React, {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {Box, useDisclosure, Center, Spinner} from '@chakra-ui/react'
import Header from './Header'
import Categories from './Categories'
import CategoryItems from './CategoryItems'
import ViewCartButton from './ViewCartButton'
import CartDrawer from './CartDrawer'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [cart, setCart] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [restaurantInfo, setRestaurantInfo] = useState({restaurant: '', space: ''})
  const [ctaPhone, setCtaPhone] = useState('')
  const handleSelectCategory = (category) => {
    setSelectedCategory(category)
  }
  const navigate = useNavigate()
  const {qrCode} = useParams()

  useEffect(() => {
    document.title = 'RupX Dine'
    const fetchRestaurantInfo = async () => {
      setIsLoading(true)
      try {
        if (!qrCode) {
          throw new Error('No QR code found in the URL')
        }
        const response = await fetch(`${process.env.REACT_APP_DINE_ENGINE_URL}/qr/${qrCode}`)
        if (!response.ok) {
          throw new Error('Failed to fetch restaurant info')
        }
        const resp = await response.json()
        setRestaurantInfo({restaurant: resp.data.restaurant, space: resp.data.space})
        setCtaPhone(resp.data.cta_phone)
      } catch (error) {
        navigate('/404')
      } finally {
        setIsLoading(false)
      }
    }

    fetchRestaurantInfo()
  }, [navigate, qrCode])

  if (isLoading) {
    return (
      <Center minH="100vh">
        <Spinner size="xl" color="teal.500" thickness="4px" speed="0.65s" emptyColor="gray.200" />
      </Center>
    )
  }


  return (
    <Box paddingBottom={1} bg="gray.100" minH="100vh">
      <Header
        cartItemCount={cart.length}
        cart={cart}
        showCart={onOpen}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        restaurantInfo={restaurantInfo}
      />
      <Categories
        onSelectCategory={handleSelectCategory}
        selectedCategory={selectedCategory} />
      <CategoryItems
        category={selectedCategory}
        cart={cart}
        setCart={setCart}
        searchQuery={searchQuery}/>
      {cart.length > 0 &&
       <ViewCartButton
         onClick={onOpen}
         itemCount={cart.length}
       />}
      <CartDrawer
        isOpen={isOpen}
        onClose={onClose}
        cart={cart}
        setCart={setCart}
        ctaPhone={ctaPhone}
      />
    </Box>
  )
}

export default App
