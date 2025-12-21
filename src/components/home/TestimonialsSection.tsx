import { Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t('testimonials.placeholder1.name'),
      role: t('testimonials.placeholder1.role'),
      text: t('testimonials.placeholder1.text'),
    },
    {
      name: t('testimonials.placeholder2.name'),
      role: t('testimonials.placeholder2.role'),
      text: t('testimonials.placeholder2.text'),
    },
    {
      name: t('testimonials.placeholder3.name'),
      role: t('testimonials.placeholder3.role'),
      text: t('testimonials.placeholder3.text'),
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t('testimonials.title')}</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative p-8 rounded-3xl card-gradient border border-border shadow-card"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
