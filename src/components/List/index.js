import React from "react"
import { CircularProgress, Grid, Button } from "@material-ui/core"
import MapIcon from "@material-ui/icons/Map"
import UserDetails from "../UserDetails"
import useStyles from "./styles.js"

const List = ({ users, isLoading, setCoords, setPage, setUser, setOpen }) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <div className={classes.container}>
        {isLoading ? (
          <div className={classes.loading}>
            <CircularProgress size="5rem" />
          </div>
        ) : (
          <Grid container spacing={3} className={classes.list}>
            {users.map((user, i) => (
              <Grid key={i} item xs={12}>
                <UserDetails
                  user={user}
                  setCoords={setCoords}
                  setOpen={setOpen}
                  setUser={setUser}
                  setPage={setPage}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </div>
      <Button
        style={{
          backgroundColor: "#E98A15",
          color: "white",
          margin: "0rem 7rem",
          borderRadius: "1.3rem"
        }}
        startIcon={<MapIcon />}
        onClick={() => {
          setCoords({
            lat: users[0].address.coordinates.lat,
            lng: users[0].address.coordinates.lng
          })
          setUser(users[0])
          setPage(2)
        }}
      >
        View Map
      </Button>
    </React.Fragment>
  )
}

export default List
