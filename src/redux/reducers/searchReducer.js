const defaultState = {
    termBrewery: '',
    termState: '',
    termCity: '',
    results: []
}

const SEARCH_SET_TERMBREWERY = 'SEARCH_SET_TERMBREWERY'
const SEARCH_SET_TERMSTATE = 'SEARCH_SET_TERMSTATE'
const SEARCH_SET_TERMCITY = 'SEARCH_SET_TERMCITY'
const SEARCH_SET_RESULTS = 'SEARCH_SET_RESULTS'

export function setSearchBrewery(term){
    return {
        type: SEARCH_SET_TERMBREWERY,
        term
    }
}
export function setSearchState(term){
    return {
        type: SEARCH_SET_TERMSTATE,
        term
    }
}
export function setSearchCity(term){
    return {
        type: SEARCH_SET_TERMCITY,
        term
    }
}
export function setResults(results){
    return {
        type: SEARCH_SET_RESULTS,
        results
    }
}
export function searchReducer(state = defaultState, action){
    switch(action.type){
        case SEARCH_SET_TERMBREWERY:
            return {
                ...state,
                termBrewery: action.term
            }
        case SEARCH_SET_TERMSTATE:
            return {
                ...state,
                termState: action.term
            }
        case SEARCH_SET_TERMCITY:
            return {
                ...state,
                termCity: action.term
            }
        case SEARCH_SET_RESULTS:
            return {
                ...state,
                results: action.results
            }
        default:
            return state
    }
}

export default searchReducer