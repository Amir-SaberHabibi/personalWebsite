import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/prof.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-2 lg:mb-35"> {/* Reduced padding-bottom */}
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-start lg:items-start lg:pl-20 pl-5">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-2 text-6xl font-thin tracking-tight lg:mt-[-25px] lg:text-7xl"> {/* Reduced padding-bottom */}
              Amir Saberhabibi
            </motion.h1>
            <motion.span   
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Computer Scientist
            </motion.span>

            {/* Research Interests Section */}
            <motion.div 
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              className="mt-4 flex flex-wrap gap-2"
            >
              <span className="px-1.5 py-1 bg-gradient-to-r from-pink-900 via-slate-800 to-purple-900 bg-opacity-70 text-white text-xs font-medium rounded-md transition-transform transform hover:scale-105 hover:bg-gradient-to-r hover:from-pink-700 hover:via-slate-600 hover:to-purple-700">
                Machine Learning
              </span>
              <span className="px-1.5 py-1 bg-gradient-to-r from-pink-900 via-slate-800 to-purple-900 bg-opacity-70 text-white text-xs font-medium rounded-md transition-transform transform hover:scale-105 hover:bg-gradient-to-r hover:from-pink-700 hover:via-slate-600 hover:to-purple-700">
                Natural Language Processing
              </span>
              <span className="px-1.5 py-1 bg-gradient-to-r from-pink-900 via-slate-800 to-purple-900 bg-opacity-70 text-white text-xs font-medium rounded-md transition-transform transform hover:scale-105 hover:bg-gradient-to-r hover:from-pink-700 hover:via-slate-600 hover:to-purple-700">
                Generative AI
              </span>
              <span className="px-1.5 py-1 bg-gradient-to-r from-pink-900 via-slate-800 to-purple-900 bg-opacity-70 text-white text-xs font-medium rounded-md transition-transform transform hover:scale-105 hover:bg-gradient-to-r hover:from-pink-700 hover:via-slate-600 hover:to-purple-700">
                Information Retrieval
              </span>
              <span className="px-1.5 py-1 bg-gradient-to-r from-pink-900 via-slate-800 to-purple-900 bg-opacity-70 text-white text-xs font-medium rounded-md transition-transform transform hover:scale-105 hover:bg-gradient-to-r hover:from-pink-700 hover:via-slate-600 hover:to-purple-700">
                Intent Detection
              </span>
              <span className="px-1.5 py-1 bg-gradient-to-r from-pink-900 via-slate-800 to-purple-900 bg-opacity-70 text-white text-xs font-medium rounded-md transition-transform transform hover:scale-105 hover:bg-gradient-to-r hover:from-pink-700 hover:via-slate-600 hover:to-purple-700">
                Large Language Models
              </span>
              <span className="px-1.5 py-1 bg-gradient-to-r from-pink-900 via-slate-800 to-purple-900 bg-opacity-70 text-white text-xs font-medium rounded-md transition-transform transform hover:scale-105 hover:bg-gradient-to-r hover:from-pink-700 hover:via-slate-600 hover:to-purple-700">
                Software Engineering
              </span>
            </motion.div>

            <motion.p
              variants={container(0.4)}
              initial="hidden"
              animate="visible" 
              className="my-0 max-w-xl py-4 font-light" style={{ fontSize: '15px' }}>
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-0 flex justify-center">
          <div className="relative">
            <motion.img 
                initial={{x: 100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, delay: 0.25 }}
                src={profilePic} 
                alt="Amir Saberhabibi" 
                className="profile-pic w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] object-cover rounded-lg border-10 border-neutral-900 mb-5"
                style={{ marginTop: '-10px' }}  // Moves the picture up
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
