import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { AdminAuthProvider, ProtectedAdminRoute } from './context/AdminAuthContext';
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
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminPrograms from './pages/admin/AdminPrograms';
import AdminApplications from './pages/admin/AdminApplications';
import './App.css';

// Public Layout with Header and Footer
const PublicLayout = ({ children }) => (
  <>
    <Header />
    <div className="flex-1">{children}</div>
    <Footer />
  </>
);

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <AdminAuthProvider>
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
                <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
                <Route path="/programs" element={<PublicLayout><Programs /></PublicLayout>} />
                <Route path="/programs/:slug" element={<PublicLayout><ProgramDetail /></PublicLayout>} />
                <Route path="/syllabus" element={<PublicLayout><Syllabus /></PublicLayout>} />
                <Route path="/instructors" element={<PublicLayout><Instructors /></PublicLayout>} />
                <Route path="/community" element={<PublicLayout><Community /></PublicLayout>} />
                <Route path="/events" element={<PublicLayout><Events /></PublicLayout>} />
                <Route path="/scholarship" element={<PublicLayout><Scholarship /></PublicLayout>} />
                <Route path="/philosophy" element={<PublicLayout><Philosophy /></PublicLayout>} />
                <Route path="/corporate" element={<PublicLayout><Corporate /></PublicLayout>} />
                <Route path="/alumni" element={<PublicLayout><Alumni /></PublicLayout>} />
                <Route path="/partners" element={<PublicLayout><Partners /></PublicLayout>} />
                <Route path="/certification" element={<PublicLayout><Certification /></PublicLayout>} />
                <Route path="/apply" element={<PublicLayout><Apply /></PublicLayout>} />
                <Route path="/quiz" element={<PublicLayout><Quiz /></PublicLayout>} />

                {/* Admin Routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<ProtectedAdminRoute><AdminDashboard /></ProtectedAdminRoute>} />
                <Route path="/admin/programs" element={<ProtectedAdminRoute><AdminPrograms /></ProtectedAdminRoute>} />
                <Route path="/admin/applications" element={<ProtectedAdminRoute><AdminApplications /></ProtectedAdminRoute>} />
                <Route path="/admin/instructors" element={<ProtectedAdminRoute><AdminDashboard /></ProtectedAdminRoute>} />
                <Route path="/admin/events" element={<ProtectedAdminRoute><AdminDashboard /></ProtectedAdminRoute>} />
                <Route path="/admin/alumni" element={<ProtectedAdminRoute><AdminDashboard /></ProtectedAdminRoute>} />
                <Route path="/admin/settings" element={<ProtectedAdminRoute><AdminDashboard /></ProtectedAdminRoute>} />
              </Routes>
            </div>
          </BrowserRouter>
        </AdminAuthProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;