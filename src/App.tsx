import { useState } from 'react';
import Home from './pages/Home';
import CSRoadmap from './pages/CSRoadmap';

export default function App() {
  const [view, setView] = useState<'home' | 'roadmap'>('home');
  
  return view === 'home' ? <Home onNavigate={setView} /> : <CSRoadmap onNavigate={setView} />;
}
