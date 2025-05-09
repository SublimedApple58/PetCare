const Footer = () => {
  return (
    <footer className="bg-[#8B5A2B] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <i className="fas fa-paw text-[#F3C677] text-2xl mr-2"></i>
              <span className="font-heading font-bold text-xl">The dog side</span>
            </div>
            <p className="mb-4 text-white/80">
              Offriamo cure temporanee e amorevoli per il tuo cane in un ambiente familiare.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-[#F3C677] transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white/80 hover:text-[#F3C677] transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white/80 hover:text-[#F3C677] transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
            </div> */}
          </div>
          
          <div>
            <h5 className="font-heading font-bold text-lg mb-4">Link Rapidi</h5>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-[#F3C677] transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/80 hover:text-[#F3C677] transition-colors">Chi siamo</a></li>
              <li><a href="#services" className="text-white/80 hover:text-[#F3C677] transition-colors">Servizi</a></li>
              <li><a href="#gallery" className="text-white/80 hover:text-[#F3C677] transition-colors">Galleria</a></li>
              <li><a href="#testimonials" className="text-white/80 hover:text-[#F3C677] transition-colors">Testimonianze</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-heading font-bold text-lg mb-4">Servizi</h5>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white/80 hover:text-[#F3C677] transition-colors">Asilo diurno</a></li>
              <li><a href="#services" className="text-white/80 hover:text-[#F3C677] transition-colors">Pernottamenti</a></li>
              <li><a href="#services" className="text-white/80 hover:text-[#F3C677] transition-colors">Servizio passeggiate</a></li>
              <li><a href="#services" className="text-white/80 hover:text-[#F3C677] transition-colors">Cura per cani anziani</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-heading font-bold text-lg mb-4">Contatti</h5>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-2"></i>
                <span>Colledara, Bascinaella, Frazione Villa Piane snc</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone mt-1 mr-2"></i>
                <span>+39 331 7335872</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-2"></i>
                <span>sirya-felice@outlook.it</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock mt-1 mr-2"></i>
                <span>24/7, 365 giorni l'anno</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-white/60">
            &copy; {new Date().getFullYear()} The dog side. Tutti i diritti riservati.
          </p>
          <p className="text-white/60 mt-2 text-sm">
            <a href="#" className="hover:text-[#F3C677] transition-colors">Privacy Policy</a> | 
            <a href="#" className="hover:text-[#F3C677] transition-colors"> Termini di servizio</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
