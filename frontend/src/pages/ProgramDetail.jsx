import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { programs, instructors } from '../data/mock';
import {
  Monitor,
  Award,
  BarChart3,
  FileText,
  Share2,
  GraduationCap,
  Clock,
  BookOpen,
  Users,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Target,
  Briefcase,
  HelpCircle,
  Calendar,
  DollarSign,
  Play,
  Sparkles,
} from 'lucide-react';

const iconMap = {
  Monitor,
  Award,
  BarChart3,
  FileText,
  Share2,
  GraduationCap,
};

const ProgramDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [activeSection, setActiveSection] = useState('overview');

  const program = programs.find((p) => p.slug === slug);

  useEffect(() => {
    if (!program) {
      navigate('/programs');
    }
    window.scrollTo(0, 0);
  }, [program, navigate]);

  if (!program) return null;

  const IconComponent = iconMap[program.icon];
  const programInstructors = instructors.filter((i) =>
    program.instructorIds?.includes(i.id)
  );

  const sections = [
    { id: 'overview', labelAz: 'Ümumi', labelEn: 'Overview', icon: BookOpen },
    { id: 'syllabus', labelAz: 'Sillabus', labelEn: 'Syllabus', icon: Calendar },
    { id: 'instructors', labelAz: 'Təlimçilər', labelEn: 'Instructors', icon: Users },
    { id: 'faq', labelAz: 'FAQ', labelEn: 'FAQ', icon: HelpCircle },
  ];

  return (
    <main className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-brand-dark to-slate-900"></div>
        <div className="absolute inset-0">
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: program.color }}
          />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 relative z-10">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            {language === 'az' ? 'Bütün proqramlar' : 'All programs'}
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: program.color }}
                >
                  {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                </div>
                <span
                  className="px-4 py-1.5 rounded-full text-sm font-medium"
                  style={{ backgroundColor: `${program.color}30`, color: program.color }}
                >
                  {language === 'az' ? program.level : program.levelEn}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {language === 'az' ? program.titleAz : program.titleEn}
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                {language === 'az' ? program.fullDescriptionAz : program.fullDescriptionEn}
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-slate-300">
                  <Clock className="w-5 h-5" style={{ color: program.color }} />
                  <span>{language === 'az' ? program.duration : program.durationEn}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <BookOpen className="w-5 h-5" style={{ color: program.color }} />
                  <span>{program.modules} {language === 'az' ? 'modul' : 'modules'}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Users className="w-5 h-5" style={{ color: program.color }} />
                  <span>{programInstructors.length} {language === 'az' ? 'təlimçi' : 'instructors'}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/apply">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-brand-primary to-brand-accent hover:opacity-90 text-white shadow-lg shadow-brand-primary/25"
                  >
                    {language === 'az' ? 'Müraciət et' : 'Apply Now'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
                  onClick={() => setActiveSection('syllabus')}
                >
                  <Play className="w-4 h-4 mr-2" />
                  {language === 'az' ? 'Sillabusu gör' : 'View Syllabus'}
                </Button>
              </div>
            </div>

            {/* Price Card */}
            <div className="animate-fade-in-up stagger-2">
              <div className="glass-dark rounded-3xl p-8 border border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-slate-400">{language === 'az' ? 'Qiymət' : 'Price'}</span>
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                </div>
                <div className="text-5xl font-bold text-white mb-2">
                  {program.price} <span className="text-2xl text-slate-400">AZN</span>
                </div>
                <p className="text-slate-400 text-sm mb-6">
                  {language === 'az' ? 'Hissə-hissə ödəniş mümkündür' : 'Installment payment available'}
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    language === 'az' ? 'Sertifikat' : 'Certificate',
                    language === 'az' ? 'Ömür boyu icma dəstəyi' : 'Lifetime community support',
                    language === 'az' ? 'Real layihələr' : 'Real projects',
                    language === 'az' ? 'Karyera dəstəyi' : 'Career support',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5" style={{ color: program.color }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <Link to="/apply" className="block">
                  <Button
                    className="w-full h-14 text-lg"
                    style={{ backgroundColor: program.color }}
                  >
                    {language === 'az' ? 'İndi qeydiyyatdan keç' : 'Register Now'}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-[72px] z-40 glass border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium whitespace-nowrap transition-all ${
                  activeSection === section.id
                    ? 'bg-brand-primary text-white'
                    : 'text-brand-muted hover:bg-brand-light'
                }`}
              >
                <section.icon className="w-4 h-4" />
                {language === 'az' ? section.labelAz : section.labelEn}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* What You'll Learn */}
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-brand-primary" />
                </div>
                <h2 className="text-2xl font-bold text-brand-dark">
                  {language === 'az' ? 'Nə öyrənəcəksiniz?' : 'What will you learn?'}
                </h2>
              </div>
              <div className="glass-card rounded-2xl p-6">
                <div className="space-y-4">
                  {(language === 'az' ? program.learningsAz : program.learningsEn)?.map(
                    (item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 animate-fade-in-up"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${program.color}20` }}
                        >
                          <CheckCircle2 className="w-4 h-4" style={{ color: program.color }} />
                        </div>
                        <span className="text-brand-dark">{item}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Skills You'll Gain */}
            <div className="animate-fade-in-up stagger-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-brand-accent" />
                </div>
                <h2 className="text-2xl font-bold text-brand-dark">
                  {language === 'az' ? 'Qazanacağınız bacarıqlar' : 'Skills you will gain'}
                </h2>
              </div>
              <div className="glass-card rounded-2xl p-6">
                <div className="flex flex-wrap gap-3">
                  {(language === 'az' ? program.skillsAz : program.skillsEn)?.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-full text-sm font-medium animate-scale-in"
                      style={{
                        backgroundColor: `${program.color}15`,
                        color: program.color,
                        animationDelay: `${idx * 0.1}s`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Who Can Join */}
              <div className="mt-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-emerald-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-brand-dark">
                    {language === 'az' ? 'Kimlər qatıla bilər?' : 'Who can join?'}
                  </h2>
                </div>
                <div className="glass-card rounded-2xl p-6">
                  <div className="space-y-3">
                    {(language === 'az' ? program.whoCanJoinAz : program.whoCanJoinEn)?.map(
                      (item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span className="text-brand-muted">{item}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus Section */}
      <section id="syllabus" className="section-padding bg-brand-light/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              {language === 'az' ? 'Proqram Sillabusu' : 'Program Syllabus'}
            </h2>
            <p className="text-brand-muted">
              {language === 'az'
                ? `${program.modules} modul, ${program.duration} ərzində`
                : `${program.modules} modules over ${program.durationEn}`}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {program.syllabus?.map((module, idx) => (
                <AccordionItem
                  key={idx}
                  value={`module-${idx}`}
                  className="glass-card rounded-2xl border-none overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline">
                    <div className="flex items-center gap-4 text-left">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold shadow-lg"
                        style={{ backgroundColor: program.color }}
                      >
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-dark text-lg">
                          {language === 'az' ? module.titleAz : module.titleEn}
                        </h4>
                        <span className="text-sm text-brand-muted">
                          {language === 'az' ? module.weeksAz : module.weeksEn}
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5">
                    <div className="ml-16 space-y-2">
                      {(language === 'az' ? module.topicsAz : module.topicsEn)?.map((topic, i) => (
                        <div key={i} className="flex items-center gap-3 text-brand-muted">
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: program.color }}
                          />
                          {topic}
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section id="instructors" className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              {language === 'az' ? 'Təlimçilər' : 'Instructors'}
            </h2>
            <p className="text-brand-muted">
              {language === 'az'
                ? 'Bu proqramı aparacaq mütəxəssislər'
                : 'Experts who will teach this program'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {programInstructors.map((instructor, idx) => (
              <div
                key={instructor.id}
                className="group glass-card rounded-3xl overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{instructor.name}</h3>
                    <p className="text-slate-300 text-sm">
                      {language === 'az' ? instructor.titleAz : instructor.titleEn}
                    </p>
                  </div>
                  <div
                    className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold text-white backdrop-blur-md"
                    style={{ backgroundColor: `${program.color}cc` }}
                  >
                    {instructor.experience}+ {language === 'az' ? 'il' : 'yrs'}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-brand-primary font-medium text-sm mb-3">{instructor.company}</p>
                  <div className="flex flex-wrap gap-2">
                    {instructor.specialties?.slice(0, 3).map((spec, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-brand-light text-brand-muted text-xs"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-brand-light/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              {language === 'az' ? 'Tez-tez verilən suallar' : 'Frequently Asked Questions'}
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {(language === 'az' ? program.faqAz : program.faqEn)?.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="glass-card rounded-2xl border-none overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline text-left">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-brand-primary flex-shrink-0" />
                      <span className="font-medium text-brand-dark">{faq.q}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5">
                    <p className="text-brand-muted ml-8">{faq.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div
            className="relative rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
            style={{ backgroundColor: program.color }}
          >
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {language === 'az'
                  ? 'Karyeranıza yeni istiqamət verin'
                  : 'Give your career a new direction'}
              </h2>
              <p className="text-white/80 text-lg mb-8">
                {language === 'az'
                  ? 'Növbəti qrup tezliklə başlayır. Yerinizi indi rezerv edin!'
                  : 'Next group starting soon. Reserve your spot now!'}
              </p>
              <Link to="/apply">
                <Button size="lg" className="bg-white text-brand-dark hover:bg-white/90 px-10 shadow-lg">
                  {language === 'az' ? 'Müraciət et' : 'Apply Now'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProgramDetail;
