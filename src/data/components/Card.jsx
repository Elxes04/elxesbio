import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({ title, children, icon: Icon, className = "", borderVariant = "purple" }) => {
  const accentIconColor = borderVariant === "purple" ? "text-purple-400" : "text-cyan-400";
  const hoverBorderClass = borderVariant === "purple" 
    ? "hover:border-purple-400/40 hover:shadow-purple-500/10" 
    : "hover:border-cyan-400/40 hover:shadow-cyan-500/10";
  
  return (
    <motion.section 
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className={`frosted-card p-6 sm:p-7 ${hoverBorderClass} ${className}`}
    >
      <div className="flex items-center gap-3 mb-4">
        {Icon && <Icon className={`${accentIconColor} w-6 h-6 shrink-0`} />}
        <h2 className="text-xl font-bold uppercase tracking-tight text-white">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
};