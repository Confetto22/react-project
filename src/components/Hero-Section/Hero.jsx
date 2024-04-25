import "./Hero.css";
import searchGrey from "../../../public/images/search.svg";
import locationIcon from "../../../public/images/map-pin.svg";
import chevronDown from "../../../public/images/chevron-down.svg";
import searchWhite from "../../../public/images/search-white.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-intro">
        <h1>
          Discover Your <span className="redText">Perfect Rental</span>
        </h1>
        <p>Rent Cars, Houses, and Items in just a Few Clicks</p>
      </div>
      <div className="hero_buttons">
        <button className="placesBt">Places</button>
        <button className="ridesBt">Rides</button>
        <button className="thingsBt">Things</button>
      </div>
      <div className="searchInfo_box">
        <div className="searchText">
          <img src={searchGrey} />
          <input
            type="text"
            placeholder="Search for cars, houses, and more..."
          />
        </div>
        <div className="searchText">
          <img src={locationIcon} />
          <input type="text" placeholder="Select Location" />
          <img src={chevronDown} className="chevron" />
        </div>
        <button className="herosearch_bt">
          {" "}
          <span className="searchicon">
            {" "}
            <img src={searchWhite} />{" "}
          </span>{" "}
          Search Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
