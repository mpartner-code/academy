import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { events } from '../data/mock';
import { Button } from '../components/ui/button';
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';

const Events = () => {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState('upcoming');

  const filteredEvents = events.filter((e) => e.type === filter);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(language === 'az' ? 'az-AZ' : 'en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4 animate-fade-in-up">
              {t.events.title}
            </h1>
            <p className="text-xl text-brand-muted animate-fade-in-up stagger-1">
              {t.events.subtitle}
            </p>
          </div>

          {/* Filter */}
          <div className="flex gap-4 mb-10">
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-6 py-2.5 rounded-full font-medium transition-colors ${
                filter === 'upcoming'
                  ? 'bg-brand-primary text-white'
                  : 'bg-white text-brand-dark border border-brand-border hover:border-brand-primary'
              }`}
            >
              {t.events.upcoming}
            </button>
            <button
              onClick={() => setFilter('past')}
              className={`px-6 py-2.5 rounded-full font-medium transition-colors ${
                filter === 'past'
                  ? 'bg-brand-primary text-white'
                  : 'bg-white text-brand-dark border border-brand-border hover:border-brand-primary'
              }`}
            >
              {t.events.past}
            </button>
          </div>

          {/* Events List */}
          <div className="space-y-6">
            {filteredEvents.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-xl border border-brand-border">
                <Calendar className="w-12 h-12 text-brand-muted mx-auto mb-4" />
                <p className="text-brand-muted">
                  {language === 'az'
                    ? 'Hal-hazırda tədbir yoxdur'
                    : 'No events at the moment'}
                </p>
              </div>
            ) : (
              filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="group bg-white rounded-2xl p-6 md:p-8 border border-brand-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {/* Date Box */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-brand-light rounded-xl flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold text-brand-accent">
                          {new Date(event.date).getDate()}
                        </span>
                        <span className="text-xs text-brand-muted uppercase">
                          {new Date(event.date).toLocaleDateString(
                            language === 'az' ? 'az-AZ' : 'en-US',
                            { month: 'short' }
                          )}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {event.isFree ? (
                          <span className="px-3 py-1 bg-[#b4dc19]/20 text-[#7a9411] text-xs font-medium rounded-full">
                            {t.events.free}
                          </span>
                        ) : (
                          <span className="px-3 py-1 bg-brand-accent/20 text-brand-accent text-xs font-medium rounded-full">
                            {event.price} AZN
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-accent transition-colors">
                        {language === 'az' ? event.titleAz : event.titleEn}
                      </h3>
                      <p className="text-brand-muted text-sm mb-4">
                        {language === 'az' ? event.descriptionAz : event.descriptionEn}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-brand-muted">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </span>
                      </div>
                    </div>

                    {/* Action */}
                    {filter === 'upcoming' && (
                      <div className="flex-shrink-0">
                        <Button className="bg-brand-primary hover:bg-brand-primary/90">
                          {t.events.register}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Events;