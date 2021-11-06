import React from "react";
import { Box, AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
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
    textDecoration: "none",
    padding: "12px 18px",
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
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
          <Link to="/jobs/add" className={classes.btn}>
            Post Job
          </Link>
          <Link to="/search" className={classes.btn}>
            Search Job
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
