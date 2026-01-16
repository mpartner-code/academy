import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { corporateClients } from '../data/mock';
import {
  Building2,
  Users,
  Award,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const Corporate = () => {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: Users,
      titleAz: 'Komanda Təlimləri',
      titleEn: 'Team Training',
      descAz: 'Marketinq komandalarnız üçün xüsusi təlim proqramları',
      descEn: 'Custom training programs for your marketing teams',
    },
    {
      icon: Award,
      titleAz: 'Sertifikatlı Proqramlar',
      titleEn: 'Certified Programs',
      descAz: 'Beynəlxalq standartlara uyğun sertifikatlar',
      descEn: 'Certificates aligned with international standards',
    },
    {
      icon: TrendingUp,
      titleAz: 'Konsaltinq',
      titleEn: 'Consulting',
      descAz: 'Marketinq strategiyası üzrə məsləhət xidmətləri',
      descEn: 'Marketing strategy consulting services',
    },
  ];

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/20 text-brand-accent text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                B2B
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
                {t.corporate.title}
              </h1>
              <p className="text-xl text-brand-muted mb-8">
                {t.corporate.subtitle}
              </p>
              <div className="space-y-3 mb-8">
                {[
                  language === 'az'
                    ? 'Xüsusi təlim proqramları'
                    : 'Custom training programs',
                  language === 'az'
                    ? 'Çevik təlim cədvəli'
                    : 'Flexible training schedule',
                  language === 'az'
                    ? 'Nəticə yönümlü yanaşma'
                    : 'Results-oriented approach',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                    <span className="text-brand-dark">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/apply">
                <Button
                  size="lg"
                  className="bg-brand-primary hover:bg-brand-primary/90"
                >
                  {t.corporate.contact}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-brand-light rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                  alt="Corporate training"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark mb-12 text-center">
            {language === 'az' ? 'Xidmətlərimiz' : 'Our Services'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-xl border border-brand-border bg-brand-light hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-brand-accent" />
                </div>
                <h4 className="font-semibold text-brand-dark mb-2">
                  {language === 'az' ? service.titleAz : service.titleEn}
                </h4>
                <p className="text-sm text-brand-muted">
                  {language === 'az' ? service.descAz : service.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark mb-12 text-center">
            {t.corporate.clients}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {corporateClients.map((client) => (
              <div
                key={client.id}
                className="bg-white rounded-xl p-4 border border-brand-border flex items-center justify-center h-24 grayscale hover:grayscale-0 transition-all"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Corporate;