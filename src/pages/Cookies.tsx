import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';

const Cookies = () => {
  const { language } = useLanguage();

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>Cookie Policy - A² Projects</title>
      </Helmet>
      <Layout>
        <section className="py-24">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-muted-foreground">
                  {language === 'it' 
                    ? 'Questa pagina conterrà la cookie policy. In fase di sviluppo.'
                    : 'This page will contain the cookie policy. Under development.'
                  }
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Cookies;
