
import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "../src/Pages/Contact/Contact";
import Footer from "../src/Components/Footer/Footer";
import CartDetails from "./Components/Cart/CartDetails";
import toast, { Toaster } from 'react-hot-toast';
import Foods1 from "./Components/Foods1/Foods1";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/cart" element={<CartDetails />} />
          <Route exact path="/Foods" element={<Foods1/>} />
          
          
        </Routes>
        <Footer />
        <Toaster />
      </Router>
    </div>
  );
}

export default App;
