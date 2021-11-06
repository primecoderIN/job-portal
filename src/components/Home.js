import React from "react";
import Hero from "../components/home-components/Hero";
import SearchBar from "./home-components/SearchBar";
import Jobs from "./home-components/Jobs";

export default function Home() {
  return (
    <div>
      <Hero />
      <SearchBar />
      <Jobs />
    </div>
  );
}
