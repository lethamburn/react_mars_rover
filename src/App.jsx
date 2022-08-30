import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Rover from "./pages/Rover";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rover" element={<Rover />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
