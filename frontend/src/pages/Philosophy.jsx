import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { philosophyPillars } from '../data/mock';
import { Lightbulb, Target, Users, TrendingUp } from 'lucide-react';

const iconMap = {
  Lightbulb,
  Target,
  Users,
  TrendingUp,
};

const Philosophy = () => {
  const { language } = useLanguage();

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
              {language === 'az' ? 'Təhsil Fəlsəfəmiz' : 'Our Philosophy'}
            </h1>
            <p className="text-xl text-brand-muted leading-relaxed">
              {language === 'az'
                ? 'Marketinq Akademiyasında biz yalnız bilik verməklə kifayətlənmirik - biz peşəkar marketoloqlar yetişdiririk.'
                : "At Marketing Academy, we don't just impart knowledge - we nurture professional marketers."}
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {philosophyPillars.map((pillar, idx) => {
              const IconComponent = iconMap[pillar.icon];
              const colors = ['#5f9dff', '#fad24b', '#3dd3ee', '#b4dc19'];
              const color = colors[idx % colors.length];
              return (
                <div
                  key={pillar.id}
                  className="group p-8 rounded-2xl border border-brand-border bg-brand-light hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${color}20` }}
                  >
                    {IconComponent && (
                      <IconComponent className="w-7 h-7" style={{ color }} />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3">
                    {language === 'az' ? pillar.titleAz : pillar.titleEn}
                  </h3>
                  <p className="text-brand-muted leading-relaxed">
                    {language === 'az' ? pillar.descriptionAz : pillar.descriptionEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">
              {language === 'az' ? 'Tədris metodologiyamız' : 'Our teaching methodology'}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  numAz: '70%',
                  numEn: '70%',
                  titleAz: 'Praktiki Təlim',
                  titleEn: 'Practical Training',
                  descAz: 'Real layihələr və case study-lər',
                  descEn: 'Real projects and case studies',
                },
                {
                  numAz: '20%',
                  numEn: '20%',
                  titleAz: 'Nəzəri Bilik',
                  titleEn: 'Theoretical Knowledge',
                  descAz: 'Fundamental marketinq prinspləri',
                  descEn: 'Fundamental marketing principles',
                },
                {
                  numAz: '10%',
                  numEn: '10%',
                  titleAz: 'Mentorluq',
                  titleEn: 'Mentorship',
                  descAz: 'Fərdi rəy və yönləndirmə',
                  descEn: 'Personal feedback and guidance',
                },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-5xl font-bold text-brand-accent mb-3">
                    {language === 'az' ? item.numAz : item.numEn}
                  </div>
                  <div className="font-semibold text-brand-dark mb-2">
                    {language === 'az' ? item.titleAz : item.titleEn}
                  </div>
                  <div className="text-sm text-brand-muted">
                    {language === 'az' ? item.descAz : item.descEn}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Philosophy;