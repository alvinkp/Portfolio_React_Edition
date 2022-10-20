import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Portfolio, Resume, Contact } from "./components/Main";

const portfolio = [
  {
    imgLink: "./images/RigMatchMe.PNG",
    imgAltText:
      "Screenshot of RigMatchMe site showing an over the shoulder picture of a drummer at a concert.",
    cardTitle: "Rig Match Me",
    cardText:
      '"Rig Match Me", is where budding musicians go to find the best gear!',
    cardLink: "https://www.rigmatchme.com",
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Portfolio_React_Edition" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
