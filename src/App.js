import { Box, Button, CssBaseline, Typography, Modal } from "@material-ui/core"
import React, { useEffect, useMemo, useState } from "react"
import { getUsers } from "./api/usersApi"
import Header from "./components/Header"
import List from "./components/List"
import Map from "./components/Maps"
import klikyLogo from "./assets/kliky.png"
import { QRCode } from "react-qrcode-logo"
import styles from "./components/List/styles"

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [coords, setCoords] = useState({ lat: 39, lng: -77 })
  const [users, setUsers] = useState([])
  const [user, setUser] = useState()

  const [page, setPage] = useState(1)
  const [open, setOpen] = useState(false)
  const [searchType, setSearchType] = useState("location")
  const [search, setSearch] = useState("")

  const classes = styles()
  console.log(coords)
  useEffect(() => {
    setIsLoading(true)

    getUsers().then(data => {
      setUsers(data.users)
      setIsLoading(false)
    })
  }, [])

  const filteredUsers = useMemo(() => {
    if (!search.length) return users
    if (searchType === "name") {
      return users.filter(
        u =>
          u.firstName.toLowerCase().includes(search.toLowerCase()) ||
          u.lastName.toLowerCase().includes(search.toLowerCase())
      )
    } else {
      return users.filter(
        u =>
          u.address.address.toLowerCase().includes(search.toLowerCase()) ||
          u.address.state.toLowerCase().includes(search.toLowerCase())
      )
    }
  }, [users, search, searchType])

  return (
    <Box className="main">
      <CssBaseline />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {user && (
          <Box className={classes.modal}>
            <Typography
              style={{ marginTop: "2rem" }}
              variant="h5"
              component="h2"
            >
              Scan
            </Typography>
            <Typography variant="h5" component="h2">
              to access my profile
            </Typography>
            <Typography
              style={{ color: "lightgrey", padding: "0rem 2.5rem" }}
              variant="body2"
              component="h2"
            >
              It will show you my profile page if any of your friends scanned it
            </Typography>
            <QRCode
              value={user.domain}
              logoImage={klikyLogo}
              logoHeight={40}
              logoWidth={40}
              logoOpacity={1}
              enableCORS={true}
              eyeRadius={10}
            />
            <Button className={classes.shareButton}>Share</Button>
            <Button
              style={{
                color: "lightgray",
                fontWeight: "bold",
                marginBottom: "2rem"
              }}
              onClick={() => {
                setOpen(false)
              }}
            >
              Not Now
            </Button>
          </Box>
        )}
      </Modal>
      {page === 1 && (
        <React.Fragment>
          <Header
            searchType={searchType}
            search={search}
            setSearch={setSearch}
            setSearchType={setSearchType}
          />
          <List
            isLoading={isLoading}
            users={filteredUsers}
            setCoords={setCoords}
            setPage={setPage}
            setUser={setUser}
            setOpen={setOpen}
          />
        </React.Fragment>
      )}
      {page === 2 && (
        <Map
          setCoords={setCoords}
          coords={coords}
          users={users}
          user={user}
          setOpen={setOpen}
          setPage={setPage}
          setUser={setUser}
        />
      )}
    </Box>
  )
}

export default App
