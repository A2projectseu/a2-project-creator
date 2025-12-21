import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Globe, ArrowRight, Plus, Layers } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const Services = () => {
  const { t, language } = useLanguage();

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>A² Projects - {t('servicesPage.title')}</title>
        <meta 
          name="description" 
          content={language === 'it' 
            ? 'Scopri i servizi IT di A² Projects: creazione siti web, supporto tecnico e consulenza per privati e piccole imprese.'
            : 'Discover A² Projects IT services: website creation, technical support and consulting for individuals and small businesses.'
          } 
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-24 hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6">
                <Layers className="w-4 h-4" />
                {t('nav.services')}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('servicesPage.title')}</h1>
              <p className="text-lg text-muted-foreground mb-4">{t('servicesPage.subtitle')}</p>
              <p className="text-muted-foreground">{t('servicesPage.intro')}</p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* IT Solution Card */}
              <div className="group relative p-10 rounded-3xl card-gradient border border-border shadow-card hover:shadow-glow transition-all duration-500">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-glow">
                    <Globe className="w-8 h-8 text-primary-foreground" />
                  </div>

                  <h2 className="text-2xl font-bold mb-4">{t('services.itSolution.title')}</h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                    {t('services.itSolution.desc')}
                  </p>

                  <Button asChild variant="hero">
                    <Link to="/it-solution">
                      {t('services.itSolution.cta')}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Coming Soon Card */}
              <div className="p-10 rounded-3xl border-2 border-dashed border-border/50 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-6">
                  <Plus className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-muted-foreground mb-2">{t('services.comingSoon')}</h3>
                <p className="text-muted-foreground text-sm">Stay tuned</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
