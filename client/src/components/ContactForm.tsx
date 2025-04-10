import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { ContactFormData } from "@/lib/types";
import { SERVICE_OPTIONS } from "@/lib/constants";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  dogInfo: z.string().min(10, "Please provide more details about your dog"),
  message: z.string().optional(),
  consent: z.boolean().refine(val => val === true, "You must consent to store your information")
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      dogInfo: "",
      message: "",
      consent: false
    }
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate API call with timeout
    setTimeout(() => {
      console.log("Form submitted:", data);
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Request Submitted",
        description: "Thank you for your message! We'll get back to you soon about caring for your furry friend.",
      });
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
          <input 
            type="text" 
            id="name" 
            className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-[#4A7C59] focus:border-[#4A7C59]`} 
            {...register("name")}
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email *</label>
          <input 
            type="email" 
            id="email" 
            className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-[#4A7C59] focus:border-[#4A7C59]`} 
            {...register("email")}
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4A7C59] focus:border-[#4A7C59]" 
            {...register("phone")}
          />
        </div>
        
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interested In *</label>
          <select 
            id="service" 
            className={`w-full px-4 py-2 border ${errors.service ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-[#4A7C59] focus:border-[#4A7C59]`} 
            {...register("service")}
          >
            {SERVICE_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          {errors.service && <p className="mt-1 text-sm text-red-500">{errors.service.message}</p>}
        </div>
      </div>
      
      <div>
        <label htmlFor="dogInfo" className="block text-sm font-medium text-gray-700 mb-1">About Your Dog *</label>
        <textarea 
          id="dogInfo" 
          rows={3} 
          className={`w-full px-4 py-2 border ${errors.dogInfo ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-[#4A7C59] focus:border-[#4A7C59]`} 
          placeholder="Please share your dog's name, breed, age, and any special needs or requirements." 
          {...register("dogInfo")}
        ></textarea>
        {errors.dogInfo && <p className="mt-1 text-sm text-red-500">{errors.dogInfo.message}</p>}
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea 
          id="message" 
          rows={3} 
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4A7C59] focus:border-[#4A7C59]" 
          placeholder="Any additional information or questions?"
          {...register("message")}
        ></textarea>
      </div>
      
      <div className="flex items-start">
        <input 
          type="checkbox" 
          id="consent" 
          className={`mt-1 h-4 w-4 text-[#4A7C59] focus:ring-[#4A7C59] ${errors.consent ? 'border-red-500' : 'border-gray-300'} rounded`} 
          {...register("consent")}
        />
        <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
          I consent to having my information stored for the purpose of being contacted about pet care services.
        </label>
      </div>
      {errors.consent && <p className="mt-1 text-sm text-red-500">{errors.consent.message}</p>}
      
      <div>
        <motion.button 
          type="submit" 
          className="w-full bg-[#4A7C59] text-white py-3 px-6 rounded-md hover:bg-[#4A7C59]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4A7C59] transition duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Request'}
        </motion.button>
      </div>
      
      <AnimatePresence>
        {isSuccess && (
          <motion.div 
            className="mt-4 p-4 bg-green-100 text-green-700 rounded-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            Thank you for your message! We'll get back to you soon about caring for your furry friend.
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
};

export default ContactForm;
