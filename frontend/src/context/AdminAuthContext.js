import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if admin is logged in
    const savedAdmin = localStorage.getItem('adminAuth');
    if (savedAdmin) {
      setAdmin(JSON.parse(savedAdmin));
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    // Mock login - in production, this would be an API call
    if (email === 'admin@marketinq.az' && password === 'admin123') {
      const adminData = {
        id: 1,
        email,
        name: 'Admin',
        role: 'super_admin',
      };
      setAdmin(adminData);
      localStorage.setItem('adminAuth', JSON.stringify(adminData));
      return { success: true };
    }
    return { success: false, error: 'Invalid credentials' };
  };

  const logout = () => {
    setAdmin(null);
    localStorage.removeItem('adminAuth');
  };

  return (
    <AdminAuthContext.Provider value={{ admin, isLoading, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within AdminAuthProvider');
  }
  return context;
};

// Protected Route Component
export const ProtectedAdminRoute = ({ children }) => {
  const { admin, isLoading } = useAdminAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !admin) {
      navigate('/admin/login');
    }
  }, [admin, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="w-8 h-8 border-4 border-brand-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return admin ? children : null;
};