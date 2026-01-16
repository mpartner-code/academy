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
                className="group relative rounded-3xl overflow-hidden animate-fade-in-up shadow-lg"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Full Image */}
                <div className="aspect-[3/4] relative">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4 glass px-4 py-2 rounded-full">
                    <span className="text-sm font-bold text-brand-dark">
                      {instructor.experience}+ {t.instructors.experience}
                    </span>
                  </div>
                  
                  {/* Social Links - shown on hover */}
                  <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full glass flex items-center justify-center text-brand-dark hover:bg-brand-primary hover:text-white transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full glass flex items-center justify-center text-brand-dark hover:bg-brand-primary hover:text-white transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="transform transition-all duration-300 group-hover:-translate-y-2">
                      <h3 className="font-bold text-white text-xl mb-1">
                        {instructor.name}
                      </h3>
                      <p className="text-slate-300 text-sm mb-2">
                        {language === 'az' ? instructor.titleAz : instructor.titleEn}
                      </p>
                      <p className="text-brand-primary font-medium text-sm mb-4">
                        {instructor.company}
                      </p>
                      
                      {/* Specialties */}
                      <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        {instructor.specialties.map((spec, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
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