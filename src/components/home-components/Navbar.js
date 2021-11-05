import React from "react";
import { Button, Box, AppBar, Toolbar, makeStyles } from "@material-ui/core";
import logo from "../../assets/logo.png";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: "#fff",
    height: "10vh",
    padding: "3rem",
    [theme.breakpoints.down("xs")]: {
      padding: "2rem 1rem",
    },
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
  },
  btn: {
    marginLeft: "0.8rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0.5rem",
      fontSize: "0.6rem",
    },
  },
  logo: {
    [theme.breakpoints.down("xs")]: {
      width: "100px",
    },
  },
}));
export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Box>
          <img className={classes.logo} src={logo} alt="Logo" />
        </Box>
        <Box>
          <Button variant="contained" color="primary" className={classes.btn}>
            Post Job
          </Button>
          <Button variant="contained" color="primary" className={classes.btn}>
            Search Job
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
