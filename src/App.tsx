import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Clock, Phone, Mail, Instagram, Facebook, ChevronDown, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-bakery-bg/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div
            className={`font-serif text-2xl cursor-pointer ${
              isScrolled ? 'text-bakery-text' : 'text-white'
            }`}
            onClick={() => scrollTo('home')}
          >
            Bakkerij Zuiderpark
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Over Ons', 'Menu', 'Galerij', 'Reviews', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-bakery-gold ${
                  isScrolled ? 'text-bakery-text' : 'text-white/90'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden ${isScrolled ? 'text-bakery-text' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-bakery-bg pt-24 px-6 flex flex-col space-y-6 md:hidden"
          >
            {['Over Ons', 'Menu', 'Galerij', 'Reviews', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}
                className="text-2xl font-serif text-bakery-text text-left border-b border-bakery-muted/20 pb-4"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop"
            alt="Vers brood op een houten tafel"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl text-white mb-6"
          >
            Bakkerij Zuiderpark
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 font-light mb-10"
          >
            Ambachtelijk brood & lunch in het hart van Zuid
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollTo('menu')}
              className="px-8 py-4 bg-bakery-gold text-white rounded-full font-medium tracking-wide hover:bg-bakery-gold/90 transition-colors w-full sm:w-auto"
            >
              Bekijk Menu
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-medium tracking-wide hover:bg-white/20 transition-colors w-full sm:w-auto"
            >
              Kom Langs
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 animate-bounce cursor-pointer"
          onClick={() => scrollTo('over-ons')}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Over Ons */}
      <section id="over-ons" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2089&auto=format&fit=crop"
              alt="De bakker aan het werk"
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl mb-6 text-bakery-text">Ons Verhaal</h2>
            <div className="w-16 h-1 bg-bakery-gold mb-8 rounded-full"></div>
            <p className="text-lg text-bakery-muted mb-6 leading-relaxed">
              Als hecht familiebedrijf bakken wij al 12 jaar met liefde voor de buurt. Bij Bakkerij Zuiderpark geloven we in eerlijke ingrediënten en de tijd nemen voor een goed deeg. Geen fabrieksproducten, maar alles dagelijks vers uit eigen oven.
            </p>
            <p className="text-lg text-bakery-muted mb-8 leading-relaxed">
              Elke ochtend om 05:00 staan wij al in de bakkerij om ervoor te zorgen dat u de dag kunt beginnen met de geur van versgebakken brood.
            </p>
            <div className="flex items-center gap-4 text-bakery-terracotta font-medium">
              <Clock size={24} />
              <span>Al 12 jaar een begrip in Rotterdam Zuid</span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 text-bakery-text">Ons Menu</h2>
            <div className="w-16 h-1 bg-bakery-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Categorie 1 */}
            <div>
              <h3 className="text-2xl text-bakery-terracotta mb-6 border-b border-bakery-muted/20 pb-4">Brood & Gebak</h3>
              <ul className="space-y-6">
                {[
                  { name: 'Desem Volkoren', desc: 'Huisgemaakt, 24u gerezen', price: '3,50' },
                  { name: 'Croissant', desc: 'Roomboter, vers afgebakken', price: '2,20' },
                  { name: 'Appelgebak', desc: 'Met kaneel en rozijnen', price: '3,80' },
                  { name: 'Stokbrood Wit', desc: 'Krokante korst, zacht van binnen', price: '2,50' },
                ].map((item) => (
                  <li key={item.name}>
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-serif text-lg text-bakery-text">{item.name}</span>
                      <span className="text-bakery-gold font-medium">€{item.price}</span>
                    </div>
                    <p className="text-sm text-bakery-muted">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categorie 2 */}
            <div>
              <h3 className="text-2xl text-bakery-terracotta mb-6 border-b border-bakery-muted/20 pb-4">Lunch</h3>
              <ul className="space-y-6">
                {[
                  { name: 'Broodje Gezond', desc: 'Kaas, ham, ei, verse groenten', price: '6,50' },
                  { name: 'Tosti Kaas/Ham', desc: 'Op dik gesneden landbrood', price: '5,50' },
                  { name: 'Soep van de Dag', desc: 'Wisselende verse soep met brood', price: '5,00' },
                  { name: 'Broodje Carpaccio', desc: 'Truffelmayo, pijnboompitten, parmezaan', price: '8,50' },
                ].map((item) => (
                  <li key={item.name}>
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-serif text-lg text-bakery-text">{item.name}</span>
                      <span className="text-bakery-gold font-medium">€{item.price}</span>
                    </div>
                    <p className="text-sm text-bakery-muted">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categorie 3 */}
            <div>
              <h3 className="text-2xl text-bakery-terracotta mb-6 border-b border-bakery-muted/20 pb-4">Dranken</h3>
              <ul className="space-y-6">
                {[
                  { name: 'Koffie', desc: 'Vers gemalen bonen', price: '2,80' },
                  { name: 'Cappuccino', desc: 'Met romig melkschuim', price: '3,20' },
                  { name: 'Verse Jus', desc: 'Vers geperste sinaasappels', price: '3,50' },
                  { name: 'Thee', desc: 'Diverse smaken verse thee', price: '2,50' },
                ].map((item) => (
                  <li key={item.name}>
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-serif text-lg text-bakery-text">{item.name}</span>
                      <span className="text-bakery-gold font-medium">€{item.price}</span>
                    </div>
                    <p className="text-sm text-bakery-muted">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Galerij */}
      <section id="galerij" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-bakery-text">Sfeer Proeven</h2>
          <div className="w-16 h-1 bg-bakery-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {[
            'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2000&auto=format&fit=crop',
          ].map((src, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-xl group cursor-pointer">
              <img
                src={src}
                alt={`Sfeerbeeld ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 px-6 bg-bakery-text text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">Wat Onze Gasten Zeggen</h2>
            <div className="w-16 h-1 bg-bakery-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Beste brood van Rotterdam Zuid. We komen hier elke zaterdag voor ons weekendontbijt.",
                author: "Maria D.",
              },
              {
                quote: "De soep van de dag is altijd raak. Fijne plek voor een snelle, lekkere lunch tijdens werk.",
                author: "Kevin R.",
              },
              {
                quote: "Heerlijke sfeer en super vriendelijk personeel. De appeltaart is een absolute aanrader!",
                author: "Sophie T.",
              },
            ].map((review, index) => (
              <div key={index} className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <div className="flex gap-1 text-bakery-gold mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg font-light italic mb-6 text-white/90">"{review.quote}"</p>
                <p className="font-serif text-bakery-gold">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locatie & Contact */}
      <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Openingstijden & Info */}
          <div>
            <h2 className="text-4xl md:text-5xl mb-6 text-bakery-text">Kom Langs</h2>
            <div className="w-16 h-1 bg-bakery-gold mb-10 rounded-full"></div>

            <div className="space-y-8 mb-10">
              <div className="flex gap-4">
                <Clock className="text-bakery-terracotta shrink-0" size={24} />
                <div>
                  <h4 className="font-serif text-xl mb-2 text-bakery-text">Openingstijden</h4>
                  <table className="w-full text-bakery-muted">
                    <tbody>
                      <tr><td className="py-1 w-24">Ma - Vr</td><td>07:00 – 17:00</td></tr>
                      <tr><td className="py-1">Zaterdag</td><td>08:00 – 16:00</td></tr>
                      <tr><td className="py-1">Zondag</td><td>Gesloten</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-bakery-terracotta shrink-0" size={24} />
                <div>
                  <h4 className="font-serif text-xl mb-2 text-bakery-text">Adres</h4>
                  <p className="text-bakery-muted">Zuiderparkweg 123<br />3084 AG Rotterdam</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-bakery-terracotta shrink-0" size={24} />
                <div>
                  <h4 className="font-serif text-xl mb-2 text-bakery-text">Telefoon</h4>
                  <p className="text-bakery-muted">010 - 123 45 67</p>
                </div>
              </div>
            </div>

            <a
              href="tel:0101234567"
              className="inline-flex items-center justify-center px-8 py-4 bg-bakery-text text-white rounded-full font-medium tracking-wide hover:bg-bakery-text/90 transition-colors w-full sm:w-auto"
            >
              Bel Ons
            </a>
          </div>

          {/* Reserveren Formulier */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-bakery-muted/10">
            <h3 className="text-3xl font-serif text-bakery-text mb-4">Reserveren of Vragen?</h3>
            <p className="text-bakery-muted mb-8">Wilt u een tafel reserveren voor een groep of heeft u een vraag? Laat het ons weten.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-bakery-text mb-2">Naam</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-bakery-bg border-none focus:ring-2 focus:ring-bakery-gold outline-none transition-shadow" placeholder="Uw naam" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-bakery-text mb-2">E-mail</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-bakery-bg border-none focus:ring-2 focus:ring-bakery-gold outline-none transition-shadow" placeholder="Uw e-mail" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-bakery-text mb-2">Telefoon</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl bg-bakery-bg border-none focus:ring-2 focus:ring-bakery-gold outline-none transition-shadow" placeholder="Uw nummer" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-bakery-text mb-2">Bericht</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-bakery-bg border-none focus:ring-2 focus:ring-bakery-gold outline-none transition-shadow resize-none" placeholder="Waarmee kunnen we u helpen?"></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-bakery-gold text-white rounded-xl font-medium tracking-wide hover:bg-bakery-gold/90 transition-colors">
                Verstuur Bericht
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A0E09] text-white/70 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-2xl text-white mb-2">Bakkerij Zuiderpark</h2>
            <p className="text-sm">Ambachtelijk brood & lunch in Rotterdam Zuid</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-bakery-gold transition-colors"><Instagram size={24} /></a>
            <a href="#" className="hover:text-bakery-gold transition-colors"><Facebook size={24} /></a>
          </div>

          <div className="text-center md:text-right text-sm space-y-2">
            <p>KVK: 12345678</p>
            <p>© {new Date().getFullYear()} Bakkerij Zuiderpark</p>
            <p className="text-white/40 text-xs mt-4">
              Website door <a href="#" className="hover:text-white transition-colors">Ayoub Benmira</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
