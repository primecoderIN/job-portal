import React, { useEffect } from "react";
import axios from "axios";
import JobCard from "./JobCard";

export default function Jobs({ jobs, setJobs, setApplyModal, setApplyID }) {
  const getJobList = async () => {
    const response = await axios.get(" http://localhost:5000/jobs");
    setJobs(response.data.reverse());
    console.log(response.data);
  };

  useEffect(() => {
    getJobList();
  }, []);
  return (
    <div>
      {jobs.map((job) => {
        return (
          <JobCard
            key={job.id}
            {...job}
            setApplyModal={setApplyModal}
            setApplyID={setApplyID}
          />
        );
      })}
    </div>
  );
}
