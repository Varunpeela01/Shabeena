import React from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import LoveSection from "./components/LoveSection";

function App() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <motion.div
        className="snap-start"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Hero />
      </motion.div>
      <motion.div
        className="snap-start"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <LoveSection />
      </motion.div>
    </main>
  );
}

export default App;