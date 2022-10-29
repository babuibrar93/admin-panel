import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import CenterDashboard from "./components/CenterDashboard/CenterDashboard";
import RightSide from "./components/RightSide/RightSide";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <CenterDashboard />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
