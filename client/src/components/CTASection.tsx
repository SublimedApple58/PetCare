import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto bg-[#F3C677] rounded-2xl p-8 md:p-12 text-center shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#8B5A2B] mb-6">Pronto a offrire al tuo animale le migliori cure?</h2>
          <p className="text-lg text-[#8B5A2B]/80 mb-8 max-w-2xl mx-auto">
            Prenota oggi il soggiorno del tuo cane e regalagli una vacanza mentre sei via. I posti si riempiono in fretta, non aspettare!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a 
              href="#contact" 
              className="bg-[#8B5A2B] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#8B5A2B]/80 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Prenota ora
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
