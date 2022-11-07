import React from "react"
import SortIcon from "@material-ui/icons/Sort"
import SearchIcon from "@material-ui/icons/Search"
import {
  Box,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField
} from "@material-ui/core"
import useStyles from "./styles.js"

const Header = ({ searchType, setSearchType, search, setSearch }) => {
  const classes = useStyles()

  const onSearchTypeChange = e => {
    console.log(e.target.value)
    setSearchType(e.target.value)
  }

  const onSearchChange = e => {
    setSearch(e.target.value)
  }
  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
      <Box className={classes.search}>
        <OutlinedInput
          style={{
            backgroundColor: "white",
            border: "none",
            outline: "none",
            borderRadius: "17px",
            height: "42px"
          }}
          value={search}
          onChange={onSearchChange}
          variant="outlined"
          fullWidth
          placeholder="Search with the name or location of user"
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" edge="end">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0px 25px",
          alignItems: "center"
        }}
      >
        <TextField
          className={classes.select}
          select
          variant="outlined"
          value={searchType}
          onChange={onSearchTypeChange}
        >
          <option value="location">Location</option>
          <option value="name">Name</option>
        </TextField>
        <SortIcon />
      </Box>
    </Box>
  )
}

export default Header
