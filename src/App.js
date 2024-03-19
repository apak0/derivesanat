import "./App.css";
import Navbar from "./components/navbar";
import Container from "./components/container";
import Footer from "./components/footer";
import TopNav from "./components/topnav/TopNav";

function App() {
  return (
    <div className="app-container">
      <TopNav/>
      <Navbar className="navbar" />
      <Container className="container" />
      <Footer className="footer" />
    </div>
  );
}

export default App;
