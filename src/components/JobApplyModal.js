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
export default function JobApplyModal({
  applyModalOpen,
  setApplyModal,
  applyID,
}) {
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
  const [applyData, setApplyData] = useState({
    id: "",
    name: "",
    email: "",
    salary: "",
    notice: "15 Days",
    skills: [],
    notes: "",
  });

  const addRemoveSkill = (skill) => {
    applyData.skills.includes(skill)
      ? setApplyData((oldState) => ({
          ...oldState,
          skills: oldState.skills.filter((s) => s !== skill),
        }))
      : setApplyData((oldState) => ({
          ...oldState,
          skills: oldState.skills.concat(skill),
        }));
  };

  const handleChange = (e) => {
    e.persist();
    const name = e.target.name;
    const value = e.target.value;
    setApplyData({ ...applyData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/applications", applyData);
    const newApplyData = await axios.get("http://localhost:5000/applications");
    setApplyData(newApplyData.data.reverse());
    setApplyModal(false);
  };
  return (
    <Dialog open={applyModalOpen} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between">
          Apply for Job ID : {applyID}
          <IconButton onClick={() => setApplyModal(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FilledInput
              name="name"
              value={applyData.name}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Name *"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              name="email"
              value={applyData.email}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Email *"
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <Select
              name="notice"
              value={applyData.notice}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            >
              <MenuItem value="15 Days">15 Days</MenuItem>
              <MenuItem value="30 Days">30 Days</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={6}>
            <FilledInput
              name="salary"
              value={applyData.salary}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Expected Salary *"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FilledInput
              name="notes"
              value={applyData.notes}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Add a note *"
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
                      applyData.skills.includes(skill) && classes.activeSkill
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
            Apply Now
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}
