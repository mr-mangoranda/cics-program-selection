import React from 'react';
import { Database, Wifi, FileSpreadsheet, Monitor } from 'lucide-react';
import { Footer } from '../components/Footer';

export default function Home({ onNavigate }: { onNavigate: (view: string) => void }) {
  return (
    <div className="h-[100dvh] overflow-y-auto lg:overflow-hidden bg-gradient-to-br from-[#f6f3ff] via-[#f2f6ff] to-[#e1efff] font-sans text-slate-800 flex flex-col relative selection:bg-blue-200">
      <main className="flex-grow flex flex-col items-center justify-center w-full max-w-7xl mx-auto py-6 lg:py-8 px-6 lg:px-12 z-10 relative">
        
        {/* Welcome Pill */}
        <div className="bg-[#daeaff] text-[#0d59b2] px-6 py-2 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase mb-3 lg:mb-5 shadow-sm border border-blue-100/50">
          Welcome to the CICS Family!
        </div>

        {/* Title */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center text-[#0e5cdd] leading-[1.1] mb-3 lg:mb-5"
          style={{ textShadow: "4px 4px 0px #cfdffd" }}
        >
          <span className="block whitespace-normal sm:whitespace-nowrap">CHOOSE YOUR</span>
          <span className="block whitespace-normal sm:whitespace-nowrap">PROGRAM FRESHIEE!!</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[#596a83] text-base lg:text-lg lg:text-xl font-medium mb-8 lg:mb-10 text-center max-w-2xl px-4">
          Ready to start your tech journey MSUAN? Select your path below!
        </p>

        {/* Horizontal dividing line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d1dce8] to-transparent -z-10 hidden lg:block opacity-70"></div>

        {/* Departments Section */}
        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-6 xl:gap-8 justify-center items-center">
          
          {/* DIS Department */}
          <div className="flex flex-col items-center flex-1 w-full max-w-3xl">
            {/* DIS Label */}
            <div className="bg-gradient-to-r from-[#4f46e5] to-[#2563eb] text-white py-3 px-8 md:py-4 md:px-12 lg:px-16 rounded-3xl shadow-[0_12px_24px_rgba(37,99,235,0.25)] mb-8 text-center flex flex-col items-center justify-center min-w-[240px] w-auto">
              <h2 className="text-4xl md:text-5xl font-black mb-1 tracking-tight">DIS</h2>
              <p className="text-xs tracking-[0.15em] font-bold text-blue-100 uppercase">Dept. Information Systems</p>
            </div>

            {/* DIS Cards */}
            <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
              
              {/* Card 1 */}
              <div className="bg-white rounded-3xl p-6 py-8 sm:py-6 flex flex-col items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.12)] hover:-translate-y-2 transition-all duration-300 w-full sm:w-[200px] xl:w-[220px] aspect-auto sm:aspect-square cursor-pointer group border-2 border-[#e0e7ff] hover:border-[#4f46e5]/50 relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#f0f6ff] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#0c5ade] transition-all duration-300">
                  <Database className="w-8 h-8 text-[#0c5ade] group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#1f2937] text-center">IT – DATA BASE</h3>
              </div>

              {/* Card 2 (Lowered slightly) */}
              <div className="bg-white rounded-3xl p-6 py-8 sm:py-6 flex flex-col items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(79,70,229,0.12)] hover:-translate-y-2 transition-all duration-300 w-full sm:w-[200px] xl:w-[220px] aspect-auto sm:aspect-square lg:mt-6 cursor-pointer group border-2 border-[#e0e7ff] hover:border-[#4f46e5]/50 relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#efeefe] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#4f46e5] transition-all duration-300">
                  <Wifi className="w-8 h-8 text-[#4f46e5] group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#1f2937] text-center">IT – Networking</h3>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-3xl p-6 py-8 sm:py-6 flex flex-col items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(217,70,239,0.12)] hover:-translate-y-2 transition-all duration-300 w-full sm:w-[200px] xl:w-[220px] aspect-auto sm:aspect-square cursor-pointer group border-2 border-[#e0e7ff] hover:border-[#4f46e5]/50 relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#fdf2f8] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#c026d3] transition-all duration-300">
                  <FileSpreadsheet className="w-8 h-8 text-[#c026d3] group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#1f2937] text-center">Information System</h3>
              </div>

            </div>
          </div>

          {/* DCS Department */}
          <div className="flex flex-col items-center flex-1 w-full max-w-[420px]">
             {/* DCS Label */}
             <div className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white py-3 px-8 md:py-4 md:px-12 lg:px-16 rounded-3xl shadow-[0_12px_24px_rgba(29,78,216,0.25)] mb-8 text-center flex flex-col items-center justify-center min-w-[240px] w-auto">
              <h2 className="text-4xl md:text-5xl font-black mb-1 tracking-tight">DCS</h2>
              <p className="text-xs tracking-[0.15em] font-bold text-blue-100 uppercase">Dept. Computer Science</p>
            </div>

            {/* DCS Cards */}
            <div className="flex gap-6 w-full justify-center h-full">
              {/* Card 4 (Computer Science) - Click leads to roadmap */}
              <div 
                onClick={() => onNavigate('roadmap')}
                className="bg-white rounded-3xl p-6 py-8 sm:py-8 flex flex-col items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(6,182,212,0.12)] hover:-translate-y-2 transition-all duration-300 w-full max-w-[300px] xl:max-w-[340px] aspect-auto lg:aspect-square min-h-[200px] lg:min-h-[250px] cursor-pointer group border-2 border-[#dbeafe] hover:border-[#2563eb]/50 relative z-10"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#ecfeff] flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 group-hover:bg-[#0891b2] transition-all duration-300">
                  <Monitor className="w-10 h-10 sm:w-12 sm:h-12 text-[#0891b2] group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1f2937] text-center px-4">Computer Science</h3>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />

    </div>
  );
}
