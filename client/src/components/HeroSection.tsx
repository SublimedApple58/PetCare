import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-[#4A7C59] paw-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            A Safe Haven For Your Furry Friends
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            We provide loving daycare for your dogs while you're away. 
            <span className="font-semibold"> Not an adoption service</span> - just a temporary home away from home.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a 
              href="#services" 
              className="bg-white text-[#4A7C59] font-semibold px-6 py-3 rounded-lg hover:bg-[#F3C677] transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Services
            </motion.a>
            <motion.a 
              href="#contact" 
              className="bg-[#8B5A2B] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#8B5A2B]/80 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Stay
            </motion.a>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,122.7C96,149,192,203,288,218.7C384,235,480,213,576,192C672,171,768,149,864,154.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
