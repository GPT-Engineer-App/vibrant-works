import { Container, VStack, Heading, Text, Box, Image, SimpleGrid, Flex, Grid, GridItem } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4} bg="#1a202c" color="white">
      <VStack spacing={10} align="stretch">
        {/* Hero Section */}
        <Box textAlign="center" py={10} bg="#2d3748" borderRadius="md">
          <Heading as="h1" size="2xl" mb={4}>Welcome to My Portfolio</Heading>
          <Text fontSize="xl">Showcasing my works and projects</Text>
        </Box>

        {/* About Me Section */}
        <Box bg="#2d3748" p={5} borderRadius="md">
          <Heading as="h2" size="xl" mb={4}>About Me</Heading>
          <Flex direction={{ base: "column", md: "row" }} align="center">
            <Image
              borderRadius="full"
              boxSize="150px"
              src="/images/profile.jpg"
              alt="Profile Picture"
              mr={{ base: 0, md: 8 }}
              mb={{ base: 4, md: 0 }}
            />
            <Text fontSize="lg">
              Hello! I'm a passionate developer with experience in creating dynamic and responsive web applications. I love coding and am always eager to learn new technologies.
            </Text>
          </Flex>
        </Box>

        {/* Works Section */}
        <Box bg="#2d3748" p={5} borderRadius="md">
          <Heading as="h2" size="xl" mb={4}>My Works</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            <Box bg="#4a5568" p={5} borderRadius="md">
              <Image src="/images/work1.jpg" alt="Work 1" mb={3} borderRadius="md" />
              <Heading as="h3" size="md">Project Title 1</Heading>
              <Text mt={2}>Brief description of the project.</Text>
            </Box>
            <Box bg="#4a5568" p={5} borderRadius="md">
              <Image src="/images/work2.jpg" alt="Work 2" mb={3} borderRadius="md" />
              <Heading as="h3" size="md">Project Title 2</Heading>
              <Text mt={2}>Brief description of the project.</Text>
            </Box>
            <Box bg="#4a5568" p={5} borderRadius="md">
              <Image src="/images/work3.jpg" alt="Work 3" mb={3} borderRadius="md" />
              <Heading as="h3" size="md">Project Title 3</Heading>
              <Text mt={2}>Brief description of the project.</Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Contact Section */}
        <Box textAlign="center" py={10} bg="#2d3748" borderRadius="md">
          <Heading as="h2" size="xl" mb={4}>Get in Touch</Heading>
          <Text fontSize="lg" mb={4}>Feel free to reach out to me on any of the platforms below:</Text>
          <Flex justify="center" spacing={4}>
            <Box as="a" href="https://github.com" target="_blank" mx={2}>
              <FaGithub size="2em" />
            </Box>
            <Box as="a" href="https://linkedin.com" target="_blank" mx={2}>
              <FaLinkedin size="2em" />
            </Box>
            <Box as="a" href="mailto:someone@example.com" mx={2}>
              <FaEnvelope size="2em" />
            </Box>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;