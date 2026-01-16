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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedLevel === level.value
                    ? 'bg-brand-primary text-white'
                    : 'bg-white text-brand-dark border border-brand-border hover:border-brand-primary'
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
                <div
                  key={program.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-brand-border hover:shadow-xl transition-all duration-300"
                >
                  {/* Header */}
                  <div
                    className="p-6 pb-4"
                    style={{ backgroundColor: `${program.color}10` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center"
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
                    <h3 className="text-xl font-bold text-brand-dark">
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

                    <div className="flex items-center justify-between pt-4 border-t border-brand-border">
                      <div>
                        <span className="text-xs text-brand-muted">
                          {t.programs.price}
                        </span>
                        <div className="text-xl font-bold text-brand-dark">
                          {program.price} AZN
                        </div>
                      </div>
                      <Link to="/apply">
                        <Button
                          className="group/btn"
                          style={{
                            backgroundColor: program.color,
                            color: 'white',
                          }}
                        >
                          {t.programs.apply}
                          <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
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
                className="p-6 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center mb-4">
                  <Check className="w-5 h-5 text-brand-accent" />
                </div>
                <h4 className="font-semibold mb-2">
                  {language === 'az' ? item.titleAz : item.titleEn}
                </h4>
                <p className="text-sm text-gray-400">
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