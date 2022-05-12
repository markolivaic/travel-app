import React from "react";
import Destinations from "./Components/Destinations/Destinations";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Destinations />
    </div>
  );
}

export default App;
