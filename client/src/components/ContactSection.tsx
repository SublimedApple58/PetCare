import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-[#4A7C59] paw-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:flex items-start">
            <motion.div 
              className="lg:w-5/12 mb-12 lg:mb-0 lg:pr-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Contattaci</h2>
              <p className="text-white/90 mb-8 text-lg">
                Hai domande o vuoi prenotare un soggiorno per il tuo amico a quattro zampe? Scrivici! Ci farà piacere sentirti e parlare di come possiamo prenderci cura al meglio del tuo cane.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                      <i className="fas fa-map-marker-alt text-white"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="font-semibold text-white">Indirizzo</h5>
                    <p className="text-white/80">123 Bark Avenue, Dogtown, CA 90210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                      <i className="fas fa-phone text-white"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="font-semibold text-white">Telefono</h5>
                    <p className="text-white/80">(555) 123-BARK</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                      <i className="fas fa-envelope text-white"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="font-semibold text-white">Email</h5>
                    <p className="text-white/80">sirya@dogdaycare.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                      <i className="fas fa-clock text-white"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="font-semibold text-white">Orari</h5>
                    <p className="text-white/80">Lunedì - Venerdì: 7:00 - 19:00</p>
                    <p className="text-white/80">Sabato: 8:00 - 17:00</p>
                    <p className="text-white/80">Domenica: Solo su appuntamento</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h5 className="font-semibold text-white mb-3">Seguici</h5>
                <div className="flex space-x-4">
                  <motion.a 
                    href="#" 
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fab fa-facebook-f text-white"></i>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fab fa-instagram text-white"></i>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fab fa-twitter text-white"></i>
                  </motion.a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-7/12"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-xl shadow-xl p-8">
                <h3 className="text-2xl font-heading font-bold mb-6">Prenota un soggiorno o richiedi informazioni</h3>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full transform rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,122.7C96,149,192,203,288,218.7C384,235,480,213,576,192C672,171,768,149,864,154.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default ContactSection;
