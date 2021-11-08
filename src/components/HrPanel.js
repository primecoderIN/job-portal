import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Button,
  Tab,
  Tabs,
  AppBar,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tabs: {
    width: "80%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    margin: "10rem auto",
    marginBottom: "15rem",
  },
  tabPanel: {
    width: "80%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    margin: "10rem auto",
    border: "2px solid green",
  },
  box: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  item: {
    border: `1px solid ${theme.palette.primary.main}`,
    margin: "0 0.5rem",
    marginTop: "0.5rem",
  },
  skill: {
    marginRight: "0.5rem",
    backgroundColor: theme.palette.secondary.main,
    padding: "8px 12px",
    borderRadius: "30px",
  },
  btn: {
    marginRight: "0.5rem",
  },
  btnCenter: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
  },
}));

const ActiveJobs = () => {
  const classes = useStyles();
  const [activeJob, setActiveJob] = useState([]);

  const getActiveJobList = async () => {
    const response = await axios.get(" http://localhost:5000/jobs");
    setActiveJob(response.data.reverse());
  };

  const discardJob = async (id) => {
    await axios.delete(`http://localhost:5000/jobs/${id}`);
    getActiveJobList();
  };

  useEffect(() => {
    getActiveJobList();
  }, []);

  return (
    <Box className={classes.box}>
      {activeJob.map(({ title, id, type, location }) => {
        return (
          <Box
            p={2}
            key={id}
            className={classes.item}
            display="flex"
            justifyContent="space-between"
          >
            <Box width="60%">
              <Box display="flex" justifyContent="space-between">
                <Typography>{title}</Typography>
                <Typography>Job ID : {id}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography>{type}</Typography>
                <Typography>{location}</Typography>
              </Box>
            </Box>
            <Box width="40%" className={classes.btnCenter}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => discardJob(id)}
              >
                Discard
              </Button>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

const ApplicantList = () => {
  const classes = useStyles();
  const [applicants, setApplicants] = useState([]);

  const getApplicantList = async () => {
    const response = await axios.get(" http://localhost:5000/applications");
    setApplicants(response.data.reverse());
  };

  const rejectApplicant = async (id) => {
    await axios.delete(`http://localhost:5000/applications/${id}`);
    getApplicantList();
  };

  const shortList = async (id) => {
    const response = await axios.get(
      `http://localhost:5000/applications/${id}`
    );
    await axios.post(`http://localhost:5000/shortlisted`, response.data);
  };

  useEffect(() => {
    getApplicantList();
  }, []);

  return (
    <Box className={classes.box}>
      {applicants.map(({ id, name, notice, skills }) => {
        return (
          <Box key={id} p={2} className={classes.item}>
            <Box py={1} my={1} display="flex">
              <Typography>Name :{name}</Typography>
              <Typography style={{ marginLeft: "2rem" }}>
                Notice Period : {notice}
              </Typography>
            </Box>
            <Box py={1} my={1} display="flex" justifyContent="start">
              {skills.map((skill) => {
                return (
                  <Typography className={classes.skill}>{skill}</Typography>
                );
              })}
            </Box>
            <Box>
              <Button
                className={classes.btn}
                variant="outlined"
                color="primary"
                onClick={() => {
                  shortList(id);
                }}
              >
                Shortlist
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => rejectApplicant(id)}
              >
                Reject
              </Button>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

const ShortlistedCandidates = () => {
  const classes = useStyles();

  const [candidates, setCandidates] = useState([]);

  const getShortlistedList = async () => {
    const response = await axios.get(" http://localhost:5000/shortlisted");
    setCandidates(response.data.reverse());
  };
  useEffect(() => {
    getShortlistedList();
  }, []);

  return (
    <Box className={classes.box}>
      {candidates.map(({ id, name, skills }) => {
        return (
          <Box key={id} p={1} className={classes.item}>
            <Box py={1} my={1} display="flex">
              <Typography>Name : {name}</Typography>
            </Box>
            <Box py={1} my={1} display="flex" justifyContent="start">
              {skills.map((skill) => {
                return (
                  <Typography className={classes.skill}>{skill}</Typography>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export const HrPanel = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleTabs = (e, val) => {
    setValue(val);
  };
  return (
    <div className={classes.tabs}>
      <AppBar position="static">
        <Tabs variant="fullWidth" value={value} onChange={handleTabs}>
          <Tab label="Active Jobs" />
          <Tab label="New Aplications" />
          <Tab label="Shortlisted Candidate" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className={classes.tabPanel}>
        <ActiveJobs />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ApplicantList />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ShortlistedCandidates />
      </TabPanel>
    </div>
  );
};

function TabPanel({ children, value, index }) {
  return value === index && <h1> {children} </h1>;
}
