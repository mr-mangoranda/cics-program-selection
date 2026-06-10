  import React from 'react';
  import { Database, Wifi, FileSpreadsheet, Monitor } from 'lucide-react';
  import { motion } from 'motion/react';
  import { Footer } from '../components/Footer';

  // Animation Variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    },
    exit: {
      opacity: 0,
    transition: { duration: 0.3 }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Home({ onNavigate }: { onNavigate: (view: string) => void }) {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariant}
      className="h-[100dvh] overflow-y-auto lg:overflow-hidden bg-gradient-to-br from-[#f6f3ff] via-[#f2f6ff] to-[#e1efff] font-sans text-slate-800 flex flex-col relative selection:bg-blue-200"
    >
      <main className="flex-grow flex flex-col items-center justify-center w-full max-w-7xl mx-auto py-6 lg:py-8 px-6 lg:px-12 z-10 relative">
        
        {/* Welcome Pill */}
        <motion.div variants={itemVariant} className="bg-[#daeaff] text-[#0d59b2] px-6 py-2 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase mb-3 lg:mb-5 shadow-sm border border-blue-100/50 backdrop-blur-sm bg-white/40">
          Welcome to the CICS Family!
        </motion.div>

          {/* Title */}
          <motion.h1 
            variants={itemVariant}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center text-[#0e5cdd] leading-[1.1] mb-3 lg:mb-5"
            style={{ textShadow: "4px 4px 0px #cfdffd" }}
          >
            <span className="block whitespace-normal sm:whitespace-nowrap">ANO TARA?</span>
            <span className="block whitespace-normal sm:whitespace-nowrap">COMSCIE FRESHMEN!?!</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={itemVariant} className="text-[#596a83] text-base lg:text-lg lg:text-xl font-medium mb-8 lg:mb-10 text-center max-w-2xl px-4">
            Ready to start your tech journey MSUAN? Select your path below!
          </motion.p>

          {/* Horizontal dividing line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d1dce8] to-transparent -z-10 hidden lg:block opacity-70"></div>

          {/* Departments Section */}
          <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-6 xl:gap-8 justify-center items-center">
            
            {/* DIS Department */}
            <motion.div variants={itemVariant} className="flex flex-col items-center flex-1 w-full max-w-3xl">
              {/* DIS Label */}
              <div className="bg-gradient-to-r from-[#4f46e5]/90 to-[#2563eb]/90 backdrop-blur-md text-white py-3 px-8 md:py-4 md:px-12 lg:px-16 rounded-3xl shadow-[0_12px_24px_rgba(37,99,235,0.25)] mb-8 text-center flex flex-col items-center justify-center min-w-[240px] w-auto border border-white/20">
                <h2 className="text-4xl md:text-5xl font-black mb-1 tracking-tight">DIS</h2>
                <p className="text-xs tracking-[0.15em] font-bold text-blue-100 uppercase">Dept. Information Systems</p>
              </div>

              {/* DIS Cards */}
              <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
                
                {/* Card 1 */}
                <motion.div whileHover={{ y: -5 }} variants={cardVariant} className="bg-white/70 backdrop-blur-md rounded-3xl p-6 py-8 sm:py-6 flex flex-col items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full sm:w-[200px] xl:w-[220px] aspect-auto sm:aspect-square group border-2 border-[#e0e7ff] hover:border-[#e0e7ff] relative z-10 opacity-70">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#f0f6ff] flex items-center justify-center mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
                    <Database className="w-8 h-8 text-[#0c5ade] relative z-10" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1f2937] text-center">IT – DATA BASE</h3>
                </motion.div>

                {/* Card 2 (Lowered slightly) */}
                <motion.div whileHover={{ y: -5 }} variants={cardVariant} className="bg-white/70 backdrop-blur-md rounded-3xl p-6 py-8 sm:py-6 flex flex-col items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full sm:w-[200px] xl:w-[220px] aspect-auto sm:aspect-square lg:mt-6 group border-2 border-[#e0e7ff] hover:border-[#e0e7ff] relative z-10 opacity-70">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#efeefe] flex items-center justify-center mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-indigo-400/20 rounded-full blur-xl animate-pulse"></div>
                    <Wifi className="w-8 h-8 text-[#4f46e5] relative z-10" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1f2937] text-center">IT – Networking</h3>
                </motion.div>

                {/* Card 3 */}
                <motion.div whileHover={{ y: -5 }} variants={cardVariant} className="bg-white/70 backdrop-blur-md rounded-3xl p-6 py-8 sm:py-6 flex flex-col items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full sm:w-[200px] xl:w-[220px] aspect-auto sm:aspect-square group border-2 border-[#e0e7ff] hover:border-[#e0e7ff] relative z-10 opacity-70">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#fdf2f8] flex items-center justify-center mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-pink-400/20 rounded-full blur-xl animate-pulse"></div>
                    <FileSpreadsheet className="w-8 h-8 text-[#c026d3] relative z-10" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1f2937] text-center">Information System</h3>
                </motion.div>

              </div>
            </motion.div>

            {/* DCS Department */}
            <motion.div variants={itemVariant} className="flex flex-col items-center flex-1 w-full max-w-[420px]">
              {/* DCS Label */}
              <div className="bg-gradient-to-r from-[#2563eb]/90 to-[#1d4ed8]/90 backdrop-blur-md text-white py-3 px-8 md:py-4 md:px-12 lg:px-16 rounded-3xl shadow-[0_12px_24px_rgba(29,78,216,0.25)] mb-8 text-center flex flex-col items-center justify-center min-w-[240px] w-auto border border-white/20">
                <h2 className="text-4xl md:text-5xl font-black mb-1 tracking-tight">DCS</h2>
                <p className="text-xs tracking-[0.15em] font-bold text-blue-100 uppercase">Dept. Computer Science</p>
              </div>

              {/* DCS Cards */}
              <div className="flex gap-6 w-full justify-center h-full">
                {/* Card 4 (Computer Science) - Click leads to roadmap */}
                <motion.div 
                  whileHover={{ scale: 1.05, y: -8 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate('roadmap')}
                  className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 py-8 sm:py-8 flex flex-col items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] transition-all duration-300 w-full max-w-[300px] xl:max-w-[340px] aspect-auto lg:aspect-square min-h-[200px] lg:min-h-[250px] cursor-pointer group border-2 border-[#dbeafe] hover:border-[#2563eb]/50 relative z-10 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#ecfeff] flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 group-hover:bg-[#0891b2] transition-all duration-500 relative z-10">
                    <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Monitor className="w-10 h-10 sm:w-12 sm:h-12 text-[#0891b2] group-hover:text-white transition-colors duration-300 relative z-10" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1f2937] text-center px-4 relative z-10 group-hover:text-[#0891b2] transition-colors">Computer Science</h3>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </main>

        <motion.div variants={itemVariant}>
          <Footer />
        </motion.div>

      </motion.div>
    );
  }
