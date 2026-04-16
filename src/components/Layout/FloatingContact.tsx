import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://zalo.me/0388423600"
        className="w-14 h-14 bg-[#0068ff] text-white flex items-center justify-center rounded-full shadow-lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" 
          alt="Zalo" 
          className="w-8 h-8 rounded-lg" 
        />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="tel:0388423600"
        className="w-14 h-14 bg-primary text-white flex items-center justify-center rounded-full shadow-lg relative"
      >
        <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
        <Phone className="w-7 h-7" />
      </motion.a>
    </div>
  );
};

export default FloatingContact;
