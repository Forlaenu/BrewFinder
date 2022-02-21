import React from 'react'
import { Box, Button, Flex, FormLabel, Input } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { setResults, setSearchBrewery, setSearchState, setSearchCity } from '../redux/reducers/searchReducer'
import { breweriesDB } from '../breweryDB'
import { setMapLat, setMapLng, setMapZoom } from '../redux/reducers/mapReducer'


function SearchForm() {
    const termBrewery = useSelector(state => state.search.termBrewery)
    const termState = useSelector(state => state.search.termState)
    const termCity = useSelector(state => state.search.termCity)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        let searchResults = [], searchResultsLat = 0, searchResultsLng = 0

        if (termBrewery !== '') {
            searchResults = breweriesDB.filter((brewery) => {
                return brewery.name.toLowerCase().includes(termBrewery.toLowerCase())
            })
            if (searchResults.length) {
                let brewCountWithCoords = 0
                for (var brewery of searchResults) {
                    if (brewery.latitude !== "") {
                        brewCountWithCoords += 1
                        searchResultsLat += Number(brewery.latitude)
                        searchResultsLng += Number(brewery.longitude)
                    }
                }
                searchResultsLat = searchResultsLat / brewCountWithCoords
                searchResultsLng = searchResultsLng / brewCountWithCoords
                dispatch(setMapLat(searchResultsLat))
                dispatch(setMapLng(searchResultsLng))
                dispatch(setMapZoom(4))
                searchResultsLat = 0
                searchResultsLng = 0
                brewCountWithCoords = 0
            }
            dispatch(setResults(searchResults))
        }
        else if (termState !== '') {
            searchResults = breweriesDB.filter((brewery) => {
                return brewery.state.toLowerCase().includes(termState.toLowerCase())
            })
            if (searchResults.length) {
                let brewCountWithCoords = 0
                for (brewery of searchResults) {
                    if (brewery.latitude !== "") {
                        brewCountWithCoords += 1
                        searchResultsLat += Number(brewery.latitude)
                        searchResultsLng += Number(brewery.longitude)
                    }
                }
                searchResultsLat = searchResultsLat / brewCountWithCoords
                searchResultsLng = searchResultsLng / brewCountWithCoords
                dispatch(setMapLat(searchResultsLat))
                dispatch(setMapLng(searchResultsLng))
                dispatch(setMapZoom(7))
                searchResultsLat = 0
                searchResultsLng = 0
                brewCountWithCoords = 0
            }
            dispatch(setResults(searchResults))
        }
        else if (termCity !== '') {
            searchResults = breweriesDB.filter((brewery) => {
                return brewery.city.toLowerCase().includes(termCity.toLowerCase())
            })
            if (searchResults.length) {
                let brewCountWithCoords = 0
                for (brewery of searchResults) {
                    if (brewery.latitude !== "") {
                        brewCountWithCoords += 1
                        searchResultsLat += Number(brewery.latitude)
                        searchResultsLng += Number(brewery.longitude)
                    }
                }
                searchResultsLat = searchResultsLat / brewCountWithCoords
                searchResultsLng = searchResultsLng / brewCountWithCoords
                dispatch(setMapLat(searchResultsLat))
                dispatch(setMapLng(searchResultsLng))
                dispatch(setMapZoom(10))
                searchResultsLat = 0
                searchResultsLng = 0
                brewCountWithCoords = 0
            }
            dispatch(setResults(searchResults))
        }
        else {
            dispatch(setResults([]))
            dispatch(setMapLat(39))
            dispatch(setMapLng(-93))
            dispatch(setMapZoom(4))
        }
        dispatch(setSearchBrewery(''))
        dispatch(setSearchState(''))
        dispatch(setSearchCity(''))
    }

    return (
        <Box p={5}>
            <form onSubmit={handleSubmit}>
                <Flex maxW="75vw" mx="auto" direction="column">
                    <FormLabel>Brewery Name: </FormLabel>
                    <Input
                        value={termBrewery}
                        onChange={(e) => dispatch(setSearchBrewery(e.target.value))} />
                    <FormLabel>City: </FormLabel>
                    <Input
                        value={termCity}
                        onChange={(e) => dispatch(setSearchCity(e.target.value))} />
                    <FormLabel>State: </FormLabel>
                    <Input
                        value={termState}
                        onChange={(e) => dispatch(setSearchState(e.target.value))} />

                    <Button type="submit">Search</Button>
                </Flex>
            </form>
        </Box>
    )
}

export default SearchForm