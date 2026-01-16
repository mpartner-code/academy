import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import {
  Shield,
  Award,
  Globe,
  CheckCircle2,
  ArrowRight,
  Star,
  Building2,
  FileCheck,
  Users,
  Target,
} from 'lucide-react';

const Certification = () => {
  const { t, language } = useLanguage();

  const certifications = [
    {
      id: 1,
      titleAz: 'Chartered Marketing Institute (CMI)',
      titleEn: 'Chartered Marketing Institute (CMI)',
      descAz: 'Böyük Britaniyanın aparıcı marketinq peşəkarları təşkilatı ilə rəsmi partnyorluq. CMI sertifikatları dünya üzrə 100+ ölkədə tanınır.',
      descEn: 'Official partnership with the UK\'s leading marketing professionals organization. CMI certificates are recognized in 100+ countries worldwide.',
      logo: 'https://placehold.co/200x100/f8fafc/0ea5e9?text=CMI',
      color: '#0ea5e9',
      features: [
        { az: 'Beynəlxalq tanınma', en: 'International recognition' },
        { az: 'Chartered Marketer statusu', en: 'Chartered Marketer status' },
        { az: 'Qlobal şəbəkə', en: 'Global network' },
        { az: 'Davamlı inkişaf', en: 'Continuous development' },
      ],
    },
    {
      id: 2,
      titleAz: 'Google Digital Marketing',
      titleEn: 'Google Digital Marketing',
      descAz: 'Google-un rəsmi digital marketinq sertifikatlaşdırma proqramı. Praktiki bacarıqlar və Google alətləri üzrə ekspertlik.',
      descEn: 'Google\'s official digital marketing certification program. Practical skills and expertise in Google tools.',
      logo: 'https://placehold.co/200x100/f8fafc/34a853?text=Google',
      color: '#34a853',
      features: [
        { az: 'Google Ads sertifikatı', en: 'Google Ads certification' },
        { az: 'Analytics sertifikatı', en: 'Analytics certification' },
        { az: 'Pulsuz resurslar', en: 'Free resources' },
        { az: 'Praktiki tapşırıqlar', en: 'Practical assignments' },
      ],
    },
    {
      id: 3,
      titleAz: 'HubSpot Academy',
      titleEn: 'HubSpot Academy',
      descAz: 'İnbound marketinq və satış metodologiyası üzrə dünya lideri HubSpot-un sertifikatlaşdırma proqramı.',
      descEn: 'Certification program from HubSpot, the world leader in inbound marketing and sales methodology.',
      logo: 'https://placehold.co/200x100/f8fafc/ff7a59?text=HubSpot',
      color: '#ff7a59',
      features: [
        { az: 'İnbound marketinq', en: 'Inbound marketing' },
        { az: 'Content marketinq', en: 'Content marketing' },
        { az: 'Email marketinq', en: 'Email marketing' },
        { az: 'Sales enablement', en: 'Sales enablement' },
      ],
    },
    {
      id: 4,
      titleAz: 'Meta Blueprint',
      titleEn: 'Meta Blueprint',
      descAz: 'Facebook və Instagram reklamları üzrə rəsmi Meta sertifikatları. Sosial media marketinqində peşəkar səviyyə.',
      descEn: 'Official Meta certifications for Facebook and Instagram advertising. Professional level in social media marketing.',
      logo: 'https://placehold.co/200x100/f8fafc/1877f2?text=Meta',
      color: '#1877f2',
      features: [
        { az: 'Media Planning', en: 'Media Planning' },
        { az: 'Media Buying', en: 'Media Buying' },
        { az: 'Creative Strategy', en: 'Creative Strategy' },
        { az: 'Marketing Science', en: 'Marketing Science' },
      ],
    },
  ];

  const benefits = [
    {
      icon: Globe,
      titleAz: 'Qlobal Tanınma',
      titleEn: 'Global Recognition',
      descAz: 'Sertifikatlarınız dünya üzrə tanınır və karyera imkanlarınızı genişləndirir',
      descEn: 'Your certificates are recognized worldwide and expand your career opportunities',
    },
    {
      icon: Target,
      titleAz: 'Karyera Üstünlüyü',
      titleEn: 'Career Advantage',
      descAz: 'İşəgötürənlər beynəlxalq sertifikatlı namizədlərə üstünlük verir',
      descEn: 'Employers prefer candidates with international certifications',
    },
    {
      icon: Users,
      titleAz: 'Peşəkar Şəbəkə',
      titleEn: 'Professional Network',
      descAz: 'Qlobal marketinq cəmiyyətinin bir hissəsi olun',
      descEn: 'Become part of the global marketing community',
    },
    {
      icon: Star,
      titleAz: 'Ekspertlik Təsdiqi',
      titleEn: 'Expertise Validation',
      descAz: 'Biliyinizi və bacarıqlarınızı beynəlxalq standartlarla təsdiqləyin',
      descEn: 'Validate your knowledge and skills with international standards',
    },
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-brand-dark to-slate-900"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/10 mb-6">
              <Shield className="w-4 h-4 text-brand-primary" />
              <span className="text-sm text-slate-300">
                {language === 'az' ? 'Beynəlxalq akkreditasiya' : 'International accreditation'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              {language === 'az' ? t.certification.title : t.certification.title}
            </h1>
            <p className="text-xl text-slate-300 mb-8 animate-fade-in-up stagger-1">
              {language === 'az' ? t.certification.subtitle : t.certification.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up stagger-2">
              <Link to="/apply">
                <Button size="lg" className="bg-gradient-to-r from-brand-primary to-brand-accent hover:opacity-90 text-white shadow-lg">
                  {language === 'az' ? 'Proqrama qoşul' : 'Join Program'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                {language === 'az' ? 'Ətraflı öyrən' : 'Learn More'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 text-center animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-brand-primary" />
                </div>
                <h3 className="font-bold text-brand-dark mb-2">
                  {language === 'az' ? benefit.titleAz : benefit.titleEn}
                </h3>
                <p className="text-sm text-brand-muted">
                  {language === 'az' ? benefit.descAz : benefit.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-brand-light/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              {language === 'az' ? 'Sertifikat Proqramları' : 'Certificate Programs'}
            </h2>
            <p className="text-brand-muted">
              {language === 'az'
                ? 'Dünya səviyyəsində tanınan sertifikatlar əldə edin'
                : 'Earn globally recognized certifications'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, idx) => (
              <div
                key={cert.id}
                className="glass-card rounded-3xl overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div
                  className="p-6 flex items-center justify-between"
                  style={{ backgroundColor: `${cert.color}10` }}
                >
                  <img
                    src={cert.logo}
                    alt={language === 'az' ? cert.titleAz : cert.titleEn}
                    className="h-12 w-auto"
                  />
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: cert.color }}
                  >
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-dark mb-3">
                    {language === 'az' ? cert.titleAz : cert.titleEn}
                  </h3>
                  <p className="text-brand-muted text-sm mb-6">
                    {language === 'az' ? cert.descAz : cert.descEn}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {cert.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" style={{ color: cert.color }} />
                        <span className="text-sm text-brand-dark">
                          {language === 'az' ? feature.az : feature.en}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden bg-gradient-to-br from-brand-primary via-brand-primary to-brand-accent">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <Shield className="w-16 h-16 text-white/80 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {language === 'az'
                  ? 'Beynəlxalq sertifikat əldə edin'
                  : 'Get an international certificate'}
              </h2>
              <p className="text-white/80 text-lg mb-8">
                {language === 'az'
                  ? 'Proqramlarımıza qoşulun və karyeranızı növbəti səviyyəyə aparın'
                  : 'Join our programs and take your career to the next level'}
              </p>
              <Link to="/apply">
                <Button size="lg" className="bg-white text-brand-primary hover:bg-white/90 px-10 shadow-lg">
                  {language === 'az' ? 'İndi başla' : 'Start Now'}
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

export default Certification;
