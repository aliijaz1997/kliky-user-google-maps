import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(props => {
  console.log(props)
  return {
    root: {
      borderRadius: "25px 25px 0px 0px"
    }
  }
})
