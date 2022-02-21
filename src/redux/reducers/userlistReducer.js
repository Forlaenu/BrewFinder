const defaultState = {
    likes: [],
    dislikes: [],
    wishlist: [],
}

const USERLIST_SET_LIKES = 'USERLIST_SET_LIKES'
const USERLIST_SET_DISLIKES = 'USERLIST_SET_DISLIKES'
const USERLIST_SET_WISHLIST = 'USERLIST_SET_WISHLIST'

const USERLIST_REMOVE_LIKES = 'USERLIST_REMOVE_LIKES'
const USERLIST_REMOVE_DISLIKES = 'USERLIST_REMOVE_DISLIKES'
const USERLIST_REMOVE_WISHLIST = 'USERLIST_REMOVE_WISHLIST'

export function setUserLikes(likedBrewery) {
    return {
        type: USERLIST_SET_LIKES,
        likedBrewery
    }
}
export function setUserDislikes(dislikedBrewery) {
    return {
        type: USERLIST_SET_DISLIKES,
        dislikedBrewery
    }
}
export function setUserWishlist(wishlistBrewery) {
    return {
        type: USERLIST_SET_WISHLIST,
        wishlistBrewery
    }
}

export function removeUserLikes(likedBrewery) {
    return {
        type: USERLIST_REMOVE_LIKES,
        likedBrewery
    }
}
export function removeUserDislikes(dislikedBrewery) {
    return {
        type: USERLIST_REMOVE_DISLIKES,
        dislikedBrewery
    }
}
export function removeUserWishlist(wishlistBrewery) {
    return {
        type: USERLIST_REMOVE_WISHLIST,
        wishlistBrewery
    }
}

export function userlistReducer(state = defaultState, action) {
    switch (action.type) {
        case USERLIST_SET_LIKES:
            return {
                ...state,
                likes: [...state.likes, action.likedBrewery]
            }
        case USERLIST_SET_DISLIKES:
            return {
                ...state,
                dislikes: [...state.dislikes, action.dislikedBrewery]
            }
        case USERLIST_SET_WISHLIST:
            return {
                ...state,
                wishlist: [...state.wishlist, action.wishlistBrewery]
            }
        //TODO: CHANGE THESE ACTIONS FOR REMOVING, NOT ADDING
        case USERLIST_REMOVE_WISHLIST:
            return {
                ...state,
                wishlist: state.wishlist.filter((brewery) => {
                    return brewery.obdb_id !== action.wishlistBrewery.obdb_id
                })
            }
        case USERLIST_REMOVE_DISLIKES:
            return {
                ...state,
                dislikes: state.dislikes.filter((brewery) => {
                    return brewery.obdb_id !== action.dislikedBrewery.obdb_id
                })
            }
        case USERLIST_REMOVE_LIKES:
            return {
                ...state,
                likes: state.likes.filter((brewery)=>{
                    return brewery.obdb_id !== action.likedBrewery.obdb_id
                })
            }
        default:
            return state
    }
}

export default userlistReducer