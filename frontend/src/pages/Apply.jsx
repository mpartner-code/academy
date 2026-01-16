import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { programs } from '../data/mock';
import { Send, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { toast } from 'sonner';

const Apply = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
    toast.success(
      language === 'az'
        ? 'Müraciətiniz göndərildi!'
        : 'Your application has been submitted!'
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <main className="pt-24 min-h-screen flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 bg-[#b4dc19]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-[#b4dc19]" />
            </div>
            <h1 className="text-3xl font-bold text-brand-dark mb-4">
              {language === 'az' ? 'Müraciətiniz qəbul edildi!' : 'Application received!'}
            </h1>
            <p className="text-brand-muted mb-8">
              {language === 'az'
                ? 'Yaxın zamanda sizinlə əlaqə saxlanılacaq.'
                : 'We will contact you soon.'}
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="border-brand-border"
            >
              {language === 'az' ? 'Yeni müraciət' : 'New application'}
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Form */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
                {t.apply.title}
              </h1>
              <p className="text-xl text-brand-muted mb-10">
                {t.apply.subtitle}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t.apply.form.name}</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={language === 'az' ? 'Adınızı daxil edin' : 'Enter your name'}
                    className="h-12"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.apply.form.email}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="email@example.com"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t.apply.form.phone}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+994 50 XXX XX XX"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>{t.apply.form.program}</Label>
                  <Select
                    value={formData.program}
                    onValueChange={(value) =>
                      setFormData({ ...formData, program: value })
                    }
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue
                        placeholder={
                          language === 'az' ? 'Proqram seçin' : 'Select a program'
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {programs.map((program) => (
                        <SelectItem key={program.id} value={program.id.toString()}>
                          {language === 'az' ? program.titleAz : program.titleEn}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t.apply.form.message}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder={
                      language === 'az'
                        ? 'Əlavə məlumat və ya sualınız varsa yazın'
                        : 'Write any additional information or questions'
                    }
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-brand-primary hover:bg-brand-primary/90 h-12"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {language === 'az' ? 'Göndərilir...' : 'Sending...'}
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      {t.apply.form.submit}
                    </span>
                  )}
                </Button>
              </form>
            </div>

            {/* Right - Contact Info */}
            <div className="lg:pl-12">
              <div className="bg-brand-dark rounded-2xl p-8 text-white sticky top-32">
                <h3 className="text-xl font-bold mb-6">
                  {language === 'az' ? 'Əlaqə məlumatları' : 'Contact information'}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-brand-accent" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">
                        {language === 'az' ? 'Ünvan' : 'Address'}
                      </div>
                      <div className="text-gray-400 text-sm">
                        Nizami küçəsi 203B, Bakı, Azərbaycan
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-brand-accent" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">
                        {language === 'az' ? 'Telefon' : 'Phone'}
                      </div>
                      <a
                        href="tel:+994501234567"
                        className="text-gray-400 text-sm hover:text-brand-accent transition-colors"
                      >
                        +994 50 123 45 67
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-brand-accent" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Email</div>
                      <a
                        href="mailto:info@marketinq.az"
                        className="text-gray-400 text-sm hover:text-brand-accent transition-colors"
                      >
                        info@marketinq.az
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <h4 className="font-medium mb-4">
                    {language === 'az' ? 'İş saatları' : 'Working hours'}
                  </h4>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex justify-between">
                      <span>{language === 'az' ? 'Bazar ertəsi - Cümə' : 'Monday - Friday'}</span>
                      <span>09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{language === 'az' ? 'Şənbə' : 'Saturday'}</span>
                      <span>10:00 - 15:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{language === 'az' ? 'Bazar' : 'Sunday'}</span>
                      <span className="text-brand-accent">
                        {language === 'az' ? 'Bağlı' : 'Closed'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Apply;