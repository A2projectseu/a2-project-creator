import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Zap, 
  Smartphone, 
  Link2, 
  Layout as LayoutIcon, 
  Wrench, 
  Users, 
  Monitor,
  Search,
  FileText,
  Rocket,
  HeartHandshake,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const ITSolution = () => {
  const { t, language } = useLanguage();

  const websiteFeatures = [
    { icon: Zap, text: t('itSolution.websites.feature1') },
    { icon: Smartphone, text: t('itSolution.websites.feature2') },
    { icon: Link2, text: t('itSolution.websites.feature3') },
    { icon: LayoutIcon, text: t('itSolution.websites.feature4') },
  ];

  const otherServices = [
    {
      icon: Wrench,
      title: t('itSolution.support.title'),
      desc: t('itSolution.support.desc'),
    },
    {
      icon: Users,
      title: t('itSolution.consulting.title'),
      desc: t('itSolution.consulting.desc'),
    },
    {
      icon: Monitor,
      title: t('itSolution.devices.title'),
      desc: t('itSolution.devices.desc'),
    },
  ];

  const processSteps = [
    { icon: Search, title: t('itSolution.process.step1.title'), desc: t('itSolution.process.step1.desc') },
    { icon: FileText, title: t('itSolution.process.step2.title'), desc: t('itSolution.process.step2.desc') },
    { icon: Rocket, title: t('itSolution.process.step3.title'), desc: t('itSolution.process.step3.desc') },
    { icon: HeartHandshake, title: t('itSolution.process.step4.title'), desc: t('itSolution.process.step4.desc') },
  ];

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>IT Solution - A² Projects</title>
        <meta 
          name="description" 
          content={language === 'it' 
            ? 'IT Solution: servizio IT completo con focus su siti web personalizzati per privati e piccole imprese in Italia.'
            : 'IT Solution: complete IT service with focus on custom websites for individuals and small businesses in Italy.'
          } 
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-24 hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          </div>

          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                IT Solution
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('itSolution.hero.title')}</h1>
              <p className="text-lg text-muted-foreground mb-8">{t('itSolution.hero.subtitle')}</p>
              <p className="text-muted-foreground">{t('itSolution.summary')}</p>
            </div>
          </div>
        </section>

        {/* Website Creation - Main Focus */}
        <section className="py-24">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    Main Focus
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('itSolution.websites.title')}</h2>
                  <p className="text-lg text-muted-foreground mb-8">{t('itSolution.websites.desc')}</p>
                  
                  <div className="grid gap-4">
                    {websiteFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-8 flex items-center justify-center">
                    <div className="w-full h-full rounded-2xl bg-card border border-border shadow-card flex items-center justify-center">
                      <Globe className="w-24 h-24 text-primary/30" />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl blur-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {otherServices.map((service, index) => (
                  <div key={index} className="p-8 rounded-2xl card-gradient border border-border shadow-card">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                      <service.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t('itSolution.process.title')}</h2>
              
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
                
                <div className="space-y-8">
                  {processSteps.map((step, index) => (
                    <div key={index} className="relative flex gap-6 md:gap-8">
                      <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-glow">
                        <step.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div className="pt-3">
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('itSolution.cta.title')}</h2>
              <p className="text-lg text-muted-foreground mb-8">{t('itSolution.cta.subtitle')}</p>
              <Button asChild variant="gradient" size="xl">
                <Link to="/contact">
                  {t('itSolution.cta.button')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ITSolution;
