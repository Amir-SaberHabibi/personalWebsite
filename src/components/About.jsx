import aboutImg from "../assets/prof_uni.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <div className="my-36 text-center text-4xl">
        <h1>
          About
          <span className="text-neutral-500"> Me</span>
        </h1>
      </div>
      <div className="flex flex-wrap">
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 1, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-1"
        >
          <div className="flex items-center justify-center">
            <img 
              className="rounded-2xl w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] mt-[-20px] lg:mt-[-40px] ml-4 lg:ml-10"  // Moved the image up and to the right
              src={aboutImg} 
              alt="about" 
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </motion.div> {/* Correctly closed the motion.div here */}
      </div>
    </div>
  );
};

export default About;