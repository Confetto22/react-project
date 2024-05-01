import "./Metrics.css";
import MetricCard from "./MetricCard";

const MetricFigures = [
  {
    id: 1,
    figure: "5000+",
  },
  {
    id: 2,
    figure: "1000+",
  },
  {
    id: 3,
    figure: "30+",
  },
];

function createMetricCard(singleMetric) {
  return <MetricCard figure={singleMetric.figure} />;
}

const Metrics = () => {
  return (
    <section className="metrics_section">
      <h2 className="metricsIntro">Insights and Performance Metrics</h2>
      <div className="allMetrics">{MetricFigures.map(createMetricCard)}</div>
    </section>
  );
};

export default Metrics;
