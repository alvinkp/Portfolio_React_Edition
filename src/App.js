import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Portfolio, Resume, Contact } from "./components/Main";

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
