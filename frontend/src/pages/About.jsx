import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Target, Users, Lightbulb, TrendingUp, Award, Heart } from 'lucide-react';

const About = () => {
  const { t, language } = useLanguage();

  const values = [
    {
      icon: Target,
      titleAz: 'Praktiki Yanaşma',
      titleEn: 'Practical Approach',
      descAz: 'Real layihələr və case study-lərlə öyrətmə',
      descEn: 'Teaching with real projects and case studies',
      color: '#5f9dff',
    },
    {
      icon: Users,
      titleAz: 'İcma Dəstəyi',
      titleEn: 'Community Support',
      descAz: 'Ömür boyu davam edən professional şəbəkə',
      descEn: 'Lifelong professional network',
      color: '#3dd3ee',
    },
    {
      icon: Lightbulb,
      titleAz: 'İnnovasiya',
      titleEn: 'Innovation',
      descAz: 'Ən son marketinq trend və texnologiyaları',
      descEn: 'Latest marketing trends and technologies',
      color: '#fad24b',
    },
    {
      icon: TrendingUp,
      titleAz: 'Karyera Dəstəyi',
      titleEn: 'Career Support',
      descAz: 'İş tapmaqda və inkişafda kömək',
      descEn: 'Help with job placement and growth',
      color: '#b4dc19',
    },
    {
      icon: Award,
      titleAz: 'Keyfiyyət',
      titleEn: 'Quality',
      descAz: 'Beynəlxalq standartlarda təlim',
      descEn: 'Training at international standards',
      color: '#c8aff0',
    },
    {
      icon: Heart,
      titleAz: 'Fərdi Yanaşma',
      titleEn: 'Personal Approach',
      descAz: 'Hər tələbəyə diqqət',
      descEn: 'Attention to each student',
      color: '#ff8c19',
    },
  ];

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 animate-fade-in-up">
              {t.about.title}
            </h1>
            <p className="text-xl text-brand-muted leading-relaxed animate-fade-in-up stagger-1">
              {t.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-muted text-lg leading-relaxed mb-6">
                {t.about.description}
              </p>
              <p className="text-brand-muted leading-relaxed">
                {language === 'az'
                  ? '2018-ci ildən bəri 1500-dən çox məzun yetişdirmişik. Məzunlarımız Azərbaycanın və regionun aparıcı şirkətlərində uğurla çalışır.'
                  : 'Since 2018, we have trained over 1500 graduates. Our alumni successfully work in leading companies in Azerbaijan and the region.'}
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video bg-brand-light rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=450&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-brand-border">
                <div className="text-3xl font-bold text-brand-accent">7+</div>
                <div className="text-sm text-brand-muted">
                  {language === 'az' ? 'İllərdir bazarında' : 'Years in market'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-brand-light border border-brand-border">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/20 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {t.about.mission}
              </h3>
              <p className="text-brand-muted leading-relaxed">
                {t.about.missionText}
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-brand-dark text-white">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.about.vision}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t.about.visionText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark mb-12 text-center">
            {language === 'az' ? 'Dəyərlərimiz' : 'Our Values'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="group p-6 bg-white rounded-xl border border-brand-border hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${value.color}20` }}
                >
                  <value.icon className="w-6 h-6" style={{ color: value.color }} />
                </div>
                <h4 className="text-lg font-semibold text-brand-dark mb-2">
                  {language === 'az' ? value.titleAz : value.titleEn}
                </h4>
                <p className="text-brand-muted text-sm">
                  {language === 'az' ? value.descAz : value.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;