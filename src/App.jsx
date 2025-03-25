import { motion } from "framer-motion";

const CircleAnimation = ({ children, delay = 0 }) => (
  <motion.g
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 0.64, scale: 1 }}
    transition={{
      duration: 1.5,
      delay,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.g>
);

const AnimatedLetter = ({ letter, index }) => {
  return (
    <motion.span
      animate={{
        color: ["#FF69B4", "#FFF", "#FF69B4"],
        textShadow: ["0 0 0px #FF69B4", "0 0 20px #FF69B4", "0 0 0px #FF69B4"],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatDelay: 7,
        delay: index * 1,
        ease: "easeInOut",
      }}
      className="inline-block"
    >
      {letter}
    </motion.span>
  );
};

function App() {
  const name = "SHABEENA";

  return (
    <div className="flex overflow-hidden relative flex-col items-center mx-auto w-screen h-screen bg-red-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute text-center text-pink-400 z-[2] top-[16vh] -translate-y-[20px]
          text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl
          font-normal tracking-wide uppercase w-full"
      >
        Made with love, just for you my girl!
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute text-center font-lilita font-black tracking-[0.05em] uppercase text-pink-400 z-[1]
          text-[70px] top-[25vh] w-full -translate-y-[50px]
          xs:text-[80px]
          sm:text-[100px]
          md:text-[120px]
          lg:text-[140px]
          xl:text-[160px]
          2xl:text-[180px]"
      >
        {name.split("").map((letter, index) => (
          <AnimatedLetter key={index} letter={letter} index={index} />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center items-end w-full z-[2] mt-auto px-4"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed7c00d2c67653b5d27cbdfe265d8b02a3521553"
          className="object-cover block mx-auto translate-x-[25px]
            max-w-[500px] h-[550px]
            xs:max-w-[500px] xs:h-[500px]
            sm:max-w-[550px] sm:h-[500px]
            md:max-w-[600px] md:h-[580px]
            lg:max-w-[650px] lg:h-[600px]
            xl:max-w-[700px] xl:h-[700px]
            2xl:max-w-[774px] 2xl:h-[600px]"
          alt="Woman in pink dress"
        />
      </motion.div>

      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 1280 832"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="background-circles fixed top-0 left-0 w-screen h-screen z-0"
      >
        <g clipPath="url(#clip0_8_90)">
          <CircleAnimation delay={0}>
            <g filter="url(#filter0_f_8_90)">
              <circle cx="87" cy="648" r="130" fill="#FF69B4"></circle>
            </g>
          </CircleAnimation>

          <CircleAnimation delay={0.2}>
            <g filter="url(#filter1_f_8_90)">
              <circle cx="649.5" cy="389.5" r="76.5" fill="#D580AA"></circle>
            </g>
          </CircleAnimation>

          <CircleAnimation delay={0.4}>
            <g filter="url(#filter2_f_8_90)">
              <circle cx="989.5" cy="33.5" r="104.5" fill="#FF69B4"></circle>
            </g>
          </CircleAnimation>

          <CircleAnimation delay={0.6}>
            <g filter="url(#filter3_f_8_90)">
              <circle cx="1233.5" cy="797.5" r="76.5" fill="#FF69B4"></circle>
            </g>
          </CircleAnimation>

          <CircleAnimation delay={0.8}>
            <g filter="url(#filter4_f_8_90)">
              <circle cx="198.5" cy="33.5" r="331.5" fill="#FFD3B8"></circle>
            </g>
          </CircleAnimation>

          <CircleAnimation delay={1}>
            <g filter="url(#filter5_f_8_90)">
              <circle cx="560" cy="778" r="150" fill="#FBB6FF"></circle>
            </g>
          </CircleAnimation>

          <CircleAnimation delay={1.2}>
            <g filter="url(#filter6_f_8_90)">
              <circle cx="1049" cy="464" r="164" fill="#FBB6FF"></circle>
            </g>
          </CircleAnimation>
        </g>
        <defs>
          <filter
            id="filter0_f_8_90"
            x="-143"
            y="418"
            width="460"
            height="460"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="50"
              result="effect1_foregroundBlur_8_90"
            ></feGaussianBlur>
          </filter>
          <filter
            id="filter1_f_8_90"
            x="473"
            y="213"
            width="353"
            height="353"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="50"
              result="effect1_foregroundBlur_8_90"
            ></feGaussianBlur>
          </filter>
          <filter
            id="filter2_f_8_90"
            x="785"
            y="-171"
            width="409"
            height="409"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="50"
              result="effect1_foregroundBlur_8_90"
            ></feGaussianBlur>
          </filter>
          <filter
            id="filter3_f_8_90"
            x="1057"
            y="621"
            width="353"
            height="353"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="50"
              result="effect1_foregroundBlur_8_90"
            ></feGaussianBlur>
          </filter>
          <filter
            id="filter4_f_8_90"
            x="-233"
            y="-398"
            width="863"
            height="863"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="50"
              result="effect1_foregroundBlur_8_90"
            ></feGaussianBlur>
          </filter>
          <filter
            id="filter5_f_8_90"
            x="310"
            y="528"
            width="500"
            height="500"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="50"
              result="effect1_foregroundBlur_8_90"
            ></feGaussianBlur>
          </filter>
          <filter
            id="filter6_f_8_90"
            x="785"
            y="200"
            width="528"
            height="528"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="50"
              result="effect1_foregroundBlur_8_90"
            ></feGaussianBlur>
          </filter>
          <clipPath id="clip0_8_90">
            <rect width="1280" height="832" fill="white"></rect>
          </clipPath>
        </defs>
      </motion.svg>
    </div>
  );
}

export default App;
