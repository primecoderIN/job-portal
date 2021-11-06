import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/home-components/Navbar";
import Home from "./components/Home";
import JobSearchPage from "./components/JobSearchPage";
import PostJobModal from "./components/PostJobModal";

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
      <PostJobModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<JobSearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
