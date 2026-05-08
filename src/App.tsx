import { useState } from 'react';
import Home from './pages/Home';
import CSRoadmap from './pages/CSRoadmap';
import CSSubjects from './pages/CSSubjects';
import CSTutorials from './pages/CSTutorials';

export default function App() {
  const [view, setView] = useState<'home' | 'roadmap' | 'cssubjects' | 'cstutorials'>('home');
  
  if (view === 'home') return <Home onNavigate={setView} />;
  if (view === 'roadmap') return <CSRoadmap onNavigate={setView} />;
  if (view === 'cssubjects') return <CSSubjects onNavigate={setView} />;
  if (view === 'cstutorials') return <CSTutorials onNavigate={setView} />;
  
  return <Home onNavigate={setView} />;
}
