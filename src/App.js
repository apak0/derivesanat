import "./App.css";
import Navbar from "./components/navbar";
import Container from "./components/container";
import Footer from "./components/footer";

function App() {
  return (
    <div className="app-container">
      <Navbar className="navbar" />
      <Container className="container" />
      <Footer className="footer" />
    </div>
  );
}

export default App;
