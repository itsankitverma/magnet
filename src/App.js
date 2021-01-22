import "./App.css";
import DatePicker from "./DatePicker";
import Chart2 from "./Chart2";
import Chart3 from "./Chart3";
import Buttons from "./Buttons";
import NewChart from './NewChart'

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
        <NewChart />
        <Chart2 />
        <Chart3 />
      </div>
    </>
  );
}

export default App;
