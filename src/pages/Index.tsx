import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesCarousel from '@/components/home/ServicesCarousel';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  const { language } = useLanguage();

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>A² Projects</title>
        <meta 
          name="description" 
          content={language === 'it' 
            ? 'A² Projects offre soluzioni IT personalizzate e siti web moderni per privati e piccole imprese in Italia. Richiedi una demo gratuita.'
            : 'A² Projects offers tailored IT solutions and modern websites for individuals and small businesses in Italy. Request a free demo.'
          } 
        />
      </Helmet>
      <Layout>
        <HeroSection />
        <AboutSection />
        <ServicesCarousel />
        <WhyChooseUs />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
