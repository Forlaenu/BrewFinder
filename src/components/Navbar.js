import { Box, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <Box backgroundColor="#1C2321" color="#EEF1EF" fontWeight="bold">
        <Flex direction="row">
            <Spacer/>
            <Link to="/"><Box p="3">Home Page</Box></Link>
            <Link to="/search"><Box p="3">Search</Box></Link>
            <Link to="/userlist"><Box p="3">User Lists</Box></Link>
        </Flex>
    </Box>
  )
}

export default Navbar