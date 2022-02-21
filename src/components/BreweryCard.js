import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMapLat, setMapLng, setMapZoom } from '../redux/reducers/mapReducer'
import { removeUserDislikes, removeUserLikes, removeUserWishlist, setUserDislikes, setUserLikes, setUserWishlist } from '../redux/reducers/userlistReducer'

function BreweryCard(props) {
    const { brewery } = props
    const dispatch = useDispatch()
    const wishlist = useSelector(state => state.userlist.wishlist)
    const likeslist = useSelector(state => state.userlist.likes)
    const dislikeslist = useSelector(state => state.userlist.dislikes)

    const handleAddBreweryWishlist = () => {
        //This is the user's list of places they want to checkout
        dispatch(setUserWishlist(brewery))
    }
    const handleRemoveBreweryWishlist = () => {
        //This removes brewery from wishlist (toggle between wishlist and remove)
        dispatch(removeUserWishlist(brewery))
    }

    const handleAddBreweryBeenhere = () => {
        //This is the user's list of places they've been to
        dispatch(setUserLikes(brewery))
    }
    const handleRemoveBreweryBeenhere = () => {
        //This removes brewery from beenhere (toggle between beenhere and remove)
        dispatch(removeUserLikes(brewery))
    }
    const handleAddBreweyNotafan = () => {
        //This is the user's list of not liked breweries
        dispatch(setUserDislikes(brewery))
    }
    const handleRemoveBreweyNotafan = () => {
        //This removes brewery from Notafan (toggle between Notafan and remove)
        dispatch(removeUserDislikes(brewery))
    }
    const handleShowOnMap = () => {
        //Can we make this pan/zoom the map to this location? Hopefully
            dispatch(setMapLat(brewery.latitude))
            dispatch(setMapLng(brewery.longitude))
            dispatch(setMapZoom(13))
    }
    const isAlreadyLiked = likeslist.find((likedBrewery) => {
        return likedBrewery.obdb_id === brewery.obdb_id
    })

    const isAlreadyDisliked = dislikeslist.find((dislikedBrewery) => {
        return dislikedBrewery.obdb_id === brewery.obdb_id
    })
    const isAlreadyWishlisted = wishlist.find((wishlistBrewery) => {
        return wishlistBrewery.obdb_id === brewery.obdb_id
    })


    return (
        <Box maxW='sm' m="3" shadow='md' borderWidth='1px' overflow='hidden'>
            <Box p="1">
                <Box
                    mt='1'
                    isTruncated
                    fontSize="18px"
                    fontWeight="bold"
                >
                    <span>🍺</span>{brewery.name}
                    <Box>
                        {brewery.latitude === "" ? "" : <Button onClick={handleShowOnMap}><span>🔎</span></Button>}
                    </Box>
                </Box>
                <Box>
                    {(brewery.website_url === "") ? "No website in DB" : <a href={brewery.website_url}>Visit Their Website</a>}
                </Box>
                <Box>
                    {`${(brewery.street === "") ? "Somewhere in" : brewery.street}`}
                </Box>
                <Box>
                    {`${brewery.city}, ${brewery.state} ${brewery.postal_code}`}
                </Box>
                <Box>
                    {isAlreadyWishlisted ? (<Button m="1" onClick={handleRemoveBreweryWishlist}>Remove Wishlist</Button>) : (<Button m="1" onClick={handleAddBreweryWishlist}>Wishlist</Button>)}
                    {isAlreadyLiked ? (<Button m="1" onClick={handleRemoveBreweryBeenhere}>Not Been Here</Button>) : (<Button m="1" onClick={handleAddBreweryBeenhere}>Been Here</Button>)}
                    {isAlreadyDisliked ? (<Button m="1" onClick={handleRemoveBreweyNotafan}>Give it a chance</Button>) : (<Button m="1" onClick={handleAddBreweyNotafan}>Not a fan</Button>)}
                </Box>
            </Box>
        </Box>
    )
}

export default BreweryCard