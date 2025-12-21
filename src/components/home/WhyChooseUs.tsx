import { UserCheck, HeartHandshake, Target, Flag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const items = [
    {
      icon: UserCheck,
      title: t('why.item1.title'),
      description: t('why.item1.desc'),
      color: 'primary',
    },
    {
      icon: HeartHandshake,
      title: t('why.item2.title'),
      description: t('why.item2.desc'),
      color: 'secondary',
    },
    {
      icon: Target,
      title: t('why.item3.title'),
      description: t('why.item3.desc'),
      color: 'accent',
    },
    {
      icon: Flag,
      title: t('why.item4.title'),
      description: t('why.item4.desc'),
      color: 'primary',
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t('why.title')}</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl hover:bg-muted/50 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-${item.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-6 h-6 text-${item.color}`} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
