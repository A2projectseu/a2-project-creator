import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // For now, simulate form submission
    // In production, this would send to an edge function that emails info@a2projects.eu
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      toast({
        title: language === 'it' ? 'Messaggio inviato!' : 'Message sent!',
        description: t('contact.form.success'),
      });
    } catch (error) {
      toast({
        title: language === 'it' ? 'Errore' : 'Error',
        description: t('contact.form.error'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: t('contact.info.email'), value: 'info@a2projects.eu', href: 'mailto:info@a2projects.eu' },
    { icon: Phone, label: t('contact.info.phone'), value: '+39 371 140 3817', href: 'tel:+393711403817' },
    { icon: MapPin, label: t('contact.info.area'), value: t('contact.info.areaValue'), href: null },
    { icon: Linkedin, label: t('contact.info.linkedin'), value: 'Andrea Agostini', href: 'https://www.linkedin.com/in/andrea-agostini-48939a204/' },
  ];

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{t('contact.title')} - A² Projects</title>
        <meta 
          name="description" 
          content={language === 'it' 
            ? 'Contatta A² Projects per una demo gratuita del tuo sito web o per supporto IT. Risposta rapida garantita.'
            : 'Contact A² Projects for a free website demo or IT support. Quick response guaranteed.'
          } 
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-24 hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
                <Mail className="w-4 h-4" />
                {t('nav.contact')}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('contact.title')}</h1>
              <p className="text-lg text-muted-foreground">{t('contact.subtitle')}</p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-24">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Form */}
                <div className="p-8 md:p-10 rounded-3xl card-gradient border border-border shadow-card">
                  {isSubmitted ? (
                    <div className="h-full flex flex-col items-center justify-center text-center py-12">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">
                        {language === 'it' ? 'Grazie!' : 'Thank you!'}
                      </h3>
                      <p className="text-muted-foreground">
                        {t('contact.form.success')}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t('contact.form.name')} *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">{t('contact.form.email')} *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">{t('contact.form.message')} *</Label>
                        <Textarea
                          id="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>

                      <Button 
                        type="submit" 
                        variant="gradient" 
                        size="lg" 
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          t('contact.form.sending')
                        ) : (
                          <>
                            {t('contact.form.submit')}
                            <Send className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </div>

                {/* Contact Info */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">{t('contact.info.title')}</h2>
                    <div className="space-y-4">
                      {contactInfo.map((item, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                            {item.href ? (
                              <a 
                                href={item.href}
                                target={item.href.startsWith('http') ? '_blank' : undefined}
                                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="font-medium hover:text-primary transition-colors"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="font-medium">{item.value}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
