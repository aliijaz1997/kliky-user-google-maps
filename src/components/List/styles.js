import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: "30px"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  loading: {
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    padding: "25px"
  },
  marginBottom: {
    marginBottom: "30px"
  },
  list: {
    height: "75vh",
    overflow: "auto"
  },
  modal: {
    backgroundColor: "white",
    margin: "0rem 1.5rem",
    borderRadius: "10px",
    alignItems: "center",
    display: "flex",
    flexDirection: "column"
  },
  shareButton: {
    backgroundColor: "#E98A15",
    color: "white",
    borderRadius: "1.3rem",
    padding: "5px 20px",
    fontWeight: "bold",
    fontSize: "500",
    marginTop: "10px"
  }
}))
