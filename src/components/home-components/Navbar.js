import React from "react";
import { Box, Button, AppBar, Toolbar, makeStyles } from "@material-ui/core";
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
  },
  logo: {
    [theme.breakpoints.down("xs")]: {
      width: "100px",
    },
  },
}));
export default function Navbar({ postModalOpen, setPostModal }) {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Box>
          <img className={classes.logo} src={logo} alt="Logo" />
        </Box>
        <Box>
          <Button
            color="primary"
            variant="contained"
            onClick={() => setPostModal(true)}
          >
            Post Job
          </Button>
          <Link to="/recruiter" className={classes.btn}>
            <Button color="primary" variant="contained">
              HR Panel
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
