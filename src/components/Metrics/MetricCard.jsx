import "./Metrics.css";

const MetricCard = (props) => {
  return (
    <div className="metric_card">
      <h2 className="metricFig"> {props.figure} </h2>
      <p className="metricDet">Total Listings in the System</p>
    </div>
  );
};

export default MetricCard;
