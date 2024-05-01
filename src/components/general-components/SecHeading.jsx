import underline from "../../../public/images/Group 33507.svg";
import "./SecHEading.css";

const SecHEading = (props) => {
  return (
    <div className="section_heding">
      <h2> {props.headingText} </h2>
      <img src={underline} />
    </div>
  );
};

export default SecHEading;
