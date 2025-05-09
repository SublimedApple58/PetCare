import { motion } from "framer-motion";
import { GALLERY_IMAGES } from "@/lib/constants";

const GallerySection = () => {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#F9F9F7] paw-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-semibold text-[#4A7C59] uppercase tracking-wide">I nostri ospiti felici</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-heading font-bold text-[#333333]">Galleria</h3>
          <p className="mt-4 text-lg">
          Date un'occhiata ad alcuni dei nostri amici pelosi che si divertono nel nostro asilo.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div 
              key={image.id}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300 aspect-square"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
