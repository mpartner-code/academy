import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { programs } from '../data/mock';
import {
  Monitor,
  Award,
  BarChart3,
  FileText,
  Share2,
  GraduationCap,
  Clock,
  BookOpen,
  ChevronRight,
  Check,
} from 'lucide-react';

const iconMap = {
  Monitor,
  Award,
  BarChart3,
  FileText,
  Share2,
  GraduationCap,
};

const Programs = () => {
  const { t, language } = useLanguage();
  const [selectedLevel, setSelectedLevel] = useState('all');

  const levels = [
    { value: 'all', labelAz: 'Hamısı', labelEn: 'All' },
    { value: 'beginner', labelAz: 'Başlanğıc', labelEn: 'Beginner' },
    { value: 'intermediate', labelAz: 'Orta', labelEn: 'Intermediate' },
    { value: 'advanced', labelAz: 'İrəliləyən', labelEn: 'Advanced' },
  ];

  const filteredPrograms =
    selectedLevel === 'all'
      ? programs
      : programs.filter((p) => {
          if (selectedLevel === 'beginner') return p.level === 'Başlanğıc';
          if (selectedLevel === 'intermediate') return p.level === 'Orta';
          if (selectedLevel === 'advanced') return p.level === 'İrəliləyən';
          return true;
        });

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4 animate-fade-in-up">
              {t.programs.title}
            </h1>
            <p className="text-xl text-brand-muted animate-fade-in-up stagger-1">
              {t.programs.subtitle}
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {levels.map((level) => (
              <button
                key={level.value}
                onClick={() => setSelectedLevel(level.value)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  selectedLevel === level.value
                    ? 'bg-gradient-to-r from-brand-primary to-brand-accent text-white shadow-lg shadow-brand-primary/25'
                    : 'glass-card text-brand-dark hover:bg-white'
                }`}
              >
                {language === 'az' ? level.labelAz : level.labelEn}
              </button>
            ))}
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program) => {
              const IconComponent = iconMap[program.icon];
              return (
                <Link
                  to={`/programs/${program.slug}`}
                  key={program.id}
                  className="group glass-card rounded-2xl overflow-hidden cursor-pointer"
                >
                  {/* Header */}
                  <div
                    className="p-6 pb-4"
                    style={{ backgroundColor: `${program.color}10` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{ backgroundColor: program.color }}
                      >
                        {IconComponent && (
                          <IconComponent className="w-7 h-7 text-white" />
                        )}
                      </div>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: `${program.color}20`,
                          color: program.color,
                        }}
                      >
                        {language === 'az' ? program.level : program.levelEn}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                      {language === 'az' ? program.titleAz : program.titleEn}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-brand-muted text-sm mb-6 line-clamp-3">
                      {language === 'az'
                        ? program.descriptionAz
                        : program.descriptionEn}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-brand-muted" />
                        <span className="text-brand-muted">
                          {language === 'az' ? program.duration : program.durationEn}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <BookOpen className="w-4 h-4 text-brand-muted" />
                        <span className="text-brand-muted">
                          {program.modules} {t.programs.modules}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-brand-border/50">
                      <div>
                        <span className="text-xs text-brand-muted">
                          {t.programs.price}
                        </span>
                        <div className="text-xl font-bold text-brand-dark">
                          {program.price} AZN
                        </div>
                      </div>
                      <div
                        className="flex items-center gap-1 font-medium transition-colors"
                        style={{ color: program.color }}
                      >
                        {language === 'az' ? 'Proqramla tanış ol' : 'Learn more'}
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-slate-900 to-brand-dark"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            {language === 'az' ? 'Niyə bizi seçməlisiniz?' : 'Why choose us?'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                titleAz: 'Praktiki Təlim',
                titleEn: 'Practical Training',
                descAz: 'Real case study və layihələr',
                descEn: 'Real case studies and projects',
              },
              {
                titleAz: 'Expert Təlimçilər',
                titleEn: 'Expert Instructors',
                descAz: 'Sektorun aparicı mütəxəssisləri',
                descEn: 'Leading industry professionals',
              },
              {
                titleAz: 'Karyera Dəstəyi',
                titleEn: 'Career Support',
                descAz: 'İş tapmaqda kömək',
                descEn: 'Job placement assistance',
              },
              {
                titleAz: 'Sertifikat',
                titleEn: 'Certification',
                descAz: 'Tanınan sertifikat',
                descEn: 'Recognized certificate',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-dark"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent flex items-center justify-center mb-4">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-white">
                  {language === 'az' ? item.titleAz : item.titleEn}
                </h4>
                <p className="text-sm text-slate-400">
                  {language === 'az' ? item.descAz : item.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Programs;