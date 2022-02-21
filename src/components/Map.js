import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import { useSelector } from "react-redux";

export default function Map() {
    const searchResults = useSelector(state => state.search.results)
    const mapCoords = {lat: useSelector(state => state.map.lat), lng: useSelector(state => state.map.lng)}
    const mapZoom = useSelector(state => state.map.zoom)
    const libraries = "places"
    const mapContainerStyle = {
        width: "60vw",
        height: "60vh",
    }
    const options = {
        disableDefaultUI: true,
        zoomControl: true,
    }
    const center = {
        lat: mapCoords.lat,
        lng: mapCoords.lng,
    }
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyC07dcjEMAHgjFywrLJ7ghE7aeJBIVqtBw",
        library: libraries,
    })

    if (loadError) return "Error loading maps"
    if (!isLoaded) return "Loading Maps"

    return (
        <div>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={mapZoom}
                center={center}
                options={options}
            >
                {searchResults.map((brewery) => {
                    return brewery.latitude !== "" &&  <Marker
                        key={brewery.obdb_id}
                        position={{
                            lat: (brewery.latitude === "") ? 0 : Number(brewery.latitude),
                            lng: (brewery.longitude === "") ? 0 : Number(brewery.longitude)
                        }}
                        title={brewery.name} />
                })}
            </GoogleMap>
            <span>Data provided by Open Brewery DB</span>
        </div>
    )
}