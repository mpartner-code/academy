import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { scholarshipCriteria } from '../data/mock';
import { GraduationCap, Award, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';

const Scholarship = () => {
  const { t, language } = useLanguage();

  const benefits = [
    {
      percentAz: '50%',
      percentEn: '50%',
      titleAz: 'Tam Təqaüd',
      titleEn: 'Full Scholarship',
      descAz: 'Ən yüksək nəticə göstərən namizədlər üçün',
      descEn: 'For candidates with the highest results',
    },
    {
      percentAz: '30%',
      percentEn: '30%',
      titleAz: 'Qismən Təqaüd',
      titleEn: 'Partial Scholarship',
      descAz: 'Yüksək potensial göstərən tələbələr üçün',
      descEn: 'For students showing high potential',
    },
    {
      percentAz: '20%',
      percentEn: '20%',
      titleAz: 'Erkən Qeydiyyat',
      titleEn: 'Early Registration',
      descAz: 'Erkən qeydiyyatdan keçən tələbələr üçün',
      descEn: 'For early registrants',
    },
  ];

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fad24b]/20 text-[#b5941a] text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                {language === 'az' ? 'Təqaüd imkanı' : 'Scholarship opportunity'}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
                {t.scholarship.title}
              </h1>
              <p className="text-xl text-brand-muted mb-8">
                {t.scholarship.subtitle}
              </p>
              <Link to="/apply">
                <Button
                  size="lg"
                  className="bg-brand-primary hover:bg-brand-primary/90"
                >
                  {t.scholarship.apply}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-5 border border-brand-border text-center hover:shadow-lg transition-shadow"
                >
                  <div className="text-3xl font-bold text-brand-accent mb-2">
                    {language === 'az' ? benefit.percentAz : benefit.percentEn}
                  </div>
                  <div className="text-sm font-medium text-brand-dark mb-1">
                    {language === 'az' ? benefit.titleAz : benefit.titleEn}
                  </div>
                  <div className="text-xs text-brand-muted">
                    {language === 'az' ? benefit.descAz : benefit.descEn}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Criteria */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark mb-12 text-center">
            {t.scholarship.criteria}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {scholarshipCriteria.map((criteria, idx) => (
              <div
                key={criteria.id}
                className="p-6 bg-brand-light rounded-xl border border-brand-border"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-accent/20 flex items-center justify-center mb-4">
                  {idx === 0 && <GraduationCap className="w-6 h-6 text-brand-accent" />}
                  {idx === 1 && <Award className="w-6 h-6 text-brand-accent" />}
                  {idx === 2 && <FileText className="w-6 h-6 text-brand-accent" />}
                </div>
                <h4 className="font-semibold text-brand-dark mb-2">
                  {language === 'az' ? criteria.titleAz : criteria.titleEn}
                </h4>
                <p className="text-sm text-brand-muted">
                  {language === 'az' ? criteria.descriptionAz : criteria.descriptionEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark mb-12 text-center">
            {language === 'az' ? 'Müraciət prosesi' : 'Application process'}
          </h2>
          <div className="max-w-3xl mx-auto">
            {[
              {
                stepAz: 'Online müraciət formasını doldur',
                stepEn: 'Fill out the online application form',
              },
              {
                stepAz: 'Tələb olunan sənədləri yüklə',
                stepEn: 'Upload required documents',
              },
              {
                stepAz: 'Müsahibəyə dəvət gözlə',
                stepEn: 'Wait for interview invitation',
              },
              {
                stepAz: 'Nəticəni öyrən',
                stepEn: 'Learn the result',
              },
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 mb-6 last:mb-0">
                <div className="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center flex-shrink-0 font-bold">
                  {idx + 1}
                </div>
                <div className="flex-1 pt-2">
                  <p className="text-brand-dark font-medium">
                    {language === 'az' ? step.stepAz : step.stepEn}
                  </p>
                </div>
                {idx < 3 && (
                  <div className="w-px h-8 bg-brand-border ml-5 mt-10 absolute" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Scholarship;