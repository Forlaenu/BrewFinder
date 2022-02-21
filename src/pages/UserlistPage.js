import { Box, SimpleGrid, VStack } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import BreweryCard from '../components/BreweryCard'

function UserlistPage() {
	const wishlist = useSelector(state => state.userlist.wishlist)
	const likelist = useSelector(state => state.userlist.likes)
	const dislikelist = useSelector(state => state.userlist.dislikes)

	return (
		<Box>
			<SimpleGrid>
				<Box>
					<VStack spacing={2} align='stretch'>
						<Box> <Box fontSize="20" fontWeight="bold">Wishlist</Box>
						{wishlist.map((brewery)=>{
							return <BreweryCard brewery={brewery} key={brewery.obdb_id} />
						})}
						</Box>
					</VStack>
				</Box>
				<Box>
					<VStack spacing={2} align='stretch'>
						<Box><Box fontSize="20" fontWeight="bold">Been Here</Box>
						{likelist.map((brewery)=>{
							return <BreweryCard brewery={brewery} key={brewery.obdb_id} />
						})}
						</Box>
					</VStack>
				</Box>
				<Box>
					<VStack spacing={2} align='stretch'>
						<Box><Box fontSize="20" fontWeight="bold">Not a Fan</Box>
						{dislikelist.map((brewery)=>{
							return <BreweryCard brewery={brewery} key={brewery.obdb_id} />
						})}
						</Box>
					</VStack>
				</Box>
			</SimpleGrid>
		</Box>
	)
}

export default UserlistPage