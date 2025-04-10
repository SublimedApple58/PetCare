import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { useMediaQuery } from "@/hooks/use-mobile";

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isLgScreen = useMediaQuery("(min-width: 1024px)");
  
  const totalSlides = TESTIMONIALS.length;
  const slidesToShow = isLgScreen ? 3 : 1;
  const maxSlideIndex = totalSlides - slidesToShow;

  useEffect(() => {
    // Reset slide position when screen size changes
    setCurrentSlide(prev => Math.min(prev, maxSlideIndex));
  }, [isLgScreen, maxSlideIndex]);

  const moveToSlide = (index: number) => {
    const slideWidth = isLgScreen ? 33.333 : 100;
    
    // Limit index to valid range
    let newIndex = index;
    if (newIndex < 0) newIndex = 0;
    if (newIndex > maxSlideIndex) newIndex = maxSlideIndex;
    
    setCurrentSlide(newIndex);
    
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${slideWidth * newIndex}%)`;
    }
  };

  const renderRatingStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }
    
    return stars;
  };

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-semibold text-[#4A7C59] uppercase tracking-wide">Happy Pet Parents</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-heading font-bold text-[#333333]">What They Say</h3>
          <p className="mt-4 text-lg">
            Don't just take our word for it - here's what other dog owners have to say.
          </p>
        </motion.div>
        
        <div className="relative max-w-5xl mx-auto">
          <motion.button 
            onClick={() => moveToSlide(currentSlide - 1)}
            disabled={currentSlide === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 -ml-5 md:ml-0 ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            whileHover={currentSlide !== 0 ? { scale: 1.1 } : {}}
            whileTap={currentSlide !== 0 ? { scale: 0.9 } : {}}
            aria-label="Previous testimonial"
          >
            <i className="fas fa-chevron-left text-[#4A7C59]"></i>
          </motion.button>
          
          <div className="overflow-hidden">
            <motion.div 
              ref={sliderRef}
              id="testimonial-slider" 
              className="flex transition-transform duration-300 ease-in-out"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {TESTIMONIALS.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="testimonial-slide min-w-full lg:min-w-[33.333%] px-4"
                >
                  <div className="bg-white rounded-xl shadow-md p-6 h-full">
                    <div className="flex items-center mb-4">
                      <div className="text-[#4A7C59]">
                        {renderRatingStars(testimonial.rating)}
                      </div>
                    </div>
                    <p className="italic mb-6">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.author.avatar} 
                          alt={testimonial.author.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="font-bold">{testimonial.author.name}</h5>
                        <p className="text-sm text-gray-500">{testimonial.author.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          <motion.button 
            onClick={() => moveToSlide(currentSlide + 1)}
            disabled={currentSlide >= maxSlideIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 -mr-5 md:mr-0 ${currentSlide >= maxSlideIndex ? 'opacity-50 cursor-not-allowed' : ''}`}
            whileHover={currentSlide < maxSlideIndex ? { scale: 1.1 } : {}}
            whileTap={currentSlide < maxSlideIndex ? { scale: 0.9 } : {}}
            aria-label="Next testimonial"
          >
            <i className="fas fa-chevron-right text-[#4A7C59]"></i>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
