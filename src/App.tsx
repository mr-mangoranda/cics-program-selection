import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Home from './pages/Home';
import CSRoadmap from './pages/CSRoadmap';
import CSSubjects from './pages/CSSubjects';
import CSTutorials from './pages/CSTutorials';
import BSISRoadmap from './pages/BSIS-Roadmap';

export default function App() {
  const [view, setView] = useState<any>('home');
  
  return (
    <AnimatePresence mode="wait">
      {view === 'home' && <Home key="home" onNavigate={setView} />}
      {view === 'roadmap' && <CSRoadmap key="roadmap" onNavigate={setView} />}
      {view === 'cssubjects' && <CSSubjects key="cssubjects" onNavigate={setView} />}
      {view === 'cstutorials' && <CSTutorials key="cstutorials" onNavigate={setView} />}
      {view === 'bsis-roadmap' && <BSISRoadmap key="bsis-roadmap" onNavigate={setView} />}

    </AnimatePresence>
  );
}
