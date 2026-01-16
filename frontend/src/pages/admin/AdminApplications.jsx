import React, { useState } from 'react';
import AdminLayout from './AdminLayout';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Search, Eye, CheckCircle, XCircle, Clock, Filter } from 'lucide-react';

const AdminApplications = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const applications = [
    { id: 1, name: 'Aynur Məmmədova', email: 'aynur@email.com', phone: '+994501234567', program: 'Digital Marketinq', date: '2025-08-15', status: 'new' },
    { id: 2, name: 'Elvin Həsənov', email: 'elvin@email.com', phone: '+994502345678', program: 'Brend Menecmenti', date: '2025-08-14', status: 'reviewed' },
    { id: 3, name: 'Günel Əliyeva', email: 'gunel@email.com', phone: '+994503456789', program: 'SMM', date: '2025-08-13', status: 'approved' },
    { id: 4, name: 'Tural Qasımov', email: 'tural@email.com', phone: '+994504567890', program: 'Marketinq MBA', date: '2025-08-12', status: 'rejected' },
    { id: 5, name: 'Səbinə Rüstəmova', email: 'sabina@email.com', phone: '+994505678901', program: 'Content Marketinq', date: '2025-08-11', status: 'approved' },
    { id: 6, name: 'Rəşad İsmayılov', email: 'rashad@email.com', phone: '+994506789012', program: 'Digital Marketinq', date: '2025-08-10', status: 'new' },
  ];

  const statusConfig = {
    new: { label: 'Yeni', color: 'bg-blue-100 text-blue-700', icon: Clock },
    reviewed: { label: 'Baxılıb', color: 'bg-yellow-100 text-yellow-700', icon: Eye },
    approved: { label: 'Təsdiqlənib', color: 'bg-green-100 text-green-700', icon: CheckCircle },
    rejected: { label: 'Rədd edilib', color: 'bg-red-100 text-red-700', icon: XCircle },
  };

  const filteredApplications = applications.filter((app) => {
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || app.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-brand-dark">Müraciətlər</h1>
          <p className="text-brand-muted">{applications.length} müraciət</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-muted" />
          <Input
            placeholder="Ad və ya email ilə axtar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12"
          />
        </div>
        <div className="flex gap-2">
          {['all', 'new', 'reviewed', 'approved', 'rejected'].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                filterStatus === status
                  ? 'bg-brand-primary text-white'
                  : 'bg-white border border-slate-200 text-brand-muted hover:bg-slate-50'
              }`}
            >
              {status === 'all' ? 'Hamısı' : statusConfig[status]?.label}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-medium text-brand-muted">Namizəd</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-brand-muted">Proqram</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-brand-muted">Telefon</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-brand-muted">Tarix</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-brand-muted">Status</th>
                <th className="text-right px-6 py-4 text-sm font-medium text-brand-muted">Əməliyyat</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredApplications.map((app) => {
                const StatusIcon = statusConfig[app.status].icon;
                return (
                  <tr key={app.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent flex items-center justify-center text-white font-medium">
                          {app.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-brand-dark">{app.name}</p>
                          <p className="text-sm text-brand-muted">{app.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-brand-dark">{app.program}</td>
                    <td className="px-6 py-4 text-brand-muted">{app.phone}</td>
                    <td className="px-6 py-4 text-brand-muted">{app.date}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${statusConfig[app.status].color}`}>
                        <StatusIcon className="w-3 h-3" />
                        {statusConfig[app.status].label}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="outline" size="sm">Bax</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminApplications;