import React, { useState, useEffect } from "react";
import axios from "axios";
import JobCard from "./JobCard";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  const getJobList = async () => {
    const response = await axios.get(" http://localhost:5000/jobs");
    setJobs(response.data.reverse());
  };

  useEffect(() => {
    getJobList();
  }, []);
  return (
    <div>
      {jobs.map((job) => {
        return <JobCard key={job.id} {...job} />;
      })}
    </div>
  );
}
