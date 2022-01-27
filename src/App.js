import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/Routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
