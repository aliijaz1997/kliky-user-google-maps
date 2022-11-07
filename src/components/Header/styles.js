import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(theme => ({
  search: {
    display: "flex",
    justifyContent: "center",
    padding: "10px",

    "& .MuiFormControl-root": {
      height: "auto !important"
    },

    "& .MuiOutlinedInput-input": {
      padding: "9px 14px"
    },

    "& .MuiOutlinedInput-notchedOutline": {
      border: 0
    }
  },
  select: {
    minWidth: "15rem",
    "& .MuiSelect-outlined": {
      background: "#fff",
      borderRadius: 50,
      padding: "9px 14px"
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: 50,
      border: 0
    }
  }
}))
