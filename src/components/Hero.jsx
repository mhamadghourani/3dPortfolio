/** @format */

import { motion } from "framer-motion";

import { styles } from "../styles";

import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX}
         absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col items-center justify-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 h-40 violet-gradient sm:h-80' />
        </div>
        <div>
          <h1 className={`text-[27px] text-white`}>
            Hi, I&apos;m <span className='text-[#915eff]'>Mohamad</span>
          </h1>
          <p className='text-[16px] mt-2 text-secondary'>
            I develop frontend web & mobile application and,
            <br className='hidden sm:block' />
            3D visuals interfaces.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute flex items-center justify-center w-full xs:bottom-5 bottom-32'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 mb-1 rounded-full bg-secondary'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
