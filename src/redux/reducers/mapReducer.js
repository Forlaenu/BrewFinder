const defaultState = {
    lat: 39,
    lng: -93,
    zoom: 4,
}

const MAP_SET_LAT = "MAP_SET_LAT"
const MAP_SET_LNG = "MAP_SET_LNG"
const MAP_SET_ZOOM = "MAP_SET_ZOOM"

export function setMapLat(coord) {
    return {
        type: MAP_SET_LAT,
        coord
    }
}
export function setMapLng(coord) {
    return {
        type: MAP_SET_LNG,
        coord
    }
}
export function setMapZoom(level) {
    return {
        type: MAP_SET_ZOOM,
        level
    }
}

export function mapReducer(state = defaultState, action) {
    switch (action.type) {
        case MAP_SET_LAT:
            return {
                ...state,
                lat: Number(action.coord)
            }
        case MAP_SET_LNG:
            return {
                ...state,
                lng: Number(action.coord)
            }
        case MAP_SET_ZOOM:
            return {
                ...state,
                zoom: Number(action.level)
            }
        default:
            return state
    }
}

export default mapReducer