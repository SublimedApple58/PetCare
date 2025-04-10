const Footer = () => {
  return (
    <footer className="bg-[#8B5A2B] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <i className="fas fa-paw text-[#F3C677] text-2xl mr-2"></i>
              <span className="font-heading font-bold text-xl">Sirya's Dog Daycare</span>
            </div>
            <p className="mb-4 text-white/80">
              Providing loving, temporary care for your dogs in a home environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-[#F3C677] transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white/80 hover:text-[#F3C677] transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white/80 hover:text-[#F3C677] transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="font-heading font-bold text-lg mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-[#F3C677] transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/80 hover:text-[#F3C677] transition-colors">About Us</a></li>
              <li><a href="#services" className="text-white/80 hover:text-[#F3C677] transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-white/80 hover:text-[#F3C677] transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="text-white/80 hover:text-[#F3C677] transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-[#F3C677] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-heading font-bold text-lg mb-4">Services</h5>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white/80 hover:text-[#F3C677] transition-colors">Day Care</a></li>
              <li><a href="#services" className="text-white/80 hover:text-[#F3C677] transition-colors">Overnight Stays</a></li>
              <li><a href="#services" className="text-white/80 hover:text-[#F3C677] transition-colors">Walking Service</a></li>
              <li><a href="#services" className="text-white/80 hover:text-[#F3C677] transition-colors">Basic Training</a></li>
              <li><a href="#services" className="text-white/80 hover:text-[#F3C677] transition-colors">Grooming</a></li>
              <li><a href="#services" className="text-white/80 hover:text-[#F3C677] transition-colors">Senior Dog Care</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-heading font-bold text-lg mb-4">Contact Info</h5>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-2"></i>
                <span>123 Bark Avenue, Dogtown, CA 90210</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone mt-1 mr-2"></i>
                <span>(555) 123-BARK</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-2"></i>
                <span>sirya@dogdaycare.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock mt-1 mr-2"></i>
                <span>Mon-Fri: 7am-7pm, Sat: 8am-5pm</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-white/60">
            &copy; {new Date().getFullYear()} Sirya's Dog Daycare. All rights reserved.
          </p>
          <p className="text-white/60 mt-2 text-sm">
            <a href="#" className="hover:text-[#F3C677] transition-colors">Privacy Policy</a> | 
            <a href="#" className="hover:text-[#F3C677] transition-colors"> Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
