const ListFilter = (props) => {
  return (
    <button className="filterBt" style={props.styles}>
      {props.text}
    </button>
  );
};

export default ListFilter;
