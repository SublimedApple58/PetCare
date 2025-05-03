import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { ContactFormData } from "@/lib/types";
import { SERVICE_OPTIONS } from "@/lib/constants";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Il nome deve contenere almeno 2 caratteri"),
  email: z.string().email("Inserisci un indirizzo email valido"),
  phone: z.string().optional(),
  service: z.string().min(1, "Seleziona un servizio"),
  dogInfo: z.string().min(10, "Fornisci più dettagli sul tuo cane"),
  message: z.string().optional(),
  consent: z.boolean().refine(val => val === true, "Devi acconsentire alla memorizzazione delle informazioni")
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

    // Simulazione chiamata API
    setTimeout(() => {
      console.log("Modulo inviato:", data);
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Richiesta inviata",
        description: "Grazie per il tuo messaggio! Ti ricontatteremo presto per prenderci cura del tuo amico peloso.",
      });
      reset();

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Il tuo nome *</label>
          <input 
            type="text" 
            id="name" 
            className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-[#4A7C59] focus:border-[#4A7C59]`} 
            {...register("name")}
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">La tua email *</label>
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
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Numero di telefono</label>
          <input 
            type="tel" 
            id="phone" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4A7C59] focus:border-[#4A7C59]" 
            {...register("phone")}
          />
        </div>
        
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Servizio richiesto *</label>
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
        <label htmlFor="dogInfo" className="block text-sm font-medium text-gray-700 mb-1">Informazioni sul tuo cane *</label>
        <textarea 
          id="dogInfo" 
          rows={3} 
          className={`w-full px-4 py-2 border ${errors.dogInfo ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-[#4A7C59] focus:border-[#4A7C59]`} 
          placeholder="Nome, razza, età, esigenze particolari o note importanti." 
          {...register("dogInfo")}
        ></textarea>
        {errors.dogInfo && <p className="mt-1 text-sm text-red-500">{errors.dogInfo.message}</p>}
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Messaggio</label>
        <textarea 
          id="message" 
          rows={3} 
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4A7C59] focus:border-[#4A7C59]" 
          placeholder="Ulteriori informazioni o domande?"
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
          Acconsento alla memorizzazione delle mie informazioni per essere ricontattato riguardo i servizi di cura per animali.
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
          {isSubmitting ? 'Invio in corso...' : 'Invia richiesta'}
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
            Grazie per il tuo messaggio! Ti ricontatteremo presto per prenderci cura del tuo amico peloso.
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
};

export default ContactForm;
