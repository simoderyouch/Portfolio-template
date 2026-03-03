import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WelcomeScreen = ({ onWelcomeComplete }) => {
  const [exitAnimation, setExitAnimation] = useState(false);

  useEffect(() => {
    // Show loading screen for 1.8 seconds, then begin exit animation
    const completeTimer = setTimeout(() => {
      setExitAnimation(true);
      setTimeout(onWelcomeComplete, 800); // Give time for exit transition
    }, 1800);

    return () => clearTimeout(completeTimer);
  }, [onWelcomeComplete]);

  return (
    <AnimatePresence>
      {!exitAnimation && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="relative flex items-center justify-center">
            {/* Outer spinning ring */}
            <motion.div
              className="absolute w-24 h-24 rounded-full border-t-2 border-r-2 border-primary/60"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />

            {/* Middle spinning ring */}
            <motion.div
              className="absolute w-16 h-16 rounded-full border-b-2 border-l-2 border-primary/80"
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />

            {/* Center pulse */}
            <motion.div
              className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center"
              animate={{ scale: [0.8, 1.1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-4 h-4 rounded-full bg-primary" />
            </motion.div>
          </div>

          <motion.div
            className="mt-12 text-xs md:text-sm text-muted-foreground font-mono tracking-[0.3em] uppercase"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            Initializing
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;