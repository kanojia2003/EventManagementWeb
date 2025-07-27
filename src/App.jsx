import {
  BrowserRouter as Router,
  useLocation,
  Routes,
  Route,
} from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import AboutRoute from "./routes/AboutRoute";
import ServicesRoute from "./routes/ServicesRoute";
import GalleryRoute from "./routes/GalleryRoute";
import GalleryCategoryRoute from "./routes/GalleryCategoryRoute";
import TestimonialsRoute from "./routes/TestimonialsRoute";
import ContactRoute from "./routes/ContactRoute";
import { AnimatePresence } from "framer-motion";

function AppWrapper() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/about" element={<AboutRoute />} />
        <Route path="/services" element={<ServicesRoute />} />
        <Route path="/gallery" element={<GalleryRoute />} />
        <Route path="/gallery/:category" element={<GalleryCategoryRoute />} />
        <Route path="/testimonials" element={<TestimonialsRoute />} />
        <Route path="/contact" element={<ContactRoute />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
