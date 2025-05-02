import { Routes, Route } from 'react-router-dom';
import AppRoutes from './components/routes/HomeRoutes';
import BindiInitiative from './components/pages/BindiInitiative';

import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Volunteer from './pages/Volunteer';
import Impact from './pages/Impact';
import Stories from './pages/Stories';
import Events from './pages/Events';
import Partners from './pages/Partners';
import Resources from './pages/Resources';
import Home from './pages/Home';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<AppRoutes />} />
      <Route path="/Binidi-Initiative" element={<BindiInitiative />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/volunteer" element={<Volunteer />} />
      <Route path="/impact" element={<Impact />} />
      <Route path="/stories" element={<Stories />} />
      <Route path="/events" element={<Events />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
