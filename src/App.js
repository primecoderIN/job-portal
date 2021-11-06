import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/home-components/Navbar";
import Home from "./components/Home";
import JobSearchPage from "./components/JobSearchPage";
import PostJobModal from "./components/PostJobModal";

function App() {
  const [PostModalOpen, setPostModal] = useState(false);
  return (
    <BrowserRouter className="App">
      <Navbar postModalOpen={PostModalOpen} setPostModal={setPostModal} />
      <PostJobModal postModalOpen={PostModalOpen} setPostModal={setPostModal} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<JobSearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
