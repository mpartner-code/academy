import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import ProgramDetail from './pages/ProgramDetail';
import Instructors from './pages/Instructors';
import Events from './pages/Events';
import Community from './pages/Community';
import Apply from './pages/Apply';
import Quiz from './pages/Quiz';
import Scholarship from './pages/Scholarship';
import Philosophy from './pages/Philosophy';
import Corporate from './pages/Corporate';
import Alumni from './pages/Alumni';
import Partners from './pages/Partners';
import Syllabus from './pages/Syllabus';
import Certification from './pages/Certification';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/programs/:slug" element={<ProgramDetail />} />
              <Route path="/syllabus" element={<Syllabus />} />
              <Route path="/instructors" element={<Instructors />} />
              <Route path="/community" element={<Community />} />
              <Route path="/events" element={<Events />} />
              <Route path="/scholarship" element={<Scholarship />} />
              <Route path="/philosophy" element={<Philosophy />} />
              <Route path="/corporate" element={<Corporate />} />
              <Route path="/alumni" element={<Alumni />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/certification" element={<Certification />} />
              <Route path="/apply" element={<Apply />} />
              <Route path="/quiz" element={<Quiz />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;