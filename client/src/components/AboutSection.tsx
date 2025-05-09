import { motion } from "framer-motion";

const AboutSection = () => {
  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5
      }
    })
  };

  return (
    <section id="about" className="pt-8 md:pt-16 pb-16 md:pb-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="lg:flex items-center gap-12">
            <motion.div 
              className="lg:w-1/2 mb-10 lg:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Sirya with dogs" 
                  className="rounded-xl shadow-xl w-full object-cover h-[500px]"
                />
                {/* <motion.div 
                  className="absolute -bottom-5 -right-5 bg-[#F3C677] rounded-xl p-4 shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <p className="text-[#8B5A2B] font-heading font-bold text-lg">10+ Years Experience</p>
                </motion.div> */}
              </div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <h2 className="text-sm font-semibold text-[#4A7C59] uppercase tracking-wide">Conosci meglio la tua pet sitter</h2>
                <h3 className="mt-2 text-3xl md:text-4xl font-heading font-bold text-[#333333]">Ciao! Mi chiamo Sirya</h3>
              </div>
              <p className="text-lg mb-6">
                Ho 19 anni, da quando sono piccola ho un forte amore per gli animali e sono una studentessa di "tutela e benessere animale".
                Ho deciso di creare un luogo dove gli animali si possono senire a casa e amati anche se lotani dai loro padroni.
              </p>
              {/* <p className="text-lg mb-6">
                <span className="font-semibold">Important Note:</span> We are <span className="text-[#4A7C59] font-semibold">NOT</span> an adoption service. 
                We provide temporary care for your pets while you're unavailable, ensuring they receive love, 
                exercise, and attention until you return.
              </p> */}
              {/* <div className="grid grid-cols-2 gap-4 mb-8">
                {['Certified Pet Care Specialist', 'First Aid Trained', 'Insured Service', 'Spacious Play Areas'].map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center"
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={featureVariants}
                  >
                    <i className="fas fa-check-circle text-[#4A7C59] mr-2"></i>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div> */}
              <motion.a 
                href="https://wa.me/393317335872?text=info%20pet%20terapy" 
                target="blanket" 
                className="inline-flex items-center bg-[#4A7C59] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#4A7C59]/80 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Mettiamoci in contatto</span>
                <i className="fas fa-arrow-right ml-2"></i>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
