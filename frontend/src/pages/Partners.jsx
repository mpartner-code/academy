import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { academicPartners, corporateClients } from '../data/mock';
import { GraduationCap, Building2, Handshake } from 'lucide-react';

const Partners = () => {
  const { language } = useLanguage();

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
              {language === 'az' ? 'Partnyorlarımız' : 'Our Partners'}
            </h1>
            <p className="text-xl text-brand-muted">
              {language === 'az'
                ? 'Akademik və karyera partnyorlarımız ilə birlikə keyfiyyətli təhsil və iş imkanları təqdim edirik.'
                : 'Together with our academic and career partners, we offer quality education and job opportunities.'}
            </p>
          </div>
        </div>
      </section>

      {/* Academic Partners */}
      <section className="pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-brand-accent/20 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-brand-accent" />
            </div>
            <h2 className="text-2xl font-bold text-brand-dark">
              {language === 'az' ? 'Akademik Partnyorlar' : 'Academic Partners'}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {academicPartners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white rounded-xl p-6 border border-brand-border flex items-center justify-center h-32 hover:shadow-lg transition-shadow"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Partners */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-[#fad24b]/20 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-[#b5941a]" />
            </div>
            <h2 className="text-2xl font-bold text-brand-dark">
              {language === 'az' ? 'Karyera Partnyorları' : 'Career Partners'}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {corporateClients.map((partner) => (
              <div
                key={partner.id}
                className="bg-brand-light rounded-xl p-4 border border-brand-border flex items-center justify-center h-24 hover:bg-white hover:shadow-md transition-all"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become Partner */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-brand-primary rounded-2xl p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                  <Handshake className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  {language === 'az'
                    ? 'Partnyorumuz olmaq istəyirsiniz?'
                    : 'Want to become our partner?'}
                </h2>
                <p className="text-white/80 mb-6">
                  {language === 'az'
                    ? 'Təhsil və ya işgüzar partnyorluq üçün bizimlə əlaqə saxlayın.'
                    : 'Contact us for educational or business partnership.'}
                </p>
                <a
                  href="mailto:partners@marketinq.az"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-primary rounded-lg hover:bg-gray-100 transition-colors font-medium"
                >
                  {language === 'az' ? 'Əlaqə saxla' : 'Get in touch'}
                </a>
              </div>
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  {[...Array(4)].map((_, idx) => (
                    <div
                      key={idx}
                      className="h-24 rounded-xl bg-white/10 animate-pulse"
                      style={{ animationDelay: `${idx * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Partners;