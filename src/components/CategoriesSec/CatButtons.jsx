import "./CatButtons.css";

const CatButtons = (props) => {
  return (
    <button className="cat_bt">
      <img src={props.img} style={props.style} />
      {props.text}
    </button>
  );
};

export default CatButtons;
