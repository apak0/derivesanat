import "./App.css";
import Navbar from "./components/navbar";
import Container from "./components/container";
import Footer from "./components/footer";
import TopNav from "./components/topnav/TopNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/pages/aboutUs/AboutUs";
import ContactUs from "./components/pages/contactUs/ContactUs";
import Products from "./components/pages/products/Products";
import { ChakraProvider } from '@chakra-ui/react'
import Error404 from "./components/Error/Error";

function App() {
  return (
    <Router>
       <ChakraProvider>
      <TopNav />
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" exact element={<Container />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/contactus" exact element={<ContactUs />} />
          <Route path="/aboutus" exact element={<AboutUs />} />
        <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
      <Footer/>
      </ChakraProvider>
    </Router>
  );
}

export default App;
