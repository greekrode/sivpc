import { AnimatePresence } from "framer-motion";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EventDetails from "./pages/EventDetails.tsx";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Prizes from "./pages/Prizes";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route
          path="/events"
          element={
            <div className="flex flex-col flex-grow">
              <main className="flex-grow">
                <Events />
              </main>
              <Footer />
            </div>
          }
        />
        <Route
          path="/events/:round"
          element={
            <div className="flex flex-col flex-grow">
              <main className="flex-grow">
                <EventDetails />
              </main>
              <Footer />
            </div>
          }
        />
        <Route
          path="/prizes"
          element={
            <div className="flex flex-col flex-grow">
              <main className="flex-grow">
                <Prizes />
              </main>
              <Footer />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div className="flex flex-col flex-grow">
              <main className="flex-grow">
                <About />
              </main>
              <Footer />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div className="flex flex-col flex-grow">
              <main className="flex-grow">
                <Contact />
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
