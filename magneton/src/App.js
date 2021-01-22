import "./App.css";
import DatePicker from "./DatePicker";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import Chart3 from "./Chart3";
import Buttons from "./Buttons";

function App() {
  return (
    <>
      <div className="blocks">
        <h4>Data Analytics Application Dashboard</h4>
        <div className="h4">
          <DatePicker />
        </div>
        <div className="refresh">
          <Buttons />
        </div>
        <Chart1 />
        <Chart2 />
        <Chart3 />
      </div>
    </>
  );
}

export default App;
