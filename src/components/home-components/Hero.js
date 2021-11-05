import React from "react";
import { Paper, makeStyles, Button } from "@material-ui/core";
import heroImage from "../../assets/hero.jpg";

const styles = {
  paperContainer: {
    marginTop: "10vh",
    height: "90vh",
    background: `url(${heroImage}) center/cover`,
    position: "relative",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  },
};
const useStyles = makeStyles((theme) => ({
  container: {
    marginLeft: "3rem",
    [theme.breakpoints.down("xs")]: {
      margin: "0rem 1rem",
    },
  },
  heroText: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "3rem",
      fontWeight: "900",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "4rem",
      fontWeight: "900",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "5rem",
      fontWeight: "900",
    },
  },
  searchBox: {
    width: "80%",
    height: "4rem",
    padding: "0.8rem",
    fontSize: "1.2rem",
    border: "none",
    outline: "none",
  },
  searchBoxContainer: {
    marginTop: "1.2rem",
    display: "flex",
    alignItems: "center",
  },
  btn: {
    height: "4rem",
    width: "20%",
    padding: "1rem 0.5rem",
    borderRadius: "0",
  },
}));

export default function Hero() {
  const classes = useStyles();
  return (
    <Paper style={styles.paperContainer}>
      <div className={classes.container}>
        <div>
          <h1 className={classes.heroText}>
            No.1 Job Search <br />
            Portal in India
          </h1>
        </div>
        <div className={classes.searchBoxContainer}>
          <input
            className={classes.searchBox}
            type="text"
            placeholder="Job title or Keyword"
          />
          <Button className={classes.btn} variant="contained" color="primary">
            Find job
          </Button>
        </div>
      </div>
    </Paper>
  );
}
