import "./App.css";
import Navbar from "./components/Navbar/Navbar"
import Main from "./components/main";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
    <div>
    <Navbar />
      <Main />
    </div>
    </Router>
  );
}

export default App;
