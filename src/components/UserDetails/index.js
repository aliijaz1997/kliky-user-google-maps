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
      <CardMedia
        className={classes.cover}
        image={user.image}
        title={`${user.firstName} ${user.lastName}`}
      />
      <div className={classes.details}>
        <CardContent style={{ color: "lightgray" }}>
          <Typography gutterBottom variant="h6" style={{ color: "black" }}>
            {user.firstName} {user.lastName}
          </Typography>
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
        <CardActions
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
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
        </CardActions>
      </div>
    </Card>
  )
}

export default UserDetails
