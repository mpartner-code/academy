import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { alumni } from '../data/mock';
import { Quote, Linkedin, ExternalLink } from 'lucide-react';

const Alumni = () => {
  const { t, language } = useLanguage();

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
              {t.alumni.title}
            </h1>
            <p className="text-xl text-brand-muted">{t.alumni.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumni.map((person) => (
              <div
                key={person.id}
                className="group bg-white rounded-2xl overflow-hidden border border-brand-border hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 bg-brand-light">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-bold text-white text-lg">{person.name}</h3>
                    <p className="text-white/80 text-sm">
                      {language === 'az' ? person.titleAz : person.titleEn} @{' '}
                      {person.company}
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-brand-accent/20 text-brand-accent text-xs rounded-full">
                      {person.program}
                    </span>
                    <span className="text-xs text-brand-muted">
                      {person.graduationYear}
                    </span>
                  </div>
                  <div className="relative">
                    <Quote className="w-5 h-5 text-brand-accent/30 absolute -top-1 -left-1" />
                    <p className="text-brand-muted text-sm leading-relaxed pl-4">
                      {language === 'az' ? person.testimonialAz : person.testimonialEn}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-brand-border">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center text-brand-muted hover:text-brand-accent hover:bg-brand-accent/10 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-brand-accent mb-2">1500+</div>
              <div className="text-gray-400">{language === 'az' ? 'Məzun' : 'Graduates'}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#fad24b] mb-2">95%</div>
              <div className="text-gray-400">
                {language === 'az' ? 'İş tapmış' : 'Employed'}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#3dd3ee] mb-2">30+</div>
              <div className="text-gray-400">
                {language === 'az' ? 'Partyor şirkət' : 'Partner companies'}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#b4dc19] mb-2">4.9</div>
              <div className="text-gray-400">
                {language === 'az' ? 'Məmnuniyyət' : 'Satisfaction'}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Alumni;