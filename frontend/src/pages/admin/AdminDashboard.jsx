import React from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import {
  Users,
  BookOpen,
  FileText,
  Calendar,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  UserPlus,
  DollarSign,
} from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    {
      label: 'Ümumi müraciətlər',
      value: '1,284',
      change: '+12.5%',
      isPositive: true,
      icon: FileText,
      color: '#0ea5e9',
    },
    {
      label: 'Aktiv tələbələr',
      value: '342',
      change: '+8.2%',
      isPositive: true,
      icon: Users,
      color: '#8b5cf6',
    },
    {
      label: 'Bu aykı gəlir',
      value: '₼45,200',
      change: '-2.4%',
      isPositive: false,
      icon: DollarSign,
      color: '#22d3ee',
    },
    {
      label: 'Sayt ziyarətçiləri',
      value: '8,429',
      change: '+18.7%',
      isPositive: true,
      icon: Eye,
      color: '#f59e0b',
    },
  ];

  const recentApplications = [
    { id: 1, name: 'Aynur Məmmədova', program: 'Digital Marketinq', date: '2 saat əvvəl', status: 'new' },
    { id: 2, name: 'Elvin Həsənov', program: 'Brend Menecmenti', date: '5 saat əvvəl', status: 'reviewed' },
    { id: 3, name: 'Günel Əliyeva', program: 'SMM', date: '1 gün əvvəl', status: 'approved' },
    { id: 4, name: 'Tural Qasımov', program: 'Marketinq MBA', date: '2 gün əvvəl', status: 'pending' },
    { id: 5, name: 'Səbinə Rüstəmova', program: 'Content Marketinq', date: '3 gün əvvəl', status: 'approved' },
  ];

  const upcomingEvents = [
    { id: 1, title: 'Marketing Summit 2025', date: '15 Sentyabr', attendees: 120 },
    { id: 2, title: 'Digital Marketing Workshop', date: '28 Avqust', attendees: 45 },
    { id: 3, title: 'Brand Strategy Masterclass', date: '5 Sentyabr', attendees: 30 },
  ];

  const getStatusBadge = (status) => {
    const styles = {
      new: 'bg-blue-100 text-blue-700',
      reviewed: 'bg-yellow-100 text-yellow-700',
      approved: 'bg-green-100 text-green-700',
      pending: 'bg-slate-100 text-slate-700',
    };
    const labels = {
      new: 'Yeni',
      reviewed: 'Baxılıb',
      approved: 'Təsdiqlənib',
      pending: 'Gözləyir',
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

  return (
    <AdminLayout>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${stat.color}15` }}
              >
                <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
              </div>
              <div
                className={`flex items-center gap-1 text-sm font-medium ${
                  stat.isPositive ? 'text-green-600' : 'text-red-500'
                }`}
              >
                {stat.isPositive ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
                {stat.change}
              </div>
            </div>
            <p className="text-2xl font-bold text-brand-dark mb-1">{stat.value}</p>
            <p className="text-sm text-brand-muted">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Applications */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <h2 className="font-semibold text-brand-dark">Son müraciətlər</h2>
            <Link
              to="/admin/applications"
              className="text-sm text-brand-primary hover:underline"
            >
              Hamısını gör
            </Link>
          </div>
          <div className="divide-y divide-slate-100">
            {recentApplications.map((app) => (
              <div
                key={app.id}
                className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent flex items-center justify-center text-white font-medium">
                    {app.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-brand-dark">{app.name}</p>
                    <p className="text-sm text-brand-muted">{app.program}</p>
                  </div>
                </div>
                <div className="text-right">
                  {getStatusBadge(app.status)}
                  <p className="text-xs text-brand-muted mt-1">{app.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <h2 className="font-semibold text-brand-dark">Gələcək tədbirlər</h2>
            <Link
              to="/admin/events"
              className="text-sm text-brand-primary hover:underline"
            >
              Hamısı
            </Link>
          </div>
          <div className="p-4 space-y-4">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-brand-dark">{event.title}</h3>
                  <Calendar className="w-4 h-4 text-brand-muted" />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-brand-muted">{event.date}</span>
                  <span className="flex items-center gap-1 text-brand-primary">
                    <Users className="w-3 h-3" />
                    {event.attendees}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Yeni proqram', icon: BookOpen, path: '/admin/programs', color: '#0ea5e9' },
          { label: 'Təlimçi əlavə et', icon: UserPlus, path: '/admin/instructors', color: '#8b5cf6' },
          { label: 'Tədbir yarat', icon: Calendar, path: '/admin/events', color: '#f59e0b' },
          { label: 'Hesabatlar', icon: TrendingUp, path: '/admin/reports', color: '#22d3ee' },
        ].map((action, idx) => (
          <Link
            key={idx}
            to={action.path}
            className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:shadow-md transition-all group"
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
              style={{ backgroundColor: `${action.color}15` }}
            >
              <action.icon className="w-5 h-5" style={{ color: action.color }} />
            </div>
            <span className="font-medium text-brand-dark">{action.label}</span>
          </Link>
        ))}
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;