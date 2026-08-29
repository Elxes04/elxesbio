import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({ title, children, icon: Icon, className = "", borderVariant = "purple" }) => {
  const borderClass = borderVariant === "purple" ? "border-purple-700" : "border-cyan-700";
  
  return (
    <motion.section 
      whileHover={{ scale: 1.01 }}
      className={`frosted-card p-6 border-b-8 border-r-8 ${borderClass} shadow-xl ${className}`}
    >
      <div className="flex items-center gap-3 mb-4">
        {Icon && <Icon className={borderVariant === "purple" ? "text-purple-400" : "text-cyan-400"} />}
        <h2 className="text-2xl font-bold uppercase tracking-tighter">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
};