import { motion } from 'framer-motion';
import personImage from './assets/person.png';

function App() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-pink-300 via-purple-300 to-orange-200 relative overflow-hidden">
      {/* Background Text */}
      <motion.h1
        className="absolute text-[20rem] font-bold text-pink-200 opacity-50 tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
      >
        SHABEENA
      </motion.h1>

      {/* Smaller Text */}
      <motion.p
        className="absolute top-10 text-2xl text-pink-600 font-semibold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        made with love, just for you my girl!
      </motion.p>

      {/* Image */}
      <motion.img
        src={personImage}
        alt="Person"
        className="z-10 w-1/3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />

      {/* Heart Icon */}
      <motion.div
        className="absolute top-5 right-5 text-4xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        ❤️
      </motion.div>
    </div>
  );
}

export default App;