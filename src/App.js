import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/home-components/Navbar";
import Home from "./components/Home";
import JobSearchPage from "./components/JobSearchPage";
import PostJob from "./components/PostJob";

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/search-job" element={<JobSearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
