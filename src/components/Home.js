import React from "react";
import Hero from "../components/home-components/Hero";
import Navbar from "../components/home-components/Navbar";
import SearchBar from "./home-components/SearchBar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SearchBar />
    </div>
  );
}
