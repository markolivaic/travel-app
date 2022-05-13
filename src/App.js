import React from "react";
import ImgCarousel from "./Components/Carousel/ImgCarousel";
import Destinations from "./Components/Destinations/Destinations";
import Footer from "./Components/Footer/Footer";
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
      <ImgCarousel />
      <Footer />
    </div>
  );
}

export default App;
