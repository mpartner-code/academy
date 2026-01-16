import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { instructors } from '../data/mock';
import { Linkedin, Mail, Award } from 'lucide-react';

const Instructors = () => {
  const { t, language } = useLanguage();

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4 animate-fade-in-up">
              {t.instructors.title}
            </h1>
            <p className="text-xl text-brand-muted animate-fade-in-up stagger-1">
              {t.instructors.subtitle}
            </p>
          </div>

          {/* Instructors Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructors.map((instructor, idx) => (
              <div
                key={instructor.id}
                className="group bg-white rounded-2xl overflow-hidden border border-brand-border hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-brand-accent transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-brand-accent transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-brand-dark text-lg mb-1">
                    {instructor.name}
                  </h3>
                  <p className="text-sm text-brand-muted mb-3">
                    {language === 'az' ? instructor.titleAz : instructor.titleEn}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-brand-accent">
                      {instructor.company}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-brand-muted">
                      <Award className="w-3 h-3" />
                      {instructor.experience} {t.instructors.experience}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {instructor.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-brand-light rounded text-xs text-brand-muted"
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

      {/* Become Instructor CTA */}
      <section className="section-padding bg-brand-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              {language === 'az'
                ? 'Təlimçi olmaq istəyirsiniz?'
                : 'Want to become an instructor?'}
            </h2>
            <p className="text-brand-muted mb-6">
              {language === 'az'
                ? 'Marketinq təcrübənizi paylaşın və növbəti nəsil marketoloqlara kömək edin.'
                : 'Share your marketing experience and help the next generation of marketers.'}
            </p>
            <a
              href="mailto:instructors@marketinq.az"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-primary/90 transition-colors"
            >
              <Mail className="w-4 h-4" />
              {language === 'az' ? 'Bizimlə əlaqə' : 'Contact us'}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Instructors;