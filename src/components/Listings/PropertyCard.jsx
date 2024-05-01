const PropertyCard = (props) => {
  return (
    <div className="property">
      <p className="propertyStatus"> {props.status} </p>
      <img src={props.img} className="propertyImg" />
      <p className="price_duration">
        <span className="propertyprice"> {props.priceTag} </span>{" "}
        {props.duration}
      </p>
      <h2 className="propertyName"> {props.propertyName} </h2>
      <div className="propertyDetails">
        <p> {props.rooms} </p>
        <p> {props.bathrooms} </p>
        <p> {props.area} </p>
      </div>
      <div className="sellerDetails">
        <div className="sellerInfo">
          <img src={props.sellerImg} alt="" />
          <div className="sellerName">
            <h5> {props.sellerName} </h5>
            <p> {props.sellerRole} </p>
          </div>
        </div>
        <img src="../../../public/images/heart.svg" className="heart" />
      </div>
    </div>
  );
};

export default PropertyCard;
