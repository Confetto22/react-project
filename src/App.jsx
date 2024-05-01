import "./App.css";
import Nav from "./components/Navbar/Nav";
import Hero from "./components/Hero-Section/Hero";
import Categories from "./components/CategoriesSec/Categories";
import Listing from "./components/Listings/Listing";
import Metrics from "./components/Metrics/Metrics";
import Locations from "./components/Locations/Locations";
import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";
import MenuWindow from "./components/Menuwindow/MenuWindow";

function App() {
  return (
    <>
      <MenuWindow />
      <Nav />
      <Hero />
      <Categories />
      <Listing />
      <Metrics />
      <Locations />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
