import React from "react";
import Destinations from "./Components/Destinations/Destinations";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";

import Search from "./Components/Search/Search";
import Selects from "./Components/Selects/Selects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
    </div>
  );
}

export default App;
