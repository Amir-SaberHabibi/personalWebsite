import { SiGit, SiPython, SiPandas, SiScikitlearn, SiHuggingface, SiTensorflow, SiKeras, SiNumpy, SiPytorch } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const technologies = [
    { icon: <SiPython className="text-7xl text-yellow-500" />, name: "Python" },
    { icon: <SiGit className="text-7xl text-orange-600" />, name: "Git" },
    { icon: <SiPandas className="text-7xl text-blue-500" />, name: "Pandas" },
    { icon: <SiNumpy className="text-7xl text-blue-400" />, name: "NumPy" },
    { icon: <SiHuggingface className="text-7xl text-yellow-400" />, name: "Transformers" },
    { icon: <SiScikitlearn className="text-7xl text-orange-400" />, name: "scikit-learn" },
    { icon: <SiTensorflow className="text-7xl text-orange-500" />, name: "TensorFlow" },
    { icon: <SiKeras className="text-7xl text-red-500" />, name: "Keras" },
    { icon: <SiPytorch className="text-7xl text-red-600" />, name: "PyTorch" },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        className="my-14 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.2 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="relative group rounded-2xl border-4 border-neutral-800 p-4 transition-transform transform hover:scale-110"
          >
            {tech.icon}
            <span className="absolute left-1/2 bottom-[-30px] w-max -translate-x-1/2 scale-0 bg-neutral-800 text-white text-xs p-1 rounded-lg transition-transform group-hover:scale-100">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
