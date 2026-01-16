import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { programs } from '../data/mock';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { Monitor, Award, BarChart3, FileText, Share2, GraduationCap, Clock, BookOpen } from 'lucide-react';

const iconMap = {
  Monitor,
  Award,
  BarChart3,
  FileText,
  Share2,
  GraduationCap,
};

const Syllabus = () => {
  const { t, language } = useLanguage();
  const [selectedProgram, setSelectedProgram] = useState(programs[0].id);

  const syllabusData = {
    1: [
      {
        titleAz: 'Modul 1: Digital Marketinq əsasları',
        titleEn: 'Module 1: Digital Marketing Fundamentals',
        topicsAz: ['Digital marketinqə giriş', 'Online müştəri səyahəti', 'Digital kanal növləri'],
        topicsEn: ['Introduction to digital marketing', 'Online customer journey', 'Types of digital channels'],
        duration: '2 həftə',
        durationEn: '2 weeks',
      },
      {
        titleAz: 'Modul 2: SEO və SEM',
        titleEn: 'Module 2: SEO and SEM',
        topicsAz: ['Keyword research', 'On-page SEO', 'Google Ads əsasları'],
        topicsEn: ['Keyword research', 'On-page SEO', 'Google Ads basics'],
        duration: '3 həftə',
        durationEn: '3 weeks',
      },
      {
        titleAz: 'Modul 3: Social Media Marketing',
        titleEn: 'Module 3: Social Media Marketing',
        topicsAz: ['Platform strategiyaları', 'Kontent planlaması', 'Paid social advertising'],
        topicsEn: ['Platform strategies', 'Content planning', 'Paid social advertising'],
        duration: '3 həftə',
        durationEn: '3 weeks',
      },
      {
        titleAz: 'Modul 4: Email Marketing',
        titleEn: 'Module 4: Email Marketing',
        topicsAz: ['Email kampaniyaları', 'Automation', 'A/B testing'],
        topicsEn: ['Email campaigns', 'Automation', 'A/B testing'],
        duration: '2 həftə',
        durationEn: '2 weeks',
      },
      {
        titleAz: 'Modul 5: Analitika və Hesabat',
        titleEn: 'Module 5: Analytics and Reporting',
        topicsAz: ['Google Analytics 4', 'KPI-lar', 'Dashboard yaratma'],
        topicsEn: ['Google Analytics 4', 'KPIs', 'Dashboard creation'],
        duration: '2 həftə',
        durationEn: '2 weeks',
      },
    ],
    2: [
      {
        titleAz: 'Modul 1: Brend Strategiyası',
        titleEn: 'Module 1: Brand Strategy',
        topicsAz: ['Brend konsepsiyaları', 'Brend arxitekurası', 'Pozisiyalandırma'],
        topicsEn: ['Brand concepts', 'Brand architecture', 'Positioning'],
        duration: '2 həftə',
        durationEn: '2 weeks',
      },
      {
        titleAz: 'Modul 2: Brend İdentiklik',
        titleEn: 'Module 2: Brand Identity',
        topicsAz: ['Vizual identiklik', 'Səs tonu', 'Brend qaydaları'],
        topicsEn: ['Visual identity', 'Tone of voice', 'Brand guidelines'],
        duration: '2 həftə',
        durationEn: '2 weeks',
      },
      {
        titleAz: 'Modul 3: Brend Kommunikasiyası',
        titleEn: 'Module 3: Brand Communication',
        topicsAz: ['Mesajlaşma strategiyası', 'Storytelling', 'PR əsasları'],
        topicsEn: ['Messaging strategy', 'Storytelling', 'PR basics'],
        duration: '2 həftə',
        durationEn: '2 weeks',
      },
      {
        titleAz: 'Modul 4: Brend Ölçmə',
        titleEn: 'Module 4: Brand Measurement',
        topicsAz: ['Brend araşdırması', 'Brend dəyəri', 'Brend sağlamlığı'],
        topicsEn: ['Brand research', 'Brand equity', 'Brand health'],
        duration: '2 həftə',
        durationEn: '2 weeks',
      },
    ],
  };

  const currentSyllabus = syllabusData[selectedProgram] || syllabusData[1];
  const currentProgram = programs.find((p) => p.id === selectedProgram);

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
              {language === 'az' ? 'Sillabus' : 'Syllabus'}
            </h1>
            <p className="text-xl text-brand-muted">
              {language === 'az'
                ? 'Hər proqramın ətraflı tədris planı ilə tanış olun'
                : 'Explore the detailed curriculum for each program'}
            </p>
          </div>

          {/* Program Selector */}
          <div className="flex flex-wrap gap-3 mb-10">
            {programs.map((program) => {
              const IconComponent = iconMap[program.icon];
              return (
                <button
                  key={program.id}
                  onClick={() => setSelectedProgram(program.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-medium transition-all ${
                    selectedProgram === program.id
                      ? 'text-white'
                      : 'bg-white text-brand-dark border border-brand-border hover:border-brand-primary'
                  }`}
                  style={
                    selectedProgram === program.id
                      ? { backgroundColor: program.color }
                      : {}
                  }
                >
                  {IconComponent && <IconComponent className="w-4 h-4" />}
                  {language === 'az' ? program.titleAz : program.titleEn}
                </button>
              );
            })}
          </div>

          {/* Syllabus Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left - Program Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 border border-brand-border sticky top-32">
                {currentProgram && (
                  <>
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${currentProgram.color}20` }}
                    >
                      {iconMap[currentProgram.icon] &&
                        React.createElement(iconMap[currentProgram.icon], {
                          className: 'w-7 h-7',
                          style: { color: currentProgram.color },
                        })}
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2">
                      {language === 'az'
                        ? currentProgram.titleAz
                        : currentProgram.titleEn}
                    </h3>
                    <p className="text-brand-muted text-sm mb-6">
                      {language === 'az'
                        ? currentProgram.descriptionAz
                        : currentProgram.descriptionEn}
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-sm">
                        <Clock className="w-4 h-4 text-brand-muted" />
                        <span className="text-brand-muted">
                          {t.programs.duration}:{' '}
                          <span className="text-brand-dark font-medium">
                            {language === 'az'
                              ? currentProgram.duration
                              : currentProgram.durationEn}
                          </span>
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <BookOpen className="w-4 h-4 text-brand-muted" />
                        <span className="text-brand-muted">
                          {currentProgram.modules} {t.programs.modules}
                        </span>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-brand-border">
                      <span className="text-xs text-brand-muted">
                        {t.programs.price}
                      </span>
                      <div className="text-2xl font-bold text-brand-dark">
                        {currentProgram.price} AZN
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Right - Modules */}
            <div className="lg:col-span-2">
              <Accordion type="single" collapsible className="space-y-4">
                {currentSyllabus.map((module, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`module-${idx}`}
                    className="bg-white rounded-xl border border-brand-border px-6"
                  >
                    <AccordionTrigger className="hover:no-underline py-5">
                      <div className="flex items-center gap-4 text-left">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                          style={{ backgroundColor: currentProgram?.color }}
                        >
                          {idx + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-brand-dark">
                            {language === 'az' ? module.titleAz : module.titleEn}
                          </h4>
                          <span className="text-xs text-brand-muted">
                            {language === 'az' ? module.duration : module.durationEn}
                          </span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5">
                      <ul className="space-y-2 ml-14">
                        {(language === 'az' ? module.topicsAz : module.topicsEn).map(
                          (topic, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 text-brand-muted text-sm"
                            >
                              <div
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: currentProgram?.color }}
                              />
                              {topic}
                            </li>
                          )
                        )}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Syllabus;