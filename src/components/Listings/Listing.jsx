import SecHEading from "../general-components/SecHeading";
import ListFilter from "./ListFilter";
import "./Listing.css";
import PropertyCard from "./PropertyCard";
import propertiesArray from "./AllProperties";

const filterItems = [
  {
    id: 1,
    textDetails: "All Items (5125)",
  },
  {
    id: 2,
    textDetails: "Residential Spaces (64)",
    styling: {
      backgroundColor: "#b9b9b9",
      color: "#494949",
    },
  },
];

function createFilters(singleText) {
  return (
    <ListFilter text={singleText.textDetails} styles={singleText.styling} />
  );
}

function createProperty(singleProperty) {
  return (
    <PropertyCard
      status={singleProperty.status}
      img={singleProperty.image}
      priceTag={singleProperty.priceTag}
      duration={singleProperty.duration}
      propertyName={singleProperty.propertyName}
      rooms={singleProperty.rooms}
      bathrooms={singleProperty.bathrooms}
      area={singleProperty.area}
      sellerImg={singleProperty.sellerImg}
      sellerName={singleProperty.sellerName}
      sellerRole={singleProperty.sellerRole}
    />
  );
}

const Listing = () => {
  return (
    <section className="listing">
      <SecHEading headingText="Featured Listings" />
      <div className="listing_filter">{filterItems.map(createFilters)}</div>
      <div className="properties">{propertiesArray.map(createProperty)}</div>
      <button className="loadMore">Load More</button>
    </section>
  );
};

export default Listing;
