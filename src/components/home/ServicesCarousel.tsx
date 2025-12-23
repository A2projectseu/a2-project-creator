import { Link } from 'react-router-dom';
import { Monitor, ArrowRight, Plus, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const ServicesCarousel = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('services.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* IT Solution Card */}
          <div className="group relative p-8 rounded-3xl card-gradient border border-border shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-1">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4285F4] via-[#EA4335] to-[#FBBC04] flex items-center justify-center mb-6 shadow-lg">
                <Monitor className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3">{t('services.itSolution.title')}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t('services.itSolution.desc')}
              </p>

              <Button asChild variant="outline" className="group/btn">
                <Link to="/it-solution">
                  {t('services.itSolution.cta')}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* YouTube Channel Card */}
          <div className="group relative p-8 rounded-3xl card-gradient border border-border shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-1">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FF0000]/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF0000] to-[#CC0000] flex items-center justify-center mb-6 shadow-lg">
                <Youtube className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3">{t('services.youtube.title')}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t('services.youtube.desc')}
              </p>

              <Button asChild variant="outline" className="group/btn">
                <a href="https://www.youtube.com/@A2ProjectsCore" target="_blank" rel="noopener noreferrer">
                  {t('services.youtube.cta')}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          {/* Coming Soon Card */}
          <div className="p-8 rounded-3xl border-2 border-dashed border-border/50 flex flex-col items-center justify-center text-center min-h-[300px]">
            <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-4">
              <Plus className="w-7 h-7 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground font-medium">{t('services.comingSoon')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
