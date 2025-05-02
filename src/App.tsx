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

import { Layout } from './components/Layout';
import { AppProvider } from './context/AppContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Chatbot } from './components/common/Chatbot';

export function App() {
  return (
    <AppProvider>
      <ErrorBoundary>
        <Chatbot />
        <Routes>
          <Route path="/" element={<AppRoutes />} />
          <Route path="/bindi" element={<BindiInitiative />} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/blog" element={<Layout><Blog /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/donate" element={<Layout><Donate /></Layout>} />
          <Route path="/volunteer" element={<Layout><Volunteer /></Layout>} />
          <Route path="/impact" element={<Layout><Impact /></Layout>} />
          <Route path="/stories" element={<Layout><Stories /></Layout>} />
          <Route path="/events" element={<Layout><Events /></Layout>} />
          <Route path="/partners" element={<Layout><Partners /></Layout>} />
          <Route path="/resources" element={<Layout><Resources /></Layout>} />
          <Route path="/home" element={<Layout><Home /></Layout>} />
        </Routes>
      </ErrorBoundary>
    </AppProvider>
  );
}

export default App;
