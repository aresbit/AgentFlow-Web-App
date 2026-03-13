import { motion } from 'framer-motion';

export function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-6 left-6 z-50 flex items-center gap-3"
    >
      {/* Logo Icon */}
      <div className="relative w-10 h-10">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Outer ring */}
          <circle
            cx="20"
            cy="20"
            r="18"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            opacity="0.8"
          />
          {/* Inner hexagon representing AI/Agent */}
          <path
            d="M20 8L28.66 13V23L20 28L11.34 23V13L20 8Z"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            opacity="0.9"
          />
          {/* Center dot */}
          <circle cx="20" cy="20" r="3" fill="white" />
          {/* Orbital dots */}
          <circle cx="20" cy="4" r="2" fill="#FF6B35" />
          <circle cx="32" cy="26" r="2" fill="#FF6B35" />
          <circle cx="8" cy="26" r="2" fill="#FF6B35" />
        </svg>
      </div>
      
      {/* Logo Text */}
      <span className="text-white text-lg font-medium tracking-wide">
        AgentFlow
      </span>
    </motion.div>
  );
}
