import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";
import HomePage from "./pages/HomePage";

function App() {
  useEffect(() => {
    AOS.init(
      {
        debounceDelay: 50,
        duration: 1000,
        offset: 100,
        once: false,
        mirror: true
      }
    );
  }, [])
  return (
    <div>
      <TopBar />
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
