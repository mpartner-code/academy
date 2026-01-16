import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { communityBenefits } from '../data/mock';
import {
  Users,
  Calendar,
  Briefcase,
  Heart,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const iconMap = {
  Users,
  Calendar,
  Briefcase,
  Heart,
};

const Community = () => {
  const { t, language } = useLanguage();

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4 animate-fade-in-up">
                {t.community.title}
              </h1>
              <p className="text-xl text-brand-muted mb-8 animate-fade-in-up stagger-1">
                {t.community.subtitle}
              </p>
              <div className="flex items-center gap-6 mb-8 animate-fade-in-up stagger-2">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-accent">500+</div>
                  <div className="text-sm text-brand-muted">{t.community.members}</div>
                </div>
                <div className="w-px h-12 bg-brand-border" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#fad24b]">50+</div>
                  <div className="text-sm text-brand-muted">
                    {language === 'az' ? 'Tədbir' : 'Events'}
                  </div>
                </div>
                <div className="w-px h-12 bg-brand-border" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#3dd3ee]">30+</div>
                  <div className="text-sm text-brand-muted">
                    {language === 'az' ? 'Partyor' : 'Partners'}
                  </div>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-brand-primary hover:bg-brand-primary/90 animate-fade-in-up stagger-3"
              >
                {t.community.join}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-brand-light rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=600&fit=crop"
                  alt="Community"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-brand-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#b4dc19]/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-[#b4dc19]" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark">Aktiv üzvlər</div>
                    <div className="text-sm text-brand-muted">Online indi: 47</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark mb-12 text-center">
            {t.community.benefits}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityBenefits.map((benefit) => {
              const IconComponent = iconMap[benefit.icon];
              return (
                <div
                  key={benefit.id}
                  className="group p-6 bg-brand-light rounded-xl hover:bg-white hover:shadow-lg border border-transparent hover:border-brand-border transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-brand-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {IconComponent && (
                      <IconComponent className="w-6 h-6 text-brand-accent" />
                    )}
                  </div>
                  <h4 className="font-semibold text-brand-dark mb-2">
                    {language === 'az' ? benefit.titleAz : benefit.titleEn}
                  </h4>
                  <p className="text-sm text-brand-muted">
                    {language === 'az' ? benefit.descriptionAz : benefit.descriptionEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-brand-dark rounded-2xl p-8 md:p-12 lg:p-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {language === 'az'
                  ? 'Kluba qoşulmaq üçün'
                  : 'To join the club'}
              </h2>
              <p className="text-gray-400 mb-8">
                {language === 'az'
                  ? 'Akademiyanın hər hansı proqramını bitirərək avtomatik olaraq klubun üzvusü olursunuz.'
                  : 'By completing any program at the Academy, you automatically become a member of the club.'}
              </p>
              <div className="space-y-3 mb-8">
                {[
                  language === 'az'
                    ? 'Proqram məzunları üçün pulsuz'
                    : 'Free for program graduates',
                  language === 'az'
                    ? 'Ömür boyu üzvlük'
                    : 'Lifetime membership',
                  language === 'az'
                    ? 'Eksklüziv tədbirlərə giriş'
                    : 'Access to exclusive events',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/apply">
                <Button size="lg" className="bg-brand-accent hover:bg-brand-accent/90">
                  {language === 'az' ? 'Proqrama müraciət et' : 'Apply for a program'}
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

export default Community;