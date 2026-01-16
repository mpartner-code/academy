import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import {
  programs,
  instructors,
  stats,
  alumni,
  corporateClients,
} from '../data/mock';
import {
  ArrowRight,
  Monitor,
  Award,
  BarChart3,
  FileText,
  Share2,
  GraduationCap,
  Users,
  BookOpen,
  Building2,
  ChevronRight,
  Play,
  Star,
  Quote,
} from 'lucide-react';

const iconMap = {
  Monitor,
  Award,
  BarChart3,
  FileText,
  Share2,
  GraduationCap,
};

const Home = () => {
  const { t, language } = useLanguage();

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#fad24b]/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-brand-accent rounded-full animate-pulse-slow" />
          <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-[#3dd3ee] rounded-full animate-bounce-subtle" />
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#ff8c19] rounded-full animate-float" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-border mb-6 animate-fade-in-down">
                <span className="w-2 h-2 bg-[#b4dc19] rounded-full animate-pulse" />
                <span className="text-sm text-brand-muted font-medium">
                  {language === 'az' ? 'Yeni qruplar baslayir' : 'New groups starting'}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight mb-6 animate-fade-in-up">
                {t.hero.title}{' '}
                <span className="text-gradient">{t.hero.titleHighlight}</span>
              </h1>

              <p className="text-lg text-brand-muted leading-relaxed mb-8 animate-fade-in-up stagger-2">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-in-up stagger-3">
                <Link to="/programs">
                  <Button
                    size="lg"
                    className="bg-brand-primary hover:bg-brand-primary/90 text-white px-6 btn-hover"
                  >
                    {t.hero.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/quiz">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-brand-border text-brand-dark hover:bg-brand-light px-6"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    {t.hero.ctaSecondary}
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6 mt-10 pt-10 border-t border-brand-border animate-fade-in stagger-4">
                <div className="flex -space-x-3">
                  {alumni.slice(0, 3).map((person, idx) => (
                    <img
                      key={idx}
                      src={person.image}
                      alt={person.name}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#fad24b] text-[#fad24b]" />
                    ))}
                  </div>
                  <p className="text-sm text-brand-muted">
                    <span className="font-semibold text-brand-dark">1500+</span>{' '}
                    {language === 'az' ? 'məmnun məzun' : 'happy graduates'}
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Stats Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <StatCard
                  value={stats.students}
                  label={t.stats.students}
                  color="#5f9dff"
                  icon={Users}
                  delay="stagger-1"
                />
                <StatCard
                  value={stats.courses}
                  label={t.stats.courses}
                  color="#fad24b"
                  icon={BookOpen}
                  delay="stagger-2"
                />
                <StatCard
                  value={stats.instructors}
                  label={t.stats.instructors}
                  color="#3dd3ee"
                  icon={GraduationCap}
                  delay="stagger-3"
                />
                <StatCard
                  value={stats.partners}
                  label={t.stats.partners}
                  color="#b4dc19"
                  icon={Building2}
                  delay="stagger-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">
                {t.programs.title}
              </h2>
              <p className="text-brand-muted text-lg max-w-xl">
                {t.programs.subtitle}
              </p>
            </div>
            <Link to="/programs">
              <Button variant="outline" className="border-brand-primary/30 bg-white/50 backdrop-blur-sm group hover:bg-brand-primary hover:text-white hover:border-brand-primary">
                {language === 'az' ? 'Hamısına bax' : 'View all'}
                <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.slice(0, 6).map((program, idx) => {
              const IconComponent = iconMap[program.icon];
              return (
                <div
                  key={program.id}
                  className="group glass-card rounded-2xl p-6"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${program.color}20` }}
                  >
                    {IconComponent && (
                      <IconComponent
                        className="w-6 h-6"
                        style={{ color: program.color }}
                      />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">
                    {language === 'az' ? program.titleAz : program.titleEn}
                  </h3>
                  <p className="text-brand-muted text-sm mb-4 line-clamp-2">
                    {language === 'az' ? program.descriptionAz : program.descriptionEn}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-brand-muted">
                      {language === 'az' ? program.duration : program.durationEn}
                    </span>
                    <span className="font-semibold text-brand-dark">
                      {program.price} AZN
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Instructors Preview */}
      <section className="section-padding relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">
              {t.instructors.title}
            </h2>
            <p className="text-brand-muted text-lg">{t.instructors.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {instructors.map((instructor, idx) => (
              <div
                key={instructor.id}
                className="group text-center glass-card rounded-2xl p-6"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full rounded-full object-cover border-4 border-white/80 group-hover:border-brand-primary transition-colors shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                    {instructor.experience}+
                  </div>
                </div>
                <h4 className="font-semibold text-brand-dark mb-1">
                  {instructor.name}
                </h4>
                <p className="text-sm text-brand-muted mb-2">
                  {language === 'az' ? instructor.titleAz : instructor.titleEn}
                </p>
                <p className="text-xs text-brand-primary font-medium">
                  {instructor.company}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/instructors">
              <Button variant="outline" className="border-brand-primary/30 bg-white/50 backdrop-blur-sm hover:bg-brand-primary hover:text-white hover:border-brand-primary">
                {language === 'az' ? 'Bütün təlimçilər' : 'All instructors'}
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#c8aff0]/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              {t.alumni.title}
            </h2>
            <p className="text-gray-400 text-lg">{t.alumni.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {alumni.map((person, idx) => (
              <div
                key={person.id}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <Quote className="w-8 h-8 text-brand-accent/50 mb-4" />
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {language === 'az' ? person.testimonialAz : person.testimonialEn}
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h5 className="font-semibold text-white">{person.name}</h5>
                    <p className="text-xs text-gray-400">
                      {language === 'az' ? person.titleAz : person.titleEn} @{' '}
                      {person.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-center text-brand-muted mb-8">
            {language === 'az'
              ? 'Etibarlı partnyorlarımız'
              : 'Trusted by leading companies'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {corporateClients.map((client) => (
              <div
                key={client.id}
                className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative bg-brand-primary rounded-2xl p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {language === 'az'
                  ? 'Marketinq karyeranıza bugün başlayın'
                  : 'Start your marketing career today'}
              </h2>
              <p className="text-white/80 text-lg mb-8">
                {language === 'az'
                  ? 'İlk addımı atın və 1500+ məzunumuza qoşulun. Növbəti qruplar tezliklə başlayır.'
                  : 'Take the first step and join our 1500+ graduates. Next groups starting soon.'}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/apply">
                  <Button
                    size="lg"
                    className="bg-white text-brand-primary hover:bg-gray-100 px-8"
                  >
                    {t.nav.apply}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/programs">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 px-8"
                  >
                    {t.programs.details}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const StatCard = ({ value, label, color, icon: Icon, delay }) => (
  <div
    className={`glass-card rounded-2xl p-6 animate-fade-in-up ${delay}`}
  >
    <div
      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
      style={{ backgroundColor: `${color}20` }}
    >
      <Icon className="w-5 h-5" style={{ color }} />
    </div>
    <div className="text-3xl font-bold text-brand-dark mb-1">
      {value.toLocaleString()}+
    </div>
    <div className="text-sm text-brand-muted">{label}</div>
  </div>
);

export default Home;