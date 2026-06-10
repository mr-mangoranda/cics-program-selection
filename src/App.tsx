import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Home from './pages/Home';
import CSRoadmap from './pages/CSRoadmap';
import CSSubjects from './pages/CSSubjects';
import CSTutorials from './pages/CSTutorials';
import ITSystemRoadmap from './pages/ITSystemRoadmap';
import ITDatabaseSubjects from './pages/ITDatabaseSubjects';
import ITDatabaseTutorials from './pages/ITDatabaseTutorials';
import ITDatabaseRoadmap from './pages/ITDatabaseRoadmap';
import ITNetworkingRoadmap from './pages/ITNetworkingRoadmap';
import ITNetworkingSubjects from './pages/ITNetworkingSubjects';
import ITNetworkingTutorials from './pages/ITNetworkingTutorials';

export default function App() {
  const [view, setView] = useState<any>('home');
  
  return (
    <AnimatePresence mode="wait">
      {view === 'home' && <Home key="home" onNavigate={setView} />}
      {view === 'roadmap' && <CSRoadmap key="roadmap" onNavigate={setView} />}
      {view === 'cssubjects' && <CSSubjects key="cssubjects" onNavigate={setView} />}
      {view === 'cstutorials' && <CSTutorials key="cstutorials" onNavigate={setView} />}
      {view === 'itdb-subjects' && <ITDatabaseSubjects key="itdb-subjects" onNavigate={setView} />}
      {view === 'itdb-tutorials' && <ITDatabaseTutorials key="itdb-tutorials" onNavigate={setView} />}
      {view === 'it-database-roadmap' && <ITDatabaseRoadmap key="it-database-roadmap" onNavigate={setView} />}
      {view === 'it-system-roadmap' && <ITSystemRoadmap key="it-system-roadmap" onNavigate={setView} />}
      {view === 'itnw-subjects' && <ITNetworkingSubjects key="itnw-subjects" onNavigate={setView} />}
      {view === 'itnw-tutorials' && <ITNetworkingTutorials key="itnw-tutorials" onNavigate={setView} />}
      {view === 'it-networking-roadmap' && <ITNetworkingRoadmap key="it-networking-roadmap" onNavigate={setView} />}
    </AnimatePresence>
  );
}
