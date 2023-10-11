import "./App.css";
import Navbar from "./Components/Navbar";
import Welcome from "./Components/Welcome";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import Transactions from "./Components/Transactions";

function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
        <Services />
        <Transactions />
        <Footer />
      </div>
    </div>
  );
}

export default App;
