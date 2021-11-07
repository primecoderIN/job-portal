import React from "react";
import { Box, makeStyles, Grid, Typography, Button } from "@material-ui/core";
import { Work, AttachMoney, LocationCity } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    border: `1px solid ${theme.palette.primary.main} `,
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function JobCard({
  id,
  title,
  type,
  salary,
  location,
  company,
  setApplyModal,
  setApplyID,
}) {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.wrapper} p={2} my={2} mx={12}>
      <Grid container direction="row" className={classes.box}>
        <Grid item xs={4} pt={5}>
          <Box mb={2}>
            <Typography variant="h6">{title}</Typography>
          </Box>
          <Box>
            <Typography variant="h6" color="primary">
              {company}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box mb={2} ml={1}>
            <Typography>Job ID: {id}</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <AttachMoney />
            <Typography>{salary}</Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box mb={2} display="flex" alignItems="center">
            <Work />
            <Typography>{type}</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <LocationCity />
            <Typography variant="h6">{location}</Typography>
          </Box>
        </Grid>
        <Grid item xs={1} className={classes.flexCenter}>
          <Button
            onClick={() => {
              setApplyID(id);
              setApplyModal(true);
            }}
            variant="contained"
            color="primary"
          >
            Apply
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
