import React from "react";
import { Box, Button, Select, MenuItem, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  wrapper: {
    maxWidth: "80%",
    margin: "10px auto",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    boxShadow: "0px 1px 5px rgba(0,0,0,0.1)",
    borderRadius: "5px",
    "&>*": {
      flex: 1,
      height: "40px",
      margin: "8px",
    },
  },
});
function SearchBar() {
  const classes = useStyles();
  return (
    <Box p={2} className={classes.wrapper}>
      <Select variant="outlined" defaultValue="Full Time">
        <MenuItem value="Full Time">Full Time</MenuItem>
        <MenuItem value="Part Time">Part Time</MenuItem>
        <MenuItem value="Contract">Contract</MenuItem>
      </Select>
      <Select variant="outlined" defaultValue="Remote">
        <MenuItem value="Remote">Remote</MenuItem>
        <MenuItem value="Office">Office</MenuItem>
      </Select>
      <Button variant="contained" color="primary" disableElevation>
        Search
      </Button>
    </Box>
  );
}

export default SearchBar;
