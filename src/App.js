import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { useLanguage } from "./context/LanguageContext";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contact/Contact";

function App() {
  const { menu } = useLanguage();

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {menu ? <Menu /> : ""}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
