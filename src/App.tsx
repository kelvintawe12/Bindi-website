import { Routes, Route } from 'react-router-dom';
import AppRoutes from './components/routes/HomeRoutes';
import BindiInitiative from './components/pages/BindiInitiative';
export function App() {
  return (
    <Routes>
      <Route path="/" element={<AppRoutes />} />
      <Route path="/Binidi-Initiative" element={<BindiInitiative />} />
    </Routes>
  );
}

export default App;
