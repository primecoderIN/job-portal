import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/home-components/Navbar";
import Home from "./components/Home";
import JobSearchPage from "./components/JobSearchPage";
import PostJobModal from "./components/PostJobModal";
import JobApplyModal from "./components/JobApplyModal";
import { HrPanel } from "./components/HrPanel";

function App() {
  const [jobs, setJobs] = useState([]);
  const [PostModalOpen, setPostModal] = useState(false);
  const [applyModalOpen, setApplyModal] = useState(false);
  const [applyID, setApplyID] = useState("");
  return (
    <BrowserRouter className="App">
      <Navbar postModalOpen={PostModalOpen} setPostModal={setPostModal} />
      <JobApplyModal
        applyModalOpen={applyModalOpen}
        setApplyModal={setApplyModal}
        applyID={applyID}
      />
      <PostJobModal
        postModalOpen={PostModalOpen}
        setPostModal={setPostModal}
        setJobs={setJobs}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              jobs={jobs}
              setJobs={setJobs}
              setApplyModal={setApplyModal}
              setApplyID={setApplyID}
              applyModalOpen={applyModalOpen}
            />
          }
        />
        <Route path="/search" element={<JobSearchPage />} />
        <Route path="recruiter" element={<HrPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
