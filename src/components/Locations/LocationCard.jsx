const Locationcard = (props) => {
  return (
    <div className="locationcard">
      <div className="card">
        <img src={props.locationImg} className="locationPic" />
        <p className="locationName"> {props.locationName} </p>
      </div>
    </div>
  );
};

export default Locationcard;
