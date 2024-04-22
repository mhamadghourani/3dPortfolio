/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/** @format */

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, index, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full '>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
          option={{ max: 45, scale: 1, speed: 450 }}
          className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col bg-tertiary'>
            <img src={icon}  alt={title} className="object-contain w-16 h-16"/>
            <h3 className="text-center text-white text-bold text-[20px]">{title}</h3>
          </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview..</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] mx-w-3xl leading-[30px]'>
        I&apos;m skilled frontend developer with experience in javascript, and
        expertise in framework like react.js, next.js, react.native, three.js.<br />
        I&apos;m quick learner and collaborate closely with clients to create
        efficient, scalable, and user-friendly solution that solve real-world
        problems. Lets work together to bring your idea to life!
      </motion.p>
      <div className='flex flex-wrap gap-10 mt-20'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
