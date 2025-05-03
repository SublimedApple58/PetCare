import { motion } from "framer-motion";
import { FEATURES } from "@/lib/constants";

const FeaturesSection = () => {
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
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-semibold text-[#4A7C59] uppercase tracking-wide">Perché scegliere noi</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-heading font-bold text-[#333333]">Cosa ci rende diversi</h3>
          <p className="mt-4 text-lg">
          Ci impegniamo a fornire la migliore assistenza possibile al tuo cane mentre sei via.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {FEATURES.map((feature) => (
            <motion.div 
              key={feature.id}
              className="text-center p-6"
              variants={itemVariants}
            >
              <motion.div 
                className="w-16 h-16 mx-auto bg-[#4A7C59]/10 rounded-full flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(74, 124, 89, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <i className={`fas fa-${feature.icon} text-[#4A7C59] text-2xl`}></i>
              </motion.div>
              <h4 className="text-xl font-heading font-bold mb-2">{feature.title}</h4>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
