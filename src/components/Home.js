import React from "react";
import Hero from "../components/home-components/Hero";
import Navbar from "../components/home-components/Navbar";
import SearchBar from "./home-components/SearchBar";
import Jobs from "./home-components/Jobs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SearchBar />
      <Jobs />
    </div>
  );
}
