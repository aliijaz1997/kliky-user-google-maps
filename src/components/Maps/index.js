import { Box, IconButton } from "@material-ui/core"
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api"
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft"
import useStyles from "./styles"
import "../../App.css"
import UserDetails from "../UserDetailsMap"

function Map({ users, coords, setPage, user, setUser, setCoords, setOpen }) {
  const classes = useStyles()

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDTptONq0yniBeHU6cmP43Dl1QbOMNDb54",
    libraries: ["places"]
  })

  if (!isLoaded && !users.length) {
    return <h2>Loading....</h2>
  }

  return (
    <Box className={classes.mapContainer}>
      <IconButton
        onClick={() => {
          setPage(1)
        }}
        size="small"
        style={{
          position: "absolute",
          zIndex: 1,
          backgroundColor: "white",
          margin: "2rem 1rem",
          border: "2px solid lightgray"
        }}
      >
        <KeyboardArrowLeftIcon />
      </IconButton>
      {window.google && (
        <GoogleMap
          center={coords}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false
          }}
        >
          {users.map((u, id) => {
            return u.open ? (
              <Marker
                key={id}
                position={{
                  lat: u.address.coordinates.lat,
                  lng: u.address.coordinates.lng
                }}
                onClick={() => {
                  setCoords({
                    lat: u.address.coordinates.lat,
                    lng: u.address.coordinates.lng
                  })
                  setUser(u)
                }}
                icon={{
                  url: u.image + "#custom_marker_green",
                  scaledSize: new window.google.maps.Size(70, 70)
                }}
              ></Marker>
            ) : (
              <Marker
                key={id}
                position={{
                  lat: u.address.coordinates.lat,
                  lng: u.address.coordinates.lng
                }}
                onClick={() => {
                  setCoords({
                    lat: u.address.coordinates.lat,
                    lng: u.address.coordinates.lng
                  })
                  setUser(u)
                }}
                icon={{
                  url: u.image + "#custom_marker_red",
                  scaledSize: new window.google.maps.Size(70, 70)
                }}
              ></Marker>
            )
          })}
        </GoogleMap>
      )}
      <UserDetails
        user={user}
        setCoords={setCoords}
        setOpen={setOpen}
        setUser={setUser}
        setPage={setPage}
      />
    </Box>
  )
}

export default Map
