import React from "react";
import Hero from "../components/home-components/Hero";
import SearchBar from "./home-components/SearchBar";
import Jobs from "./home-components/Jobs";

export default function Home({ jobs, setJobs, setApplyModal, setApplyID }) {
  return (
    <div>
      <Hero />
      <SearchBar />
      <Jobs
        jobs={jobs}
        setJobs={setJobs}
        setApplyModal={setApplyModal}
        setApplyID={setApplyID}
      />
    </div>
  );
}
