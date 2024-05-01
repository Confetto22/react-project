import SecHeading from "../general-components/SecHeading";
import CatButtons from "./CatButtons";
import thumb from "../../../public/images/thumb.svg";
import house from "../../../public/images/home.svg";
import compass from "../../../public/images/compass.svg";
import dollar from "../../../public/images/dollar-sign.svg";
import moreicon from "../../../public/images/more-horizontal.svg";
import "./Categories.css";

const categoryTexts = [
  {
    id: 1,
    img: thumb,
    innerText: "Holiday Rentals",
    styles: {
      backgroundColor: "#f8c1c4",
    },
  },
  {
    id: 2,
    img: house,
    innerText: "Residential Spaces",
    styles: {
      backgroundColor: "#d5e9c6",
    },
  },
  {
    id: 3,
    img: compass,
    innerText: "Event Spaces",
    styles: {
      backgroundColor: "#e3c7de",
    },
  },
  {
    id: 4,
    img: dollar,
    innerText: "Commercial Properties",
    styles: {
      backgroundColor: "#bed6eb",
    },
  },
  {
    id: 5,
    img: moreicon,
    innerText: "More",
    styles: {
      backgroundColor: "#fcd8c0",
    },
  },
];

function createCatBT(individualBt) {
  return (
    <CatButtons
      img={individualBt.img}
      text={individualBt.innerText}
      style={individualBt.styles}
    />
  );
}

const categories = () => {
  return (
    <section className="categories">
      <SecHeading headingText="Browse From Top Categories" />
      <div className="category_buttons">{categoryTexts.map(createCatBT)}</div>
    </section>
  );
};

export default categories;
