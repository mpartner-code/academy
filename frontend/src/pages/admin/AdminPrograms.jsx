import React, { useState } from 'react';
import AdminLayout from './AdminLayout';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  MoreHorizontal,
  Monitor,
  Award,
  BarChart3,
  FileText,
  Share2,
  GraduationCap,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';

const iconMap = { Monitor, Award, BarChart3, FileText, Share2, GraduationCap };

const AdminPrograms = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const programs = [
    { id: 1, title: 'Digital Marketinq', students: 45, price: 1200, status: 'active', icon: 'Monitor', color: '#0ea5e9' },
    { id: 2, title: 'Brend Menecmenti', students: 32, price: 900, status: 'active', icon: 'Award', color: '#f59e0b' },
    { id: 3, title: 'Marketinq Analitikası', students: 28, price: 1100, status: 'active', icon: 'BarChart3', color: '#22d3ee' },
    { id: 4, title: 'Content Marketinq', students: 38, price: 700, status: 'draft', icon: 'FileText', color: '#f97316' },
    { id: 5, title: 'Social Media Marketinq', students: 52, price: 850, status: 'active', icon: 'Share2', color: '#84cc16' },
    { id: 6, title: 'Marketinq MBA', students: 15, price: 3500, status: 'active', icon: 'GraduationCap', color: '#8b5cf6' },
  ];

  const filteredPrograms = programs.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-brand-dark">Proqramlar</h1>
          <p className="text-brand-muted">{programs.length} proqram</p>
        </div>
        <Button className="bg-gradient-to-r from-brand-primary to-brand-accent hover:opacity-90">
          <Plus className="w-4 h-4 mr-2" />
          Yeni proqram
        </Button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-muted" />
        <Input
          placeholder="Proqram axtar..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 h-12"
        />
      </div>

      {/* Programs Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPrograms.map((program) => {
          const IconComponent = iconMap[program.icon];
          return (
            <div
              key={program.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${program.color}15` }}
                  >
                    {IconComponent && (
                      <IconComponent className="w-6 h-6" style={{ color: program.color }} />
                    )}
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                        <MoreHorizontal className="w-5 h-5 text-brand-muted" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem><Eye className="w-4 h-4 mr-2" />Görüntülə</DropdownMenuItem>
                      <DropdownMenuItem><Edit className="w-4 h-4 mr-2" />Redaktə et</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-500"><Trash2 className="w-4 h-4 mr-2" />Sil</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <h3 className="font-semibold text-brand-dark mb-2">{program.title}</h3>
                
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-brand-muted">{program.students} tələbə</span>
                  <span className="font-semibold text-brand-dark">{program.price} AZN</span>
                </div>

                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    program.status === 'active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {program.status === 'active' ? 'Aktiv' : 'Qaralama'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </AdminLayout>
  );
};

export default AdminPrograms;