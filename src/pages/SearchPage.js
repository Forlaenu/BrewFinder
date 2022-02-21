import { Box, Flex, Heading, } from '@chakra-ui/react'
import React from 'react'
import Map from '../components/Map'
import ResultsList from '../components/ResultsList'
import SearchForm from '../components/SearchForm'

function SearchPage() {
	return (
		<div>
			<Heading size="lg">Find your Brew</Heading>
			<Flex >
				<Box m="16">
					<SearchForm />
					<ResultsList />
				</Box>
				<Box m="16">
					<Map />
				</Box>
			</Flex>

		</div>
	)
}

export default SearchPage