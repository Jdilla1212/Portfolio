import "./App.css";
import Navbar from "./components/Navbar/Navbar"
import Main from "./components/main";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Home from "./components/Home/home"
// import About from "./components/about/about"
// import Contact from "./components/Contact/contact"
// import Projects from "./components/Projects/projects"
// import Resume from "./components/Resume/resume"

function App() {
  return (
    <Router>
    <div>
    <Navbar />
      {/* <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} /> */}
      <Main />
    </div>
    </Router>
  );
}

export default App;
