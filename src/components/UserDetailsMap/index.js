import React from "react"
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions
} from "@material-ui/core"
import CropFreeIcon from "@material-ui/icons/CropFree"
import PersonIcon from "@material-ui/icons/Person"
import AttachMoneyIcon from "@material-ui/icons/AttachMoney"
import WifiIcon from "@material-ui/icons/Wifi"
import useStyles from "./styles.js"

const UserDetails = ({ user, setCoords, setOpen, setPage, setUser }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Box
        style={{
          backgroundColor: user.open
            ? "rgb(158, 233, 155)"
            : "rgb(231, 143, 143)",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <CardMedia
          style={{
            height: 160,
            width: 100
          }}
          image={user.image}
        />
      </Box>
      <CardContent style={{ color: "lightgray" }}>
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Box style={{ display: "flex" }}>
            <Typography gutterBottom variant="h6" style={{ color: "black" }}>
              {user.firstName} {user.lastName}
            </Typography>
            <Button
              onClick={() => {
                setCoords({
                  lat: user.address.coordinates.lat,
                  lng: user.address.coordinates.lng
                })
                setPage(2)
                setUser(user)
              }}
              size="small"
              style={{ color: user.open ? "green" : "red" }}
            >
              {user.open ? "Open" : "Closed"}
            </Button>
          </Box>
          <CropFreeIcon
            style={{
              backgroundColor: "black",
              color: "green"
            }}
            onClick={() => {
              setOpen(true)
              setUser(user)
            }}
          />
        </Box>
        <Typography gutterBottom variant="body6" className={classes.subtitle}>
          {user.address.address}, {user.address.state}
        </Typography>
        <Box>
          <PersonIcon />
          <WifiIcon />
          <AttachMoneyIcon />
          <AttachMoneyIcon />
          <AttachMoneyIcon style={{ color: "#ededed" }} />
          <AttachMoneyIcon style={{ color: "#ededed" }} />
        </Box>
      </CardContent>

      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Button
          style={{
            backgroundColor: "#E98A15",
            color: "white",
            borderRadius: "1.3rem",
            padding: "5px 20px",
            fontWeight: "bold",
            fontSize: "500",
            marginTop: "10px"
          }}
        >
          Reserve A Table
        </Button>
      </CardActions>
    </Card>
  )
}

export default UserDetails
