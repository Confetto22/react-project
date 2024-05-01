import SecHeading from "../general-components/SecHeading";
import Locationcard from "./LocationCard";
import "./Locations.css";

const locationInfo = [
  {
    id: 1,
    name: "Kandy",
    image: "../../../public/images/locationimg1.svg",
  },
  {
    id: 2,
    name: "Anuradhaura",
    image: "../../../public/images/locationimg2.svg",
  },
  {
    id: 3,
    name: "Badulla",
    image: "../../../public/images/locationimg3.svg",
  },
  {
    id: 4,
    name: "Colombo",
    image: "../../../public/images/locationimg4.svg",
  },
  {
    id: 5,
    name: "Galle",
    image: "../../../public/images/locationimg5.svg",
  },
];

function createLocationcard(singleLocationCard) {
  return (
    <Locationcard
      locationImg={singleLocationCard.image}
      locationName={singleLocationCard.name}
    />
  );
}

const Locations = () => {
  return (
    <section className="locations_section">
      <SecHeading headingText="Featured Locations" />
      <div className="location_images">
        {locationInfo.map(createLocationcard)}
      </div>
    </section>
  );
};

export default Locations;
