import { Chart } from "react-google-charts";

const data = [
  ["Social Media", "billion MAUs"],
  ["Facebook", 3.03],
  ["YouTube", 2.5],
  ["WhatsApp", 2],
  ["Instagram", 2],
  ["WeChat", 1.3],
  ["TikTok", 1.05],
];

const options = {
  title: "Top Social Media Sites in 2023"
};

function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
export default App;
