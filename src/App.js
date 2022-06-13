import "./App.css";
import Home from "./Components/Home/Home";
import MySkills from "./Components/MySkills/MySkills";
import Navbar from "./Components/Navbar/Navbar";
import AboutMe from "./Components/AboutMe/AboutMe";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import { Route, Switch } from "react-router-dom";
import Projects from "./Components/MyProjects/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
          <MySkills />
          <Projects />
          <AboutMe />
          <ContactMe />
        </Route>
        <Route path="/Home" exact>
          <Home />
        </Route>
        <Route path="/MySkills" exact>
          <MySkills />
        </Route>
        <Route path="/Projects" exact>
          <Projects />
        </Route>
        <Route path="/AboutMe" exact>
          <AboutMe />
        </Route>
        <Route path="/ContactME" exact>
          <ContactMe />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
