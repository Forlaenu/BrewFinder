import { Box, StackDivider, VStack, } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import BreweryCard from './BreweryCard'

function ResultsList() {
    const searchList = useSelector(state => state.search.results)

    return (
        <VStack divider={<StackDivider borderColor='gray.200' />}
            spacing={2}
            align='stretch'>
            {(searchList === []) ?
                <Box>"Where no results would go"</Box>
                :
                searchList.map((brewery) => {
                    return <BreweryCard brewery={brewery} key={brewery.obdb_id} />
                })
            }
        </VStack>
    )
}

export default ResultsList