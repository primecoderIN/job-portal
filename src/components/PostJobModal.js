import React, { useState } from "react";
import axios from "axios";
import CloseIcon from "@material-ui/icons/Close";
import {
  Box,
  Button,
  IconButton,
  Grid,
  FilledInput,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  skill: {
    padding: "8px 16px",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "10px",
    marginRight: "5px",
    backgroundColor: "#fff",
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "#fff",
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
  activeSkill: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));
export default function PostJobModal({ postModalOpen, setPostModal, setJobs }) {
  const classes = useStyles();
  const skills = [
    "Javascript",
    "React",
    "Node",
    "MongoDB",
    "Angular",
    "Firebase",
    "Material UI",
  ];
  const [jobData, setJobData] = useState({
    id: new Date().getTime().toString().substring(6, 11),
    title: "",
    type: "Contract",
    salary: "",
    location: "Remote",
    company: "",
    city: "",
    skills: [],
    description: "",
  });

  const addRemoveSkill = (skill) => {
    jobData.skills.includes(skill)
      ? setJobData((oldState) => ({
          ...oldState,
          skills: oldState.skills.filter((s) => s !== skill),
        }))
      : setJobData((oldState) => ({
          ...oldState,
          skills: oldState.skills.concat(skill),
        }));
  };

  const handleChange = (e) => {
    e.persist();
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setJobData({ ...jobData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(jobData);
    await axios.post("http://localhost:5000/jobs", jobData);
    setPostModal(false);
    const newJobData = await axios.get("http://localhost:5000/jobs");
    setJobs(newJobData.data.reverse());
    setJobData({
      id: new Date().getTime().toString().substring(6, 11),
      title: "",
      type: "Contract",
      salary: "",
      location: "Remote",
      company: "",
      city: "",
      skills: [],
      description: "",
    });
  };
  return (
    <Dialog open={postModalOpen} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between">
          Post Job
          <IconButton onClick={() => setPostModal(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FilledInput
              name="title"
              value={jobData.title}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Job Title *"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              name="type"
              value={jobData.type}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            >
              <MenuItem value="Full Time">Full Time</MenuItem>
              <MenuItem value="Part Time">Part Time</MenuItem>
              <MenuItem value="Contract">Contract</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              name="salary"
              value={jobData.salary}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Salary *"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              name="city"
              value={jobData.city}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Location *"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              name="location"
              value={jobData.location}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            >
              <MenuItem value="Remote">Remote</MenuItem>
              <MenuItem value="Office">Office</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              name="company"
              value={jobData.company}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Company Name *"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FilledInput
              name="description"
              value={jobData.description}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Job Description *"
              fullWidth
              multiline
              rows={3}
            />
          </Grid>
          <Box mt={2}>
            <Typography>Choose skills</Typography>
            <Box display="flex">
              {skills.map((skill) => {
                return (
                  <Box
                    onClick={() => addRemoveSkill(skill)}
                    key={skill}
                    className={`${classes.skill} ${
                      jobData.skills.includes(skill) && classes.activeSkill
                    }`}
                  >
                    {skill}
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          mx={1}
          p={1}
        >
          <Typography variant="caption" color="primary">
            * Required Fields
          </Typography>
          <Button
            onClick={handleSubmit}
            variant="contained"
            disableElevation
            color="primary"
          >
            Post Job
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}
