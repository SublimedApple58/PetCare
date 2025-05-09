import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-[#F9F9F7] paw-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-semibold text-[#4A7C59] uppercase tracking-wide">Cosa offriamo</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-heading font-bold text-[#333333]">I nostri servizi di asilo</h3>
          <p className="mt-4 text-lg">
            Offriamo servizi di cura completi per i vostri animali mentre siete via. Tutti i servizi includono tanto amore e attenzione!
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SERVICES.map((service) => (
            <motion.div 
              key={service.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
              variants={itemVariants}
            >
              <div className="w-14 h-14 bg-[#4A7C59]/10 rounded-full flex items-center justify-center mb-4">
                <i className={`fas fa-${service.icon} text-[#4A7C59] text-2xl`}></i>
              </div>
              <h4 className="text-xl font-heading font-bold mb-3">{service.title}</h4>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fas fa-check text-[#4A7C59] mt-1 mr-2"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {/* <p className="font-semibold text-[#4A7C59]">{service.price}</p> */}
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <motion.a 
            href="https://wa.me/393317335872?text=servizio%20desiderato:%20"
            target="blanket"
            className="inline-flex items-center bg-[#8B5A2B] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#8B5A2B]/80 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Prenota un servizio</span>
            <i className="fas fa-paw ml-2"></i>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
