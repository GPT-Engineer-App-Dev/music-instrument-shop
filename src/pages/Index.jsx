import { Box, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">Music Store</Heading>
        <HStack spacing={8}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">Products</Link>
          <Link href="#" color="white">About Us</Link>
          <Link href="#" color="white">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box bg="gray.200" color="white" textAlign="center" py={20}>
        <Heading size="2xl" mb={4}>Welcome to Our Music Store</Heading>
        <Text fontSize="xl" mb={6">Find the perfect instrument for you</Text>
        <Link href="#" color="white" bg="gray.700" px={6} py={3} borderRadius="md" _hover={{ bg: "gray.600" }}>Shop Now</Link>
      </Box>

      {/* Featured Products Section */}
      <Container maxW="container.xl" py={20}>
        <Heading size="xl" mb={10} textAlign="center">Featured Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box as="article" textAlign="center">
            <Image src="https://via.placeholder.com/300" alt="Guitar" mx="auto" mb={4} />
            <Heading size="md" mb={2}>Acoustic Guitar</Heading>
            <Text>$200</Text>
          </Box>
          <Box as="article" textAlign="center">
            <Image src="https://via.placeholder.com/300" alt="Keyboard" mx="auto" mb={4} />
            <Heading size="md" mb={2}>Digital Keyboard</Heading>
            <Text>$300</Text>
          </Box>
          <Box as="article" textAlign="center">
            <Image src="https://via.placeholder.com/300" alt="Drums" mx="auto" mb={4} />
            <Heading size="md" mb={2}>Drum Set</Heading>
            <Text>$500</Text>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="gray.900" color="white" py={10} mt="auto">
        <Container maxW="container.xl">
          <Flex justifyContent="space-between" alignItems="center">
            <Heading size="md">Music Store</Heading>
            <HStack spacing={4}>
              <Link href="#"><FaFacebook /></Link>
              <Link href="#"><FaTwitter /></Link>
              <Link href="#"><FaInstagram /></Link>
            </HStack>
          </Flex>
          <Text mt={4}>123 Music Street, City, Country</Text>
          <Text>info@musicstore.com</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;